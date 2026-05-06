import { NextResponse } from 'next/server'
import twilio from 'twilio'

const SID   = process.env.TWILIO_ACCOUNT_SID
const TOKEN = process.env.TWILIO_AUTH_TOKEN
const FROM  = 'whatsapp:+14155238886'

export async function POST(req) {
  try {
    const body = await req.json()
    const { type, phone, name, event, date, time, venue, companions, token } = body

    if (!phone || !name) {
      return NextResponse.json({ error: 'phone and name required' }, { status: 400 })
    }

    const digits   = String(phone).replace(/\D/g, '')
    const toNumber = `whatsapp:+${digits}`
    const client   = twilio(SID, TOKEN)
    const qrData   = token || name
    const qrUrl    = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&color=3A2E22&bgcolor=FAFAF7&data=${encodeURIComponent(qrData)}`

    let message

    if (type === 'invite') {
      const lines = [`أهلاً ${name}! 🎉`]
      if (event) lines.push(`\nدعوتك لـ: ${event}`)
      if (date)  lines.push(`📅 ${date}`)
      if (time)  lines.push(`🕗 ${time}`)
      if (venue) lines.push(`📍 ${venue}`)
      lines.push(`\nمرحباً بك في ارحبوا — منصتك للدعوات الذكية`)

      message = await client.messages.create({
        from: FROM,
        to:   toNumber,
        body: lines.join('\n'),
      })

    } else if (type === 'confirm') {
      message = await client.messages.create({
        from:     FROM,
        to:       toNumber,
        body:     `✅ تم تأكيد حضورك يا ${name}!\n\nمعك بطاقة دخولك — أبرزها عند مدخل القاعة 🎟️`,
        mediaUrl: [qrUrl],
      })

    } else if (type === 'reminder') {
      message = await client.messages.create({
        from:     FROM,
        to:       toNumber,
        body:     `⏰ تذكير! اليوم موعد ${event || 'المناسبة'} يا ${name}${time ? `\n🕗 ${time}` : ''}${venue ? `\n📍 ${venue}` : ''}\n\nلا تنسى بطاقة دخولك! 🎟️`,
        mediaUrl: [qrUrl],
      })

    } else {
      return NextResponse.json({ error: 'type must be invite, confirm, or reminder' }, { status: 400 })
    }

    return NextResponse.json({ success: true, sid: message.sid })

  } catch (err) {
    console.error('Send error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

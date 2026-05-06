import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const PRICE_MAP = {
  lamat:   process.env.STRIPE_PRICE_LAMAAT,
  jalsat:  process.env.STRIPE_PRICE_JALSAT,
  mailes:  process.env.STRIPE_PRICE_MILES,
  kheima:  process.env.STRIPE_PRICE_KHAYMA,
}

export async function GET(req) {
  const secret = process.env.STRIPE_SECRET_KEY
  if (!secret) {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 })
  }

  const stripe = new Stripe(secret, { apiVersion: '2023-10-16' })
  const plan   = new URL(req.url).searchParams.get('plan') || 'lamat'
  const price  = PRICE_MAP[plan]

  if (!price) {
    return NextResponse.json({ error: 'Invalid plan: ' + plan }, { status: 400 })
  }

  const base = process.env.NEXT_PUBLIC_BASE_URL || 'https://arhbo.vercel.app'

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: [{ price, quantity: 1 }],
    success_url: `${base}/dash/billing?success=1`,
    cancel_url:  `${base}/dash/billing/plans?cancelled=1`,
  })

  return NextResponse.json({ url: session.url })
}

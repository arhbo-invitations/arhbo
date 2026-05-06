import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(req) {
  const secret        = process.env.STRIPE_SECRET_KEY
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!secret || !webhookSecret) {
    return NextResponse.json({ error: 'Not configured' }, { status: 500 })
  }

  const stripe = new Stripe(secret, { apiVersion: '2023-10-16' })
  const sig    = req.headers.get('stripe-signature')
  const buf    = await req.text()

  let event
  try {
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret)
  } catch (err) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    console.log('Payment completed:', session.id)
    // TODO: upgrade user plan in DB
  }

  return NextResponse.json({ received: true })
}

import { NextResponse } from 'next/server'
import clientPromise from '../../../lib/mongodb'

export async function POST(request) {
  try {
    const payload = await request.json()
    const { name, email, phone, message } = payload || {}

    if (!message || !email) {
      return NextResponse.json({ ok: false, error: 'Email and message are required.' }, { status: 400 })
    }

    const client = await clientPromise
    const dbName = process.env.MONGODB_DB || 'HostelManagement'
    const db = client.db(dbName)

    await db.collection('contact_messages').insertOne({
      name: name || 'Parent',
      email,
      phone: phone || '',
      message,
      createdAt: new Date()
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json({ ok: false, error: 'Failed to send message.' }, { status: 500 })
  }
}

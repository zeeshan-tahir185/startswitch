import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend('re_eaqLYEEK_NQUrn3ASJXMwhgN8Vkvtu9Zy') // client key

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Missing fields' })
    }

    await resend.emails.send({
      from: 'Website Contact <noreply@thestartswitch.com>',
      to: 'CLIENT_EMAIL_HERE', // 👈 Replace this with client’s actual email
      subject: 'New Contact Form Submission',
      html: `
        <h3>New message from The Start Switch</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, error: 'Failed to send email' })
  }
}

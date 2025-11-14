import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend('re_X1CbigeJ_Bdtcs7kdhhzepXrsv1Fn4NPy') // client verified key

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Missing fields' })
    }

    await resend.emails.send({
      from: 'The Start Switch <noreply@email.thestartswitch.com>',
      to: 'author@mathews.com',  // stays same (client receives the contact form)
      subject: 'Contact Form Submission',
      html: `
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

import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_eaqLYEEK_NQUrn3ASJXMwhgN8Vkvtu9Zy'); // same API key

export async function POST(req) {
  try {
    const formData = await req.formData();
    const email = formData.get('email');
    const file = formData.get('file');

    if (!email || !file) {
      return NextResponse.json(
        { success: false, message: 'Email and file are required.' },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const data = await resend.emails.send({
      from: 'author@mathews.com',
      to: 'author@mathews.com',
      subject: 'New Review Form Submission',
      html: `
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>File:</strong> Attached below.</p>
      `,
      attachments: [
        {
          filename: file.name,
          content: buffer.toString('base64'),
        },
      ],
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email.' },
      { status: 500 }
    );
  }
}

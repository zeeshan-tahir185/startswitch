import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_X1CbigeJ_Bdtcs7kdhhzepXrsv1Fn4NPy');

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const email = formData.get('email');
    const fileEntry = formData.get('file');

    if (!email || !fileEntry) {
      return NextResponse.json(
        { success: false, message: 'Email and file are required.' },
        { status: 400 }
      );
    }

    if (!(fileEntry instanceof File)) {
      return NextResponse.json(
        { success: false, message: 'Invalid file.' },
        { status: 400 }
      );
    }

    const file: File = fileEntry;
    const buffer = Buffer.from(await file.arrayBuffer());

    const data = await resend.emails.send({
      from: 'The Start Switch <noreply@email.thestartswitch.com>',
      to: 'author@mathews.com',
      subject: 'Review Proof Submission',
      html: `
        <p><strong>Email:</strong> ${email}</p>
        <p>Attached is the proof sent by a website visitor. Please be careful while opening attachments.</p>
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

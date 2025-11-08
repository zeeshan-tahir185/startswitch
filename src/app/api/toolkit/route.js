import { Resend } from 'resend';

const resend = new Resend('re_eaqLYEEK_NQUrn3ASJXMwhgN8Vkvtu9Zy'); 

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ success: false, message: 'Email is required' }),
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'author@mathews.com', // client ka sender email
      to: 'author@mathews.com',   // jahan sab forms ka data jana ha
      subject: 'New Toolkit Form Submission',
      html: `<p><strong>Email:</strong> ${email}</p>`,
    });

    return new Response(
      JSON.stringify({ success: true, data }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, message: 'Failed to send email' }),
      { status: 500 }
    );
  }
}

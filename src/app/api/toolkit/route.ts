import { Resend } from 'resend';

const resend = new Resend('re_X1CbigeJ_Bdtcs7kdhhzepXrsv1Fn4NPy'); // client verified key

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ success: false, message: 'Email is required' }),
        { status: 400 }
      );
    }

   const data = await resend.emails.send({
  from: 'The Start Switch <noreply@email.thestartswitch.com>',
  to: email, 
  subject: 'Your Start Switch Toolkit is here 🔓',
  html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background: #f8f8f8; border-radius: 10px;">
    
    <h2 style="color: #151515; font-size: 24px; margin-bottom: 16px;">Hey 👋 You just flipped the switch. Respect.</h2>
    
    <p style="font-size: 16px; color: #333; line-height: 1.6;">
      Here’s your Toolkit PDF:
    </p>

    <a href="https://drive.google.com/file/d/11DLss0-IjqKQ5CgaDFrTTLwNLdr1vP38/view"
       style="
         display: inline-block;
         background: #CD623B;
         color: white;
         text-decoration: none;
         padding: 12px 20px;
         margin-top: 12px;
         border-radius: 8px;
         font-size: 16px;
         font-weight: bold;
       ">
      Download the Start Switch Toolkit
    </a>

    <p style="font-size: 16px; color: #333; line-height: 1.6; margin-top: 24px;">
      Inside, you’ll find the tools to move from thinking to actually doing, even when motivation runs out.
      <br /><br />
      No fluff. No overwhelm. Just momentum.
    </p>

    <p style="font-size: 16px; color: #333; margin-top: 24px; line-height: 1.6;">
      Now go start something.
      <br /><br />
      — <strong>Anil Mathews</strong><br>
      Author of <em>The Start Switch</em>
    </p>

  </div>
  `,
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

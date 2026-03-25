import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "Roma Informatique <informatiqueroma@gmail.com>",
      to: "contact@romainformatique.be",
      subject: "Nouveau message depuis le site Roma Informatique",
      html: `
        <div style="font-family: Arial, sans-serif; background:#f5f5f5; padding:20px;">
          <div style="max-width:600px; margin:auto; background:white; border-radius:10px; overflow:hidden; border:1px solid #e5e5e5;">
            
            <div style="background:#0057b8; padding:20px; color:white; text-align:center;">
              <h2 style="margin:0; font-size:24px;">Nouveau message reçu</h2>
            </div>

            <div style="padding:20px; color:#333;">
              <p style="font-size:16px; margin-bottom:10px;">
                Vous avez reçu un nouveau message depuis le site <strong>Roma Informatique</strong>.
              </p>

              <div style="margin-top:20px;">
                <p style="margin:0; font-size:15px;"><strong>Nom :</strong> ${name}</p>
                <p style="margin:0; font-size:15px;"><strong>Email :</strong> ${email}</p>
              </div>

              <div style="margin-top:20px;">
                <p style="font-size:15px; margin-bottom:5px;"><strong>Message :</strong></p>
                <div style="background:#f0f0f0; padding:15px; border-radius:8px; font-size:15px; white-space:pre-line;">
                  ${message}
                </div>
              </div>
            </div>

            <div style="background:#f0f0f0; padding:15px; text-align:center; font-size:13px; color:#555;">
              Roma Informatique – Châtelet, Belgique
            </div>

          </div>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}




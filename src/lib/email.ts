import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(to: string, subject: string, html: string) {
  try {
    await resend.emails.send({
      from: "Roma Informatique <noreply@romainformatique.be>",
      to,
      subject,
      html,
    });
  } catch (error) {
    console.error("Erreur envoi email:", error);
  }
}

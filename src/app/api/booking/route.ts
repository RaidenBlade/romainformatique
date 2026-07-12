import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Vérifier si le créneau est déjà pris (pending ou confirmed)
    const existing = await prisma.booking.findFirst({
      where: {
        date: data.date,
        time: data.time,
        status: { in: ["pending", "confirmed"] },
      },
    });

    if (existing) {
      return NextResponse.json(
        { error: "Ce créneau est déjà réservé." },
        { status: 400 }
      );
    }

    // Création du rendez-vous
    const booking = await prisma.booking.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || "",
        date: data.date,
        time: data.time,
        description: data.description || "",
        status: "pending",
      },
    });

    // Email client
    await sendEmail(
      booking.email,
      "Votre demande de rendez-vous",
      `<p>Bonjour ${booking.name}, votre demande a bien été reçue. Nous vous contacterons rapidement.</p>`
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur API booking :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

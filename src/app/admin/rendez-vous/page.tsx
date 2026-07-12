import { prisma } from "@/lib/prisma";
import type { Booking } from "@prisma/client";
import { sendEmail } from "@/lib/email";
import { LogoutButton } from "@/components/LogoutButton";

export default async function AdminRendezVousPage() {
  const bookings: Booking[] = await prisma.booking.findMany({
    orderBy: { createdAt: "desc" },
  });

  async function updateStatus(id: string, formData: FormData) {
    "use server";

    const status = formData.get("status") as string;

    const booking = await prisma.booking.update({
      where: { id },
      data: { status },
    });

    if (status === "confirmed") {
      await sendEmail(
        booking.email,
        "Votre rendez-vous est confirmé",
        `<p>Bonjour ${booking.name}, votre rendez-vous du ${booking.date} à ${booking.time} est confirmé.</p>`
      );
    }

    if (status === "cancelled") {
      await sendEmail(
        booking.email,
        "Votre rendez-vous est annulé",
        `<p>Bonjour ${booking.name}, votre rendez-vous a été annulé.</p>`
      );
    }
  }

  return (
    <main className="pt-24 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto py-10 px-6">

        {/* BOUTON DECONNEXION */}
        <div className="flex justify-end mb-6">
          <LogoutButton />
        </div>

        <h1 className="text-3xl font-bold mb-6">Rendez-vous</h1>

        {bookings.length === 0 ? (
          <p className="text-slate-600">Aucun rendez-vous pour le moment.</p>
        ) : (
          <div className="space-y-4">
            {bookings.map((b: Booking) => (
              <div
                key={b.id}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
              >
                <div>
                  <p className="font-semibold text-slate-900">
                    {b.name} — {b.date} à {b.time}
                  </p>
                  <p className="text-sm text-slate-600">
                    {b.email}
                    {b.description ? ` — ${b.description}` : ""}
                  </p>
                </div>

                <form action={updateStatus.bind(null, b.id)} className="flex gap-2">
                  <select
                    name="status"
                    defaultValue={b.status}
                    className="border border-slate-300 rounded-lg px-2 py-1 text-sm"
                  >
                    <option value="pending">En attente</option>
                    <option value="confirmed">Confirmé</option>
                    <option value="done">Terminé</option>
                    <option value="cancelled">Annulé</option>
                  </select>

                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700 transition"
                  >
                    Mettre à jour
                  </button>
                </form>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

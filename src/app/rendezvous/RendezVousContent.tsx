"use client";

import { useEffect, useState } from "react";

const HOURS = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

export default function RendezVousContent() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [takenSlots, setTakenSlots] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedDate) return;

    fetch(`/api/bookings?date=${selectedDate}`)
      .then((res) => res.json())
      .then((data) => setTakenSlots(data.slots));
  }, [selectedDate]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!selectedDate || !selectedTime) {
      setError("Merci de choisir une date et un créneau horaire.");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const description = formData.get("description") as string;

    if (!name || !email) {
      setError("Nom et email sont obligatoires.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: selectedDate,
          time: selectedTime,
          name,
          email,
          description,
        }),
      });

      if (!res.ok) throw new Error();

      setDone(true);
    } catch {
      setError("Une erreur est survenue. Merci de réessayer.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
          Prendre rendez-vous
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Choisissez une date, un créneau horaire et décrivez votre problème.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* CALENDRIER */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-xl font-semibold mb-4">1. Choisissez une date</h2>

          <input
            type="date"
            className="w-full border border-slate-300 rounded-lg px-3 py-2 mb-6"
            value={selectedDate ?? ""}
            onChange={(e) => setSelectedDate(e.target.value)}
          />

          <h2 className="text-xl font-semibold mb-3">2. Choisissez un créneau</h2>

          <div className="grid grid-cols-2 gap-3">
            {HOURS.map((hour) => {
              const isTaken = takenSlots.includes(hour);

              return (
                <button
                  key={hour}
                  type="button"
                  disabled={isTaken}
                  onClick={() => setSelectedTime(hour)}
                  className={`px-3 py-2 rounded-lg border text-sm font-medium transition ${
                    isTaken
                      ? "bg-red-100 text-red-400 border-red-200 cursor-not-allowed"
                      : selectedTime === hour
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-slate-50 text-slate-800 border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  {hour}
                </button>
              );
            })}
          </div>
        </div>

        {/* FORMULAIRE */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          {done ? (
            <div className="text-center py-10">
              <p className="text-lg font-semibold text-green-600 mb-2">
                Votre demande a bien été envoyée !
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              <div>
                <label className="block text-sm font-medium mb-1">
                  Nom complet *
                </label>
                <input
                  name="name"
                  type="text"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email *
                </label>
                <input
                  name="email"
                  type="email"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 min-h-[100px]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition disabled:opacity-60"
              >
                {loading ? "Envoi..." : "Envoyer la demande"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

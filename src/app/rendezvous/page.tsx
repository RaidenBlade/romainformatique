"use client";

import { useState, useEffect } from "react";

function generateTimeSlots() {
  const slots = [];
  for (let hour = 9; hour <= 18; hour++) {
    const h = hour.toString().padStart(2, "0");
    slots.push(`${h}:00`);
    if (hour !== 18) slots.push(`${h}:30`);
  }
  return slots;
}

export default function RendezVousPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [takenSlots, setTakenSlots] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState("");

  async function loadTakenSlots(date: string) {
    const res = await fetch(`/api/booking/slots?date=${date}`);
    const data = await res.json();
    setTakenSlots(data.taken || []);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const res = await fetch("/api/booking", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    setLoading(false);

    if (!res.ok) {
      const error = await res.json();
      alert(error.error || "Erreur lors de la réservation.");
      return;
    }

    setSuccess(true);
    form.reset();
    setTakenSlots([]); // reset visuel
  }

  return (
    <div className="max-w-lg mx-auto p-6 pt-28">
      <h1 className="text-3xl font-bold mb-6">Prendre rendez-vous</h1>

      {success && (
        <p className="p-3 bg-green-100 text-green-700 rounded mb-4">
          Votre demande a bien été envoyée. Nous vous contacterons rapidement.
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="name"
          placeholder="Votre nom"
          required
          className="w-full p-2 border rounded"
        />

        <input
          name="email"
          type="email"
          placeholder="Votre email"
          required
          className="w-full p-2 border rounded"
        />

        <input
          name="phone"
          placeholder="Téléphone (optionnel)"
          className="w-full p-2 border rounded"
        />

        {/* DATE */}
        <input
          type="date"
          name="date"
          required
          className="w-full p-2 border rounded"
          min={new Date().toISOString().split("T")[0]}
          onChange={(e) => {
            const date = e.target.value;
            setSelectedDate(date);

            const day = new Date(date).getDay();
            if (day === 0 || day === 6) {
              alert("Les rendez-vous sont disponibles du lundi au vendredi.");
              e.target.value = "";
              return;
            }

            loadTakenSlots(date);
          }}
        />

        {/* HEURES */}
        <select
          name="time"
          required
          className="w-full p-2 border rounded"
          disabled={!selectedDate}
        >
          <option value="">Choisissez une heure</option>

          {generateTimeSlots().map((t) => (
            <option key={t} value={t} disabled={takenSlots.includes(t)}>
              {t.replace(":", "h")} {takenSlots.includes(t) ? "— Indisponible" : ""}
            </option>
          ))}
        </select>

        <textarea
          name="description"
          placeholder="Décrivez votre problème (optionnel)"
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Envoi..." : "Envoyer la demande"}
        </button>
      </form>
    </div>
  );
}

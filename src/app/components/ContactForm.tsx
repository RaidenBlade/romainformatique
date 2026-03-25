"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    if (!formRef.current) return;

    try {
      const result = await emailjs.sendForm(
        "service_cheu7lr",      // 👉 Ton Service ID
        "template_282pbyc",     // 👉 Ton Template ID
        formRef.current,
        "IKx65K85h2RMwgkY1"     // 👉 Ta Public Key
      );

      console.log("EmailJS result:", result.text);

      setSuccess("Votre message a bien été envoyé !");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Une erreur est survenue. Réessayez plus tard.");
    }

    setLoading(false);
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

      {error && <p className="bg-red-100 text-red-700 p-3 rounded">{error}</p>}
      {success && <p className="bg-green-100 text-green-700 p-3 rounded">{success}</p>}

      <div>
        <label className="block font-medium mb-1">Nom</label>
        <input
          type="text"
          name="user_name"
          className="w-full border p-3 rounded focus:ring focus:ring-blue-300"
          placeholder="Votre nom"
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Email</label>
        <input
          type="email"
          name="user_email"
          className="w-full border p-3 rounded focus:ring focus:ring-blue-300"
          placeholder="Votre email"
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Message</label>
        <textarea
          name="message"
          className="w-full border p-3 rounded h-32 resize-none focus:ring focus:ring-blue-300"
          placeholder="Votre message"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
      >
        {loading ? "Envoi en cours..." : "Envoyer"}
      </button>
    </form>
  );
}

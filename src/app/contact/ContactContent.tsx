"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function ContactContent() {
  const block = useScrollAnimation();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    emailjs
      .sendForm(
        "service_cheu7lr",   // ← à remplacer
        "template_282pbyc",  // ← à remplacer
        form,
        "IKx65K85h2RMwgkY1"     // ← à remplacer
      )
      .then(
        () => {
          setStatus("success");
          form.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <div
      ref={block.ref}
      className={`slide-in-up ${block.visible ? "show" : ""} max-w-3xl mx-auto py-16 px-6`}
    >
      <h1 className="text-4xl font-bold text-blue-600 mb-10 text-center">
        Contactez-moi
      </h1>

      <form onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="from_name"
          placeholder="Votre nom"
          required
          className="w-full border rounded-lg px-4 py-2"
        />

        <input
          type="email"
          name="from_email"
          placeholder="Votre email"
          required
          className="w-full border rounded-lg px-4 py-2"
        />

        <textarea
          name="message"
          placeholder="Votre message"
          rows={5}
          required
          className="w-full border rounded-lg px-4 py-2"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 hover:scale-105 transition"
        >
          Envoyer
        </button>
      </form>

      {status === "success" && (
        <p className="text-green-600 mt-4">Message envoyé avec succès.</p>
      )}
      {status === "error" && (
        <p className="text-red-600 mt-4">Une erreur est survenue.</p>
      )}
    </div>
  );
}

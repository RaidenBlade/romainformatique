"use client";

import { useEffect, useState } from "react";

type LocalReview = {
  author: string;
  rating: number;
  text: string;
};

const localReviews: LocalReview[] = [
  {
    author: "Tara Meyer",
    rating: 5,
    text: "Très professionnel et à l’écoute. Services impeccables! Je recommande vivement!",
  },
  {
    author: "greeg45",
    rating: 5,
    text: "Au top du top ! Rapide et efficace ! Un vrai travail de pro ! Je recommande !",
  },
  {
    author: "François Gerard",
    rating: 5,
    text: "Je tiens à exprimer mon entière satisfaction concernant cette prestation en informatique. Le service a été rapide, professionnel et très efficace. Le problème a été identifié et résolu avec précision, et les explications fournies étaient claires et accessibles. Je recommande vivement pour son sérieux, sa compétence et la qualité du suivi. Une expérience irréprochable, 5/5 sans hésitation !",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-slide toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % localReviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-slate-100">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-slate-900 mb-12">
          Avis clients
        </h2>

        {/* --- CARROUSEL --- */}
        <div className="relative h-72 flex items-center justify-center">
          {localReviews.map((review, i) => (
            <div
              key={i}
              className={`absolute transition-opacity duration-700 ease-in-out w-full ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-white p-8 rounded-xl shadow border border-slate-200 mx-auto max-w-xl">
                <p className="text-yellow-500 text-2xl mb-3">
                  {"★".repeat(review.rating)}
                </p>

                <p className="text-slate-700 italic whitespace-pre-line">
                  {review.text}
                </p>

                <p className="mt-4 font-semibold text-slate-900">
                  — {review.author}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- BOUTON GOOGLE AVIS --- */}
        <a
          href="https://g.page/r/CQ7zwz2MlpOLEAE/review"
          target="_blank"
          className="px-8 py-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition block text-center mt-16 text-lg font-semibold"
        >
          Laisser un avis Google ⭐
        </a>

      </div>
    </section>
  );
}

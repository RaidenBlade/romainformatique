"use client";

import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function ServicesContent() {
  const block = useScrollAnimation();

  return (
    <div
      ref={block.ref}
      className={`slide-in-up ${block.visible ? "show" : ""} max-w-5xl mx-auto py-16 px-6`}
    >
      <h1 className="text-4xl font-bold text-blue-600 mb-10 text-center">
        Nos services
      </h1>

      <p className="text-gray-800 text-lg text-center mb-12">
        Roma Informatique vous propose un ensemble de services professionnels,
        adaptés aux particuliers, indépendants et petites entreprises.
      </p>

      {/* GRID SERVICES */}
      <section className="grid md:grid-cols-2 gap-10 text-gray-800">

        {/* Dépannage */}
        <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            Dépannage informatique
          </h2>
          <p>
            Diagnostic complet, suppression de virus, optimisation, résolution
            d’erreurs, problèmes de démarrage, lenteurs, plantages, etc.
          </p>
        </div>

        {/* Réparation */}
        <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            Réparation PC
          </h2>
          <p>
            Remplacement de disque dur, SSD, RAM, alimentation, nettoyage
            interne, réinstallation Windows, récupération de données selon les cas.
          </p>
        </div>

        {/* Création web */}
        <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            Création de sites web
          </h2>
          <p>
            Sites modernes, rapides, sécurisés, adaptés au mobile et optimisés
            pour le référencement. Idéal pour indépendants et petites entreprises.
          </p>
        </div>

        {/* PC sur mesure */}
        <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            Conception de PC gamer & professionnels
          </h2>
          <p>
            Assemblage sur mesure selon vos besoins : PC gamer haute performance,
            stations de travail professionnelles, configurations silencieuses,
            optimisation du refroidissement, choix des composants, montage propre
            et câblage impeccable.
          </p>
        </div>

      </section>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="/contact"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition"
        >
          Demander un devis
        </a>
      </div>
    </div>
  );
}

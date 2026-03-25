"use client";

import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function AboutContent() {
  const block = useScrollAnimation();

  return (
    <div
      ref={block.ref}
      className={`slide-in-up ${block.visible ? "show" : ""} max-w-5xl mx-auto py-16 px-6`}
    >
      <h1 className="text-4xl font-bold text-blue-600 mb-10 text-center">
        À propos de Roma Informatique
      </h1>

      <section className="space-y-8 text-gray-800 leading-relaxed">
        <p>
          Roma Informatique est une entreprise indépendante spécialisée dans le
          dépannage informatique, la réparation PC, la création de sites web
          modernes et l’assistance personnalisée.
        </p>

        <p>
          Fondée par moi-même, Benjamin, passionné d’informatique depuis
          toujours, Roma Informatique s’est construite autour d’une idée simple :
          offrir un service professionnel, humain et accessible à tous.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-10">
          Ma mission
        </h2>
        <p>
          Vous accompagner dans tous vos besoins informatiques, que vous soyez
          un particulier, un indépendant ou une petite entreprise. Je mets un
          point d’honneur à fournir un service rapide, clair et transparent.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-10">
          Pourquoi choisir Roma Informatique ?
        </h2>

        <ul className="space-y-3 list-disc pl-6">
          <li>Intervention rapide</li>
          <li>Tarifs clairs et transparents</li>
          <li>Explications simples, sans jargon technique</li>
          <li>Réparations fiables et durables</li>
          <li>Création de sites web modernes et optimisés SEO</li>
          <li>Accompagnement personnalisé pour chaque client</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600 mt-10">
          Une approche humaine et professionnelle
        </h2>
        <p>
          Chaque client est unique. Je prends le temps de comprendre votre
          situation, de diagnostiquer précisément le problème et de vous proposer
          la meilleure solution, toujours au prix le plus juste.
        </p>

        <div className="text-center mt-12">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition"
          >
            Me contacter
          </a>
        </div>
      </section>
    </div>
  );
}

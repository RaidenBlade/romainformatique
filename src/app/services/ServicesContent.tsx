"use client";

import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function ServicesContent() {
  const block = useScrollAnimation();

  return (
    <div
      ref={block.ref}
      className={`slide-in-up ${block.visible ? "show" : ""} max-w-6xl mx-auto py-20 px-6`}
    >
      {/* HERO */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
          Nos services informatiques
        </h1>
        <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
          Dépannage, réparation, installation, création web et assistance personnalisée.
          Un service professionnel, rapide et local à Châtelet.
        </p>
      </div>

      {/* GRID SERVICES PREMIUM */}
      <section className="grid md:grid-cols-2 gap-12">

        {/* Dépannage */}
        <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm hover:shadow-xl transition hover:-translate-y-1">
          <div className="text-5xl mb-4">🛠️</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Dépannage informatique
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Diagnostic complet, suppression de virus, optimisation, résolution d’erreurs,
            problèmes de démarrage, lenteurs, plantages, écran noir, etc.
          </p>
          <a href="/contact" className="text-blue-600 font-semibold hover:underline">
            Demander un dépannage →
          </a>
        </div>

        {/* Réparation */}
        <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm hover:shadow-xl transition hover:-translate-y-1">
          <div className="text-5xl mb-4">🔧</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Réparation PC
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Remplacement de disque dur, SSD, RAM, alimentation, nettoyage interne,
            réinstallation Windows, récupération de données selon les cas.
          </p>
          <a href="/contact" className="text-blue-600 font-semibold hover:underline">
            Réparer mon PC →
          </a>
        </div>

        {/* Création web */}
        <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm hover:shadow-xl transition hover:-translate-y-1">
          <div className="text-5xl mb-4">🌐</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Création de sites web
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Sites modernes, rapides, sécurisés, adaptés au mobile et optimisés SEO.
            Idéal pour indépendants, commerces et petites entreprises.
          </p>
          <a href="/contact" className="text-blue-600 font-semibold hover:underline">
            Créer mon site →
          </a>
        </div>

        {/* PC sur mesure */}
        <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm hover:shadow-xl transition hover:-translate-y-1">
          <div className="text-5xl mb-4">🖥️</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            PC gamer & professionnels sur mesure
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Assemblage sur mesure : PC gamer haute performance, stations de travail,
            configurations silencieuses, optimisation du refroidissement, montage propre
            et câblage impeccable.
          </p>
          <a href="/contact" className="text-blue-600 font-semibold hover:underline">
            Concevoir mon PC →
          </a>
        </div>

      </section>

      {/* AVANTAGES PREMIUM */}
      <div className="mt-28 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-12">
          Pourquoi choisir Roma Informatique ?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-3">⚡</div>
            <p className="font-semibold text-slate-800">Intervention rapide</p>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-3">🏠</div>
            <p className="font-semibold text-slate-800">Déplacement à domicile</p>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-3">💬</div>
            <p className="font-semibold text-slate-800">Explications claires</p>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-3">📍</div>
            <p className="font-semibold text-slate-800">Service local à Châtelet</p>
          </div>
        </div>
      </div>

      {/* CTA FINAL PREMIUM */}
      <div className="text-center mt-24">
        <a
          href="/contact"
          className="px-12 py-4 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition text-xl font-semibold"
        >
          Demander un devis ou une intervention
        </a>
      </div>
    </div>
  );
}

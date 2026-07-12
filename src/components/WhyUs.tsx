export default function WhyUs() {
  const items = [
    {
      icon: "⚡",
      title: "Intervention rapide",
      desc: "Dépannage efficace à domicile ou en atelier.",
    },
    {
      icon: "🧰",
      title: "Expertise polyvalente",
      desc: "PC, Mac, smartphones, réseaux, imprimantes, Wi‑Fi…",
    },
    {
      icon: "🤝",
      title: "Service local et humain",
      desc: "Basé à Châtelet, disponible et à l’écoute.",
    },
    {
      icon: "💸",
      title: "Prix transparents",
      desc: "Pas de surprise, devis clair avant intervention.",
    },
    {
      icon: "🔒",
      title: "Travail soigné et sécurisé",
      desc: "Respect de vos données et confidentialité garantie.",
    },
    {
      icon: "⭐",
      title: "Clients satisfaits",
      desc: "Un service apprécié pour sa qualité et sa fiabilité.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          Pourquoi choisir Roma Informatique ?
        </h2>

        <p className="text-slate-600 text-center mb-12 text-lg">
          Un service professionnel, local et orienté satisfaction client.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

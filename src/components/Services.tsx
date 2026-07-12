export default function Services() {
  const services = [
    {
      title: "Réparation PC & Mac",
      desc: "Diagnostic, remplacement de pièces, optimisation.",
      icon: "🛠️",
    },
    {
      title: "Nettoyage & suppression virus",
      desc: "Récupération de performances, sécurité renforcée.",
      icon: "🧹",
    },
    {
      title: "Installation à domicile",
      desc: "Wi‑Fi, imprimantes, box, TV, NAS.",
      icon: "🏠",
    },
    {
      title: "Formations personnalisées",
      desc: "Windows, iPhone, iPad, bureautique.",
      icon: "🧑‍🏫",
    },
    {
      title: "Vente & conseils matériel",
      desc: "PC, laptops, accessoires, configuration sur mesure.",
      icon: "🛒",
    },
    {
      title: "Sauvegarde & récupération de données",
      desc: "Solutions cloud, disques externes, récupération fichiers.",
      icon: "☁️",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-100">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          Services informatiques pour particuliers et indépendants
        </h2>

        <p className="text-slate-600 text-center mb-12 text-lg">
          Interventions rapides, solutions fiables et accompagnement personnalisé.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

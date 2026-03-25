export const metadata = {
  title: "Roma Informatique – Dépannage informatique & création web",
  description:
    "Dépannage informatique, réparation PC, assistance et création de sites web modernes. Service rapide et professionnel à Châtelet et environs.",
};

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
        Roma Informatique
      </h1>

      <p className="text-lg text-gray-800 text-center mb-10">
        Dépannage informatique, réparation PC et création de sites web modernes,
        avec un accompagnement clair, humain et professionnel.
      </p>

      <section className="grid md:grid-cols-3 gap-8 text-gray-800">

        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Dépannage informatique
          </h2>
          <p>
            Diagnostic, nettoyage, optimisation, suppression de virus, problèmes
            de démarrage, lenteurs, erreurs système, etc.
          </p>
        </div>

        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Réparation PC
          </h2>
          <p>
            Remplacement de disque, SSD, RAM, alimentation, réinstallation
            Windows, récupération de données selon les cas.
          </p>
        </div>

        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Création de sites web
          </h2>
          <p>
            Sites modernes, rapides, adaptés au mobile, optimisés pour le
            référencement et pensés pour vos clients.
          </p>
        </div>

        <div className="border rounded-lg p-6 shadow-sm md:col-span-3">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
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

      <div className="text-center mt-12">
        <a
          href="/contact"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition"
        >
          Me contacter
        </a>
      </div>
    </main>
  );
}

import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-slate-900 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Texte */}
        <div>
          <h1 className="text-4xl font-bold mb-6">
            Votre expert informatique à Châtelet — rapide, fiable et local
          </h1>

          <p className="text-slate-300 mb-8">
            Dépannage, réparation, installation, formation et conseils personnalisés
            pour particuliers et indépendants.
          </p>

          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Demander un dépannage
            </a>

            <a
              href="#services"
              className="px-6 py-3 bg-slate-700 rounded-lg font-semibold hover:bg-slate-600 transition"
            >
              Voir les services
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/Romaprofile.png"   // ← ton image ici
            alt="Illustration informatique"
            width={500}
            height={500}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
}

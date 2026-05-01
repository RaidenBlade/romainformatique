import { FaHome, FaTools, FaEnvelope, FaStar } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* Colonne 1 : Présentation */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Roma Informatique</h3>
          <p className="text-slate-400 leading-relaxed">
            Dépannage, réparation, installation et conseils informatiques à Châtelet.
            Service rapide, fiable et professionnel pour particuliers et indépendants.
          </p>
        </div>

        {/* Colonne 2 : Navigation */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Navigation</h3>
          <ul className="space-y-3 text-slate-400">
            <li className="flex items-center gap-2">
              <FaHome className="text-blue-400" />
              <a href="/" className="hover:text-blue-400 transition">Accueil</a>
            </li>

            <li className="flex items-center gap-2">
              <FaTools className="text-blue-400" />
              <a href="/services" className="hover:text-blue-400 transition">Services</a>
            </li>

            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" />
              <a href="/contact" className="hover:text-blue-400 transition">Contact</a>
            </li>

            <li className="flex items-center gap-2">
              <span className="text-blue-400">ℹ️</span>
              <a href="/mentions-legales" className="hover:text-blue-400 transition">
                Mentions légales
              </a>
            </li>
          </ul>
        </div>

        {/* Colonne 3 : Avis */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Avis</h3>
          <a
            href="https://g.page/r/CQ7zwz2MlpOLEAE/review"
            target="_blank"
            className="flex items-center gap-2 hover:text-blue-400 transition text-slate-400"
          >
            <FaStar className="text-yellow-400" />
            Laisser un avis Google
          </a>
        </div>

      </div>

      {/* Ligne de séparation */}
      <div className="border-t border-slate-800 mt-12 pt-6">
        <p className="text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Roma Informatique — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}

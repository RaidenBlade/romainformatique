import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.22),transparent_34%),radial-gradient(circle_at_85%_30%,rgba(14,165,233,0.14),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:grid-cols-[1.1fr_.9fr] md:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Service informatique local à Châtelet
          </div>
          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            L’informatique, <span className="text-blue-400">simplement résolue.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Dépannage, réparation, nettoyage, installation et création de sites web pour particuliers et indépendants. Un service clair, rapide et humain.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="rounded-xl bg-blue-600 px-6 py-3.5 text-center font-bold shadow-xl shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500">Obtenir un devis gratuit</a>
            <a href="#services" className="rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-center font-bold transition hover:bg-white/10">Découvrir les services</a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-7 text-sm text-slate-400">
            <div><strong className="block text-xl text-white">Local</strong>Châtelet & environs</div>
            <div><strong className="block text-xl text-white">Rapide</strong>Réponse personnalisée</div>
            <div><strong className="block text-xl text-white">Transparent</strong>Devis avant travaux</div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-5 rounded-[2rem] bg-blue-600/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">
            <Image src="/Romaprofile.png" alt="Roma Informatique" width={600} height={600} priority className="aspect-square w-full rounded-[1.4rem] object-cover" />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-xl backdrop-blur">
            <p className="text-xs uppercase tracking-widest text-slate-400">Besoin d’aide ?</p>
            <p className="mt-1 font-bold text-white">0491 48 03 52</p>
          </div>
        </div>
      </div>
    </section>
  );
}

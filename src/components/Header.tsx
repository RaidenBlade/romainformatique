"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  ["Accueil", "/"],
  ["Services", "/services"],
  ["À propos", "/a-propos"],
  ["Contact", "/contact"],
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 py-3 shadow-lg shadow-slate-900/5 backdrop-blur" : "bg-slate-950/90 py-4 backdrop-blur"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Roma Informatique - Accueil">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-600 text-lg font-black text-white shadow-lg shadow-blue-600/25">RI</span>
          <span className={`text-lg font-extrabold tracking-tight transition ${scrolled ? "text-slate-950" : "text-white"}`}>
            Roma <span className="text-blue-500">Informatique</span>
          </span>
        </Link>

        <nav className={`hidden items-center gap-7 text-sm font-semibold md:flex ${scrolled ? "text-slate-700" : "text-slate-200"}`}>
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-blue-500">{label}</Link>
          ))}
          <a href="mailto:informatiqueroma@gmail.com" className="rounded-xl bg-blue-600 px-5 py-2.5 text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500">
            Demander un devis
          </a>
        </nav>

        <button className={`grid h-11 w-11 place-items-center rounded-xl border text-2xl md:hidden ${scrolled ? "border-slate-200 text-slate-800" : "border-white/20 text-white"}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le menu" aria-expanded={menuOpen}>☰</button>
      </div>

      <div className={`fixed inset-0 z-40 bg-slate-950/45 transition md:hidden ${menuOpen ? "visible opacity-100" : "invisible opacity-0"}`} onClick={() => setMenuOpen(false)} />
      <div className={`fixed right-0 top-0 z-50 h-screen w-72 bg-white p-7 shadow-2xl transition-transform duration-300 md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button className="absolute right-5 top-5 text-3xl text-slate-700" onClick={() => setMenuOpen(false)} aria-label="Fermer le menu">×</button>
        <div className="mt-16 flex flex-col gap-2">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-lg font-semibold text-slate-800 transition hover:bg-blue-50 hover:text-blue-600">{label}</Link>
          ))}
          <a href="mailto:informatiqueroma@gmail.com" className="mt-4 rounded-xl bg-blue-600 px-4 py-3 text-center font-bold text-white">Demander un devis</a>
        </div>
      </div>
    </header>
  );
}

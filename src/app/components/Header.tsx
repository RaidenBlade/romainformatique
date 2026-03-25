"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"}
      `}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Roma Informatique
        </Link>

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          {[
            ["Accueil", "/"],
            ["Services", "/services"],
            ["À propos", "/a-propos"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="group relative">
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      <div
        className={`
          md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40
          transform transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <button
          className="text-3xl absolute top-4 right-4 text-gray-700"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <nav className="mt-20 flex flex-col gap-6 text-lg px-6 text-gray-700">
          {[
            ["Accueil", "/"],
            ["Services", "/services"],
            ["À propos", "/a-propos"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="group relative"
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

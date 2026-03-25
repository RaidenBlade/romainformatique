"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer
      className={`
        bg-gray-900 text-gray-300 py-6 mt-10 transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Roma Informatique — Tous droits réservés
        </p>

        <div className="mt-3 flex justify-center gap-6 text-sm">
          <a href="/mentions-legales" className="hover:text-white transition">
            Mentions légales
          </a>
          <a href="/contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

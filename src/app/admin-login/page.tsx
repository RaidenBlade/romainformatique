"use client";

import { useState } from "react";

export default function AdminLoginPage() {
  const [error, setError] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    const password = e.target.password.value;

    const res = await fetch("/api/admin-login", {
      method: "POST",
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      window.location.href = "/admin/rendez-vous";
    } else {
      setError("Mot de passe incorrect");
    }
  }

  return (
    <div className="max-w-sm mx-auto mt-32 p-6 border rounded shadow">
      <h1 className="text-xl font-bold mb-4">Connexion Admin</h1>

      {error && <p className="text-red-600 mb-3">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          className="w-full p-2 border rounded"
        />

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Se connecter
        </button>
      </form>
    </div>
  );
}

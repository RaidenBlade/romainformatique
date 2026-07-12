"use client";

export function LogoutButton() {
  async function logout() {
    await fetch("/api/admin-logout", { method: "POST" });
    window.location.href = "/admin-login";
  }

  return (
    <button
      onClick={logout}
      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
    >
      Déconnexion
    </button>
  );
}

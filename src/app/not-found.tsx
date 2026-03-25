export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 fade-in">

      <h1 className="text-6xl font-extrabold text-blue-600 mb-4">
        404
      </h1>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Oups… Cette page n’existe pas
      </h2>

      <p className="text-gray-600 max-w-md mb-8">
        Il semble que vous ayez suivi un lien qui n’existe plus ou qui a été déplacé.
      </p>

      <a
        href="/"
        className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition"
      >
        Retour à l’accueil
      </a>

    </div>
  );
}

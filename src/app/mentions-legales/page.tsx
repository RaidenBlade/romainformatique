export const metadata = {
  title: "Mentions légales – Roma Informatique",
  description:
    "Mentions légales et informations obligatoires concernant Roma Informatique.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-10 text-center">
        Mentions légales
      </h1>

      <section className="space-y-8 text-gray-800 leading-relaxed">
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Informations générales
          </h2>
          <p>
            Le présent site est édité par <strong>Roma Informatique</strong>,
            entreprise indépendante spécialisée dans le dépannage informatique,
            la réparation PC et la création de sites web.
          </p>
          <p>
            Propriétaire : <strong>Benjamin</strong>
          </p>
          <p>
            Numéro d’entreprise (BCE) : <strong>1034.486.885</strong>
          </p>
          <p>
            Email de contact : <strong>informatiqueroma@gmail.com</strong>
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Hébergement du site
          </h2>
          <p>
            Le site est hébergé par : <br />
            <strong>Vercel Inc.</strong>
            <br />
            440 N Barranca Ave #4133
            <br />
            Covina, CA 91723
            <br />
            États-Unis
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Propriété intellectuelle
          </h2>
          <p>
            L’ensemble du contenu du site (textes, images, logos, design,
            structure) est la propriété exclusive de Roma Informatique, sauf
            mention contraire. Toute reproduction, distribution ou modification
            sans autorisation préalable est interdite.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Protection des données (RGPD)
          </h2>
          <p>
            Les données envoyées via le formulaire de contact sont utilisées
            uniquement pour répondre aux demandes. Aucune donnée n’est vendue,
            partagée ou utilisée à des fins commerciales.
          </p>
          <p>
            Vous pouvez demander l’accès, la modification ou la suppression de
            vos données en envoyant un email à :
            <strong> informatiqueroma@gmail.com</strong>.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Responsabilité
          </h2>
          <p>
            Roma Informatique s’efforce de fournir des informations exactes et à
            jour, mais ne peut garantir l’absence totale d’erreurs. Le
            propriétaire du site ne pourra être tenu responsable d’un mauvais
            usage des informations fournies.
          </p>
        </div>
      </section>
    </div>
  );
}

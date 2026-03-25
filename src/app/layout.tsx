import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Roma Informatique – Dépannage informatique & création web",
  description:
    "Dépannage informatique, réparation PC, assistance et création de sites web modernes. Service rapide et professionnel à Châtelet et environs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Roma Informatique",
              description:
                "Dépannage informatique, réparation PC et création de sites web.",
              provider: { "@type": "Person", name: "Benjamin" },
              areaServed: [
                "Châtelet",
                "Charleroi",
                "Couillet",
                "Châtelineau",
                "Montignies-sur-Sambre",
                "Gilly",
                "Fleurus",
              ],
              serviceType: [
                "Dépannage informatique",
                "Réparation PC",
                "Création de sites web",
                "Assistance informatique",
              ],
              url: "https://romainformatique.be",
            }),
          }}
        />
      </head>

      <body className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow pt-24">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          Contactez-moi
        </h2>

        <p className="text-slate-600 text-center mb-12 text-lg">
          Besoin d’un dépannage ou d’un conseil ? Je suis disponible rapidement.
        </p>

        <div className="bg-slate-100 p-8 rounded-2xl shadow-sm border border-slate-200">
          <ul className="space-y-4 text-lg text-slate-700">
            <li>📞 <strong>0491 48 03 52</strong></li>
            <li>✉️ romainformatique@gmail.com</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

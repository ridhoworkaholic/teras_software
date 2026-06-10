import { CONTACT } from '../../lib/content';

export function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container-max section-padding">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text leading-tight mb-4">
            Saya bangun website, aplikasi, dan desain UI.
          </h1>
          <p className="text-base md:text-lg text-text-secondary mb-6">
            Keahlian di Figma, Flutter, dan React. Fokus pada hasil yang fungsional dan desain yang bersih.
          </p>
          <p className="text-sm text-text-secondary mb-8">
            Tersedia untuk project freelance
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#portfolio"
              className="px-6 py-3 border border-border text-text text-sm font-medium rounded hover:bg-surface transition-colors text-center"
            >
              Lihat Portofolio
            </a>
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-white text-sm font-medium rounded hover:bg-primary-dark transition-colors text-center"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

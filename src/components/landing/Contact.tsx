import { Mail, MessageCircle } from 'lucide-react';
import { CONTACT } from '../../lib/content';

export function Contact() {
  return (
    <section id="contact">
      <div className="container-max section-padding">
        <div className="bg-surface border border-border rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-text mb-3">
            Punya project?
          </h2>
          <p className="text-text-secondary mb-6">
            Kirim brief singkat atau langsung chat untuk diskusi.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white text-sm font-medium rounded hover:bg-primary-dark transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-text text-sm font-medium rounded hover:bg-background transition-colors"
            >
              <Mail size={18} />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

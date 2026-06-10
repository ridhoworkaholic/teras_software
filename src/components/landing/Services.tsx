import { Check } from 'lucide-react';
import { SERVICES } from '../../lib/content';

export function Services() {
  return (
    <section id="services" className="section-surface">
      <div className="container-max section-padding">
        <h2 className="text-2xl md:text-3xl font-semibold text-text mb-3">
          Layanan
        </h2>
        <p className="text-text-secondary mb-8">
          Solusi untuk kebutuhan digital bisnis Anda.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="bg-background border border-border rounded-lg p-6 flex flex-col"
            >
              <h3 className="text-lg font-medium text-text mb-1">
                {service.title}
              </h3>
              <p className="text-xl font-semibold text-primary mb-2">
                {service.price}
              </p>
              <p className="text-sm text-text-secondary mb-4">{service.description}</p>

              <ul className="space-y-2 mb-4 flex-grow">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check
                      size={16}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              {service.note && (
                <p className="text-xs text-text-secondary border-t border-border pt-3 mt-auto">
                  {service.note}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

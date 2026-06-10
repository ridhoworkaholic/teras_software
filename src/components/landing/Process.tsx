import { PROCESS_STEPS } from '../../lib/content';

export function Process() {
  return (
    <section className="section-surface">
      <div className="container-max section-padding">
        <h2 className="text-2xl md:text-3xl font-semibold text-text mb-8">
          Cara Kerja
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, index) => (
            <div key={step.id} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </div>
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block w-px h-full bg-border mt-2" />
                )}
              </div>
              <div className="pb-6 lg:pb-0">
                <h3 className="text-base font-medium text-text mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

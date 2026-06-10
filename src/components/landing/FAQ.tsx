import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../../lib/content';

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section-surface">
      <div className="container-max section-padding">
        <h2 className="text-2xl md:text-3xl font-semibold text-text mb-8">
          FAQ
        </h2>

        <div className="max-w-2xl space-y-3">
          {FAQ_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-background border border-border rounded overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-surface/50 transition-colors"
              >
                <span className="text-sm font-medium text-text pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-text-secondary shrink-0 transition-transform ${
                    openId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openId === item.id && (
                <div className="px-4 pb-4">
                  <p className="text-sm text-text-secondary">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

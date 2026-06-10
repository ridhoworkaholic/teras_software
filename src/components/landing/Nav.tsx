import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { CONTACT } from '../../lib/content';

const NAV_LINKS = [
  { label: 'Portofolio', href: '#portfolio' },
  { label: 'Harga', href: '#pricing' },
  { label: 'Kontak', href: '#contact' },
];

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-max section-padding py-4!">
        <div className="flex items-center justify-between">
          <a href="#" className="text-lg font-medium text-text">
            teras software
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-white text-sm font-medium rounded hover:bg-primary-dark transition-colors"
            >
              Hubungi
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-text"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm text-text-secondary hover:text-text transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary text-white text-sm font-medium rounded hover:bg-primary-dark transition-colors text-center"
              >
                Hubungi
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

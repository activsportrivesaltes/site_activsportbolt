import { useEffect, useState } from 'react';
import { Menu, X, Lock } from 'lucide-react';

type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
  { label: 'Accueil', href: '#/' },
  { label: 'Le club', href: '#/le-club' },
  { label: 'Nos activités', href: '#/activites' },
  { label: 'Planning', href: '#/planning' },
  { label: 'Tarifs', href: '#/tarifs' },
  { label: 'Équipe', href: '#/equipe' },
  { label: 'Actualités', href: '#/actualites' },
  { label: 'Galerie', href: '#/galerie' },
  { label: 'Contact', href: '#/contact' },
];

export default function Header({ currentPath }: { currentPath: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [currentPath]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-soft backdrop-blur' : 'bg-white/80 backdrop-blur'
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-4">
        {/* Logo */}
        <a href="#/" className="flex items-center gap-3" aria-label="Activ' Sport Rivesaltes — accueil">
          <img
            src="/images/Logo_ActivSportRiv.jpg"
            alt="Logo Activ' Sport Rivesaltes"
            className="h-12 w-12 rounded-xl object-cover shadow-soft"
          />
          <div className="leading-tight">
            <span className="block font-heading text-base font-bold text-brand-purple-900 sm:text-lg">
              Activ' Sport
            </span>
            <span className="block text-xs font-semibold uppercase tracking-wider text-brand-green-600">
              Rivesaltes
            </span>
          </div>
        </a>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {navItems.map((item) => {
            const isActive = currentPath === item.href.slice(1) || (item.href === '#/' && currentPath === '/');
            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-purple-100 text-brand-purple-800'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-brand-purple-700'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {/* Espace adhérent — désactivé, bientôt disponible */}
          <button
            type="button"
            disabled
            title="Bientôt disponible"
            className="hidden items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-400 sm:inline-flex"
          >
            <Lock className="h-4 w-4" />
            Espace adhérent
            <span className="ml-1 rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide">
              Bientôt
            </span>
          </button>

          {/* CTA Rejoindre */}
          <a href="#/inscription" className="btn btn-primary hidden sm:inline-flex">
            Rejoindre le club
          </a>

          {/* Burger */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-brand-purple-800 lg:hidden"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4" aria-label="Navigation mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-brand-purple-50 hover:text-brand-purple-700"
              >
                {item.label}
              </a>
            ))}
            <a href="#/inscription" className="btn btn-primary mt-2">
              Rejoindre le club
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

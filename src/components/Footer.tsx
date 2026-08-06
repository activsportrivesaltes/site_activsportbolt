import { Facebook, Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'Le club', href: '#/le-club' },
  { label: 'Nos activités', href: '#/activites' },
  { label: 'Planning', href: '#/planning' },
  { label: 'Tarifs', href: '#/tarifs' },
  { label: 'Équipe', href: '#/equipe' },
  { label: 'Actualités', href: '#/actualites' },
  { label: 'Galerie', href: '#/galerie' },
  { label: 'Inscription', href: '#/inscription' },
  { label: 'Contact', href: '#/contact' },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-brand-purple-900 text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-yellow-400 via-brand-green-500 to-brand-purple-400 text-white">
              <span className="font-heading text-lg font-bold">A</span>
            </div>
            <div className="leading-tight">
              <span className="block font-heading text-base font-bold">
                <span className="text-brand-green-300">Activ'</span>{' '}
                <span className="text-brand-yellow-300">Sport</span>{' '}
                <span className="text-brand-purple-200">Rivesaltes</span>
              </span>
              <span className="block text-xs uppercase tracking-wider text-brand-purple-200">
                Sport bien-être pour tous
              </span>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-brand-purple-100">
            Club associatif proposant des activités physiques accessibles à tous, adultes et seniors,
            dans une ambiance conviviale et sans esprit de compétition.
          </p>
        </div>

        {/* Liens rapides */}
        <nav aria-label="Liens rapides">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-brand-yellow-300">
            Navigation
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-brand-purple-100 transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-brand-yellow-300">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-purple-100">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-300" />
              <span>Rivesaltes (66600), France</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-300" />
              <span>
                Gisèle : 06 98 09 99 77
                <br />
                Marie-Thérèse : 06 01 98 63 88
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-300" />
              <a href="mailto:activsportrivesaltes@etik.com" className="hover:text-white">
                activsportrivesaltes@etik.com
              </a>
            </li>
          </ul>
        </div>

        {/* Réseaux */}
        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-brand-yellow-300">
            Suivez-nous
          </h3>
          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Page Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-yellow-400 hover:text-brand-purple-900"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://activsportrivesaltes.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-brand-purple-100 underline-offset-2 hover:text-white hover:underline"
            >
              activsportrivesaltes.fr
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-brand-purple-200 sm:flex-row">
          <p>
            © {new Date().getFullYear()}{' '}
            <span className="text-brand-green-300">Activ'</span>{' '}
            <span className="text-brand-yellow-300">Sport</span>{' '}
            <span className="text-brand-purple-100">Rivesaltes</span>. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <a href="#/mentions-legales" className="hover:text-white">
              Mentions légales
            </a>
            <a href="#/contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

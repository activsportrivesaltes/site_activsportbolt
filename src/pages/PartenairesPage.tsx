import { useState } from 'react';
import { ExternalLink, Handshake, Mail, Phone, MapPin } from 'lucide-react';

type PartnerCategory = 'Tous' | 'Institutionnel' | 'Sponsor' | 'Commerce local';

type Partner = {
  id: string;
  name: string;
  category: PartnerCategory;
  description: string;
  logo: string;
  website?: string;
  phone?: string;
  address?: string;
};

const partners: Partner[] = [
  {
    id: 'mairie-rivesaltes',
    name: 'Mairie de Rivesaltes',
    category: 'Institutionnel',
    description: 'Soutien institutionnel et mise à disposition des infrastructures sportives de la commune.',
    logo: '/images/LogoRivesaltes.jpg',
    website: 'https://www.rivesaltes.fr',
    address: 'Place de l\'Hôtel de Ville, 66600 Rivesaltes',
  },
  {
    id: 'Conseil-Départemental',
    name: 'Conseil Départemental des Pyrénées-Orientales',
    category: 'Institutionnel',
    description: 'Le Département a pour ambition de permettre l’accès à une pratique sportive pluridisciplinaire en direction de tous les publics..',
    logo: '/images/LogoConseilGeneral.jpg',
    website: 'https://www.ledepartement66.fr/',
    address: '66000 Perpignan',
  },
  {
    id: 'Agence-Nationale-du-Sport',
    name: 'Agence Nationale du Sport',
    category: 'Institutionnel',
    description: 'Son rôle est de développer la pratique du sport pour tous et d\'améliorer la haute performance des athlètes.',
    logo: '/images/LogoANS.jpg',
    address: '94200 Ivry-sur-Seine',
    website: 'https://www.agencedusport.fr/',
  },
  
];

const categories: PartnerCategory[] = ['Tous', 'Institutionnel', 'Sponsor', 'Commerce local'];

export default function PartenairesPage() {
  const [selectedCategory, setSelectedCategory] = useState<PartnerCategory>('Tous');

  const filteredPartners = selectedCategory === 'Tous'
    ? partners
    : partners.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50/50 py-12">
      <div className="container-page space-y-10">
        
        {/* En-tête de la page */}
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-purple-100 text-brand-purple-800 text-sm font-medium">
            <Handshake className="w-4 h-4" />
            <span>Réseau & Soutiens</span>
          </div>
          <h1 className="text-3xl font-heading font-bold text-gray-900 sm:text-4xl">
            <span className="text-brand-purple-700">Nos Partenaires</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Un grand merci aux institutions, entreprises et commerçants locaux qui soutiennent Activ' Sport Rivesaltes et participent au dynamisme de notre association.
          </p>
        </section>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-purple-700 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grille des partenaires */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg transition-shadow border border-gray-100 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Logo & Catégorie */}
                <div className="flex items-center justify-between gap-4">
                  <div className="h-16 w-32 flex items-center justify-center rounded-lg bg-gray-50 border border-gray-100 p-2">
                    <img
                      src={partner.logo}
                      alt={`Logo ${partner.name}`}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        // Fallback visuel si l'image n'existe pas encore
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150x80?text=Logo';
                      }}
                    />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-100 text-gray-700">
                    {partner.category}
                  </span>
                </div>

                {/* Infos */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{partner.name}</h2>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>

              {/* Coordonnées & Lien */}
              <div className="mt-6 pt-4 border-t border-gray-100 space-y-2 text-xs text-gray-500">
                {partner.address && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-brand-purple-600 shrink-0" />
                    <span className="truncate">{partner.address}</span>
                  </div>
                )}
                {partner.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-brand-purple-600 shrink-0" />
                    <span>{partner.phone}</span>
                  </div>
                )}
                {partner.website && (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-brand-purple-700 font-semibold hover:underline pt-1"
                  >
                    <span>Visiter le site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Section Appel à partenariat */}
        <section className="bg-brand-purple-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
           <h2 className="text-2xl sm:text-3xl font-heading font-bold">
  Devenez partenaire<br /> d'<span className="text-green-600">Activ'</span>{' '}
  <span className="text-yellow-500">Sport</span>{' '}
  <span className="text-purple-600">Rivesaltes</span>
</h2>
            <p className="text-brand-purple-100 text-sm sm:text-base">
              Vous souhaitez associer votre image à notre club, soutenir le sport local à Rivesaltes et développer votre visibilité auprès de nos adhérents ?
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="#/contact"
              className="inline-flex items-center gap-2 bg-brand-purple-700 hover:bg-brand-purple-400 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span>Nous contacter</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
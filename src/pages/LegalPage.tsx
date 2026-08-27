import PageHero from '@/components/PageHero';

export default function LegalPage() {
  return (
    <div>
      <PageHero
        eyebrow="Informations légales"
        title="Mentions légales"
        subtitle="Informations relatives au site et à l'association Activ' Sport Rivesaltes."
      />
      <section className="container-page py-10 sm:py-12">
        <div className="prose max-w-3xl text-gray-600">
          
          <h2 className="mt-8 font-heading text-xl font-bold text-brand-purple-900">Dénomination sociale</h2>
          <p className="mt-2">
            Association Activ' Sport Rivesaltes — Rivesaltes (66600), France.
          </p>
           <h2 className="mt-8 font-heading text-xl font-bold text-brand-purple-900">Forme juridique</h2>
          <p className="mt-2">
            Association régit par la loi du 1ᵉʳ juillet 1901.
          </p>
          <h2 className="mt-8 font-heading text-xl font-bold text-brand-purple-900">Coordonnées</h2>
          <p className="mt-2">
            Adresse : Mairie de Rivesaltes, 1 Place de la République, 66600 Rivesaltes — France <br />
            Email : contact@activsportrivesaltes.fr<br />
            Téléphone : Gisèle : 06 98 09 99 77 - Marie-Thérèse :06 98 09 99 77</p>
          <h2 className="mt-8 font-heading text-xl font-bold text-brand-purple-900">Numéros d'immatriculation</h2>
          <p className="mt-2">A compléter [numéro RNA (commençant par un W) et SIRET/SIREN si l'association emploie des salariés ou perçoit des subventions.]</p>
          <h2 className="mt-8 font-heading text-xl font-bold text-brand-purple-900">Directeur de la publication</h2>
          <p className="mt-2">Président(e) de l'association Activ' Sport Rivesaltes.</p>
          <h2 className="mt-8 font-heading text-xl font-bold text-brand-purple-900">Hébergement</h2>
          <p className="mt-2">Infomaniak Network SA, Rue Eugène-Marziano 25, 1227 Les Acacias, Genève, Suisse</p><p> Téléphone : +41 22 820 35 40 (ou +41 22 820 35 41).</p>
          <p> Site : infomaniak.com</p>
          <h2 className="mt-8 font-heading text-xl font-bold text-brand-purple-900">Protection des données personnelles</h2>
          <p className="mt-2">Les renseignements fournis servent à la gestion des adhésions et à l'envoi d'information sur le club.</p>
          <p>Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée, vous bénéficiez d'un droit d'accès et de rectification aux informations qui vous concernent, que vous pouvez exercer en vous adressant au club.</p>
          <h2 className="mt-8 font-heading text-xl font-bold text-brand-purple-900">Propriété intellectuelle</h2>
          <p className="mt-2">Activ' Sport Rivesaltes 2026. Tous droits réservés.</p>
          <p>L'ensemble des contenus (textes, visuels, logos, iconographies) présents sur ce support sont la propriété exclusive de l'association Activ' Sport Rivesaltes ou de ses partenaires. Toute reproduction, représentation, modification ou adaptation, totale ou partielle, est strictement interdite sans autorisation écrite préalable.</p>
          
        </div>
      </section>
    </div>
  );
}

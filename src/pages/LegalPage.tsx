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
          <p className="text-sm text-gray-400">
            Les mentions légales définitives seront ajoutées ici. Ci-dessous, un cadre de placeholder.
          </p>
          <h2 className="mt-8 font-heading text-xl font-bold text-brand-purple-900">Éditeur du site</h2>
          <p className="mt-2">
            Association Activ' Sport Rivesaltes — Rivesaltes (66600), France.
          </p>
          <h2 className="mt-8 font-heading text-xl font-bold text-brand-purple-900">Contact</h2>
          <p className="mt-2">
            Email : activsportrivesaltes@etik.com — Téléphone : 06 98 09 99 77 / 06 01 98 63 88
          </p>
          <h2 className="mt-8 font-heading text-xl font-bold text-brand-purple-900">Hébergement</h2>
          <p className="mt-2">[À compléter]</p>
          <h2 className="mt-8 font-heading text-xl font-bold text-brand-purple-900">Propriété intellectuelle</h2>
          <p className="mt-2">[À compléter]</p>
          <h2 className="mt-8 font-heading text-xl font-bold text-brand-purple-900">Données personnelles</h2>
          <p className="mt-2">[À compléter]</p>
        </div>
      </section>
    </div>
  );
}

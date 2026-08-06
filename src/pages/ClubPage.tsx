import { Heart, Users, Award, Leaf, Shield, Sparkles } from 'lucide-react';
import PageHero from '@/components/PageHero';

const values = [
  { icon: Heart, title: 'Bienveillance', text: 'Chacun évolue à son rythme, sans jugement ni pression de performance.' },
  { icon: Users, title: 'Convivialité', text: 'Le club est d\'abord un lieu de rencontres et de liens sociaux.' },
  { icon: Leaf, title: 'Santé & nature', text: 'Une activité physique au service du bien-être et de la vitalité.' },
  { icon: Shield, title: 'Sécurité', text: 'Des animateurs diplômés et des pratiques adaptées à chacun.' },
  { icon: Award, title: 'Affiliation FFSV', text: 'Membre de la Fédération Française du Sport Vitalité.', logo: '/images/Logo_Fede.jpg' },
  { icon: Sparkles, title: 'Sans compétition', text: 'Aucun esprit de compétition : seul le plaisir de bouger compte.' },
];

// Valeurs utilisant un logo plutôt qu'une icône
const logoValues = new Set(['Affiliation FFSV']);
const colorClasses: Record<string, { bg: string; text: string }> = {
  yellow: { bg: 'bg-brand-yellow-100', text: 'text-brand-yellow-700' },
  green: { bg: 'bg-brand-green-100', text: 'text-brand-green-700' },
  purple: { bg: 'bg-brand-purple-100', text: 'text-brand-purple-700' },
};

function ActivSportRivesaltesWordmark() {
  return (
    <>
      <span className="text-brand-green-700">Activ'</span>{' '}
      <span className="text-brand-yellow-500">Sport</span>{' '}
      <span className="text-brand-purple-800">Rivesaltes</span>
    </>
  );
}

export default function ClubPage() {
  return (
    <div>
      <PageHero
        eyebrow="Le club"
        title={<ActivSportRivesaltesWordmark />}
        subtitle="Club associatif de sport bien-être, affilié à la Fédération Française du Sport Vitalité, agréé Jeunesse et Sports."
      />

      {/* Histoire */}
      <section className="container-page py-10 sm:py-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Notre histoire</span>
            <h2 className="section-title mt-2 text: text-brand-purple-800">De GV Rivesaltes<br />&ensp;&ensp;&ensp;à Activ' Sport Rivesaltes</h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Le club trouve ses origines dans la <strong>Gymnastique Volontaire de Rivesaltes</strong>,
                créée il y a plus de quarante ans par un groupe de passionnés souhaitant offrir aux
                Rivesaltois une activité physique accessible et conviviale.
              </p>
              <p>
                Au fil des saisons, l'offre s'est enrichie — marche nordique, pilates, yoga, zumba —
                pour répondre aux attentes d'un public de plus en plus large. En devenant
                <strong> <ActivSportRivesaltesWordmark /></strong>, le club a affirmé son identité : un club
                associatif ouvert à toutes et à tous, centré sur le bien-être et la vitalité.
              </p>
              <p>
                Aujourd'hui, ce sont plus de 240 adhérents qui se retrouvent chaque semaine pour
                pratiquer l'une des 14 activités proposées, encadrées par des animateurs diplômés
                et bénévoles.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/Fitball1.jpg"
              alt="Cours de fitball au club Activ' Sport Rivesaltes"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card"
            />
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-brand-green-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="text-center">
            <span className="eyebrow">Nos valeurs</span>
            <h2 className="section-title mt-2">Ce qui nous anime</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Le club repose sur des valeurs simples et fortes : le plaisir de bouger ensemble,
              dans le respect de chacun et sans aucun esprit de compétition.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="card p-6 text-center">
                {logoValues.has(v.title) && v.logo ? (
                  <img src={v.logo} alt="Logo FFSV" className="mx-auto h-14 w-auto object-contain" />
                ) : (
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-purple-100 text-brand-purple-700">
                    <v.icon className="h-7 w-7" />
                  </div>
                )}
                <h3 className="mt-4 font-heading text-lg font-semibold text-brand-purple-900">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliation */}
      <section className="container-page py-10 sm:py-12">
        <div className="grid gap-8 rounded-3xl bg-brand-purple-50 p-8 sm:p-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-brand-purple-900">Affiliation & agréments</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              <strong><ActivSportRivesaltesWordmark /></strong> est affilié à la <strong>Fédération Française du Sport Vitalité (FFSV)</strong>,
              réseau national d'associations promouvant la santé par l'activité physique. Le club est
              également <strong>agréé Jeunesse et Sports</strong>, garantissant le sérieux de son
              encadrement et de son fonctionnement associatif.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <div className="rounded-2xl bg-white p-5 text-center shadow-soft">
              <img src="/images/Logo_Fede.jpg" alt="Logo FFSV" className="mx-auto h-16 w-auto object-contain" />
              <p className="mt-2 font-heading font-semibold text-brand-purple-900">Fédération FFSV</p>
              <p className="text-xs text-gray-500">Affiliation officielle</p>
            </div>
            <div className="rounded-2xl bg-white p-5 text-center shadow-soft">
              <Shield className="mx-auto h-10 w-10 text-brand-green-500" />
              <p className="mt-2 font-heading font-semibold text-brand-purple-900">Agréé Jeunesse & Sports</p>
              <p className="text-xs text-gray-500">Reconnaissance officielle</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

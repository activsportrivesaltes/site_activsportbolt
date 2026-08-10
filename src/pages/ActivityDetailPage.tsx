import { ArrowLeft, ArrowRight, Clock, MapPin, Users, Target } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { activities } from '@/data/activities';
import { schedule } from '@/data/planning';

export default function ActivityDetailPage({ slug }: { slug: string }) {
  const activity = activities.find((a) => a.slug === slug);

  if (!activity) {
    return (
      <div>
        <PageHero title="Activité introuvable" subtitle="Cette activité n'existe pas ou plus." />
        <div className="container-page py-16 text-center">
          <a href="#/activites" className="btn btn-primary">
            <ArrowLeft className="h-4 w-4" /> Retour aux activités
          </a>
        </div>
      </div>
    );
  }

  const normalizeName = (s: string) => s.toLowerCase().replace(/\s*\/\s*/g, '/');
  const relatedSlots = schedule.filter((s) => normalizeName(s.activity) === normalizeName(activity.name));

  const currentIndex = activities.findIndex((a) => a.slug === slug);
  const prevActivity = activities[(currentIndex - 1 + activities.length) % activities.length];
  const nextActivity = activities[(currentIndex + 1) % activities.length];

  return (
    <div>
      {/* Conteneur Flex pour placer l'image à droite de Hero */}
      <div className="relative bg-gradient-to-br from-brand-purple-50 via-white to-brand-green-50 overflow-hidden">
        <div className="container-page flex flex-col lg:flex-row items-center justify-between gap-8 py-8 lg:py-0">
          
          {/* Colonne Gauche : Le Hero sans l'image */}
          <div className="flex-1 w-full">
            <PageHero
              eyebrow="Activité"
              title={activity.name}
              subtitle={activity.shortDescription}
            >
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500 bg-green-100 px-4 py-2 text-sm font-medium text-green-800 shadow-soft">
                  <Target className="h-4 w-4" /> {activity.level}
                </span>
                
                <span className="inline-flex items-center gap-1.5 rounded-full border border-yellow-500 bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800 shadow-soft">
                  <Users className="h-4 w-4" /> {activity.audience}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500 bg-purple-100 px-4 py-2 text-sm font-medium text-purple-800 shadow-soft">
                  <Users className="h-4 w-4" /> {activity.animateur}
                </span>
              </div>
            </PageHero>
          </div>
         

          {/* Colonne Droite : L'image dédiée */}
          <div className="w-full lg:w-1/2 max-w-md shrink-0 lg:pr-6 pb-8 lg:pb-0">
            <img 
              src={activity.img} 
              alt={activity.name} 
              className="w-full h-72 sm:h-80 object-cover rounded-2xl shadow-xl border border-white/50"
            />
          </div>

        </div>
      </div>

      <section className="container-page py-10 sm:py-12">
        <a href="#/activites" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-purple-700 hover:text-brand-purple-900">
          <ArrowLeft className="h-4 w-4" /> Toutes les activités
        </a>

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-brand-purple-900">Description</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">{activity.description}</p>

            <div className="mt-8 rounded-2xl bg-brand-green-50 p-6">
              <h3 className="font-heading font-semibold text-brand-green-800">Pour qui ?</h3>
              <p className="mt-2 text-sm text-gray-600">
                Cette activité s'adresse à un public <strong>{activity.audience.toLowerCase()}</strong>,
                niveau <strong>{activity.level.toLowerCase()}</strong>. Nos animateurs adaptent
                la séance aux capacités de chacun.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-brand-purple-900">Créneaux & lieux</h2>
            {relatedSlots.length > 0 ? (
              <ul className="mt-4 space-y-3">
                {relatedSlots.map((slot, i) => (
                  <li key={i} className="card flex items-center gap-4 p-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-purple-100 text-brand-purple-700">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-brand-purple-900">{slot.day} · {slot.time}</p>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" /> {slot.location} · {slot.level}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 rounded-2xl bg-gray-50 p-6 text-sm text-gray-500">
                Les créneaux de cette activité seront bientôt confirmés. Consultez le planning complet
                pour l'ensemble des horaires.
              </p>
            )}

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#/planning" className="btn btn-outline">Voir le planning complet</a>
              <a href="#/inscription" className="btn btn-primary">S'inscrire à cette activité</a>
            </div>
          </div>
        </div>

        {/* Navigation entre activités */}
        <nav className="mt-12 flex flex-col sm:flex-row items-stretch gap-4">
          <a
            href={`#/activites/${prevActivity.slug}`}
            className="group flex flex-1 items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-soft transition-all hover:border-brand-purple-300 hover:shadow-md"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-purple-50 text-brand-purple-700 transition-colors group-hover:bg-brand-purple-100">
              <ArrowLeft className="h-5 w-5" />
            </span>
            <span className="flex flex-col text-left">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">Précédent</span>
              <span className="font-heading font-semibold text-brand-purple-900">{prevActivity.name}</span>
            </span>
          </a>
          <a
            href={`#/activites/${nextActivity.slug}`}
            className="group flex flex-1 items-center justify-end gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-soft transition-all hover:border-brand-purple-300 hover:shadow-md"
          >
            <span className="flex flex-col text-right">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">Suivant</span>
              <span className="font-heading font-semibold text-brand-purple-900">{nextActivity.name}</span>
            </span>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-purple-50 text-brand-purple-700 transition-colors group-hover:bg-brand-purple-100">
              <ArrowRight className="h-5 w-5" />
            </span>
          </a>
        </nav>
      </section>
    </div>
  );
}
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { activities } from '@/data/activities';

const colorClasses: Record<string, { bg: string; text: string; ring: string }> = {
  yellow: { bg: 'bg-brand-yellow-100', text: 'text-brand-yellow-700', ring: 'ring-brand-yellow-200' },
  green: { bg: 'bg-brand-green-100', text: 'text-brand-green-700', ring: 'ring-brand-green-200' },
  purple: { bg: 'bg-brand-purple-100', text: 'text-brand-purple-700', ring: 'ring-brand-purple-200' },
};

export default function ActivitiesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Nos activités"
        title="13 activités pour bouger à votre rythme"
        subtitle="Du fitness à la gym douce, du yoga à la marche nordique — il y a forcément une activité faite pour vous. Cliquez sur une activité pour en savoir plus."
      />

      <section className="container-page py-10 sm:py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((a) => {
            const c = colorClasses[a.color];
            return (
              <a
                key={a.slug}
                href={`#/activites/${a.slug}`}
                className="card group flex flex-col p-6 hover:-translate-y-1 hover:shadow-card"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${c.bg} ${c.text} ring-1 ${c.ring}`}>
                  <span className="font-heading text-xl font-bold">{a.name.charAt(0)}</span>
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-brand-purple-900">{a.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{a.shortDescription}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    {a.level}
                  </span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    {a.audience}
                  </span>
                 
                  
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-purple-700 group-hover:text-brand-purple-900">
                  En savoir plus
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}

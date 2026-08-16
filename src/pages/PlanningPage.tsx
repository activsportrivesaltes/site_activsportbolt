import { Clock, MapPin, Tag, User } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { schedule, days } from '@/data/planning';

type LocationStyle = {
  badge: string;
  card: string;
  dot: string;
};

const locationStyles: Record<string, LocationStyle> = {
  'Ami-Club': {
    badge: 'bg-brand-purple-50 text-brand-purple-700',
    card: 'bg-brand-purple-100/60 ring-1 ring-brand-purple-500',
    dot: 'bg-brand-purple-800',
  },
  'Ancienne mairie': {
    badge: 'bg-brand-green-50 text-brand-green-700',
    card: 'bg-brand-green-100/60 ring-1 ring-brand-green-500',
    dot: 'bg-brand-green-500',
  },
  'Espace détente': {
    badge: 'bg-yellow-100 text-yellow-600',
    card: 'bg-yellow-100 ring-1 ring-yellow-500',
    dot: 'bg-yellow-500',
  },
  'Extérieur': {
    badge: 'bg-yellow-100 text-yellow-600',
    card: 'bg-yellow-100 ring-1 ring-yellow-500',
    dot: 'bg-yellow-500',
  },
};

const defaultStyle: LocationStyle = {
  badge: 'bg-gray-100 text-gray-600',
  card: 'bg-gray-50 ring-1 ring-gray-200',
  dot: 'bg-gray-400',
};

function styleForLocation(location: string): LocationStyle {
  return locationStyles[location] ?? defaultStyle;
}

export default function PlanningPage() {
  return (
    <div>
      <PageHero
        eyebrow="Planning"
        title="Horaires des cours 2026 – 2027"
        subtitle="Retrouvez tous les créneaux par jour, lieu et niveau. Les séances ont lieu à l'Ami-Club, à l'ancienne mairie ou en extérieur."
      />

      <section className="container-page py-10 sm:py-12">
        {/* Légende des lieux */}
        <div className="mb-8 flex flex-wrap gap-4 text-sm">
         
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-green-50 px-4 py-2 text-brand-green-700">
            <MapPin className="h-4 w-4" /> Ancienne mairie
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-yellow-100 px-4 py-2 text-brand-yellow-600">
            <MapPin className="h-4 w-4" /> Extérieur
          </span>
           <span className="inline-flex items-center gap-2 rounded-full bg-brand-purple-50 px-4 py-2 text-brand-purple-700">
            <MapPin className="h-4 w-4" /> Ami-Club
          </span>
        </div>

        {/* Vue desktop : tableau par jour */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-6 gap-4">
            {days.map((day) => {
              const slots = schedule.filter((s) => s.day === day);
              return (
                <div key={day} className="rounded-2xl bg-white p-4 shadow-soft ring-1 ring-black/5">
                  <h3 className="text-center font-heading text-base font-bold text-brand-purple-900">{day}</h3>
                  <ul className="mt-3 space-y-3">
                    {slots.map((slot, i) => {
                      const ls = styleForLocation(slot.location);
                      return (
                      <li key={i} className={`rounded-xl p-3 ${ls.card}`}>
                        <p className="text-xs font-semibold text-brand-purple-700">{slot.time}</p>
                        <p className="mt-1 text-sm font-medium text-gray-800">{slot.activity}</p>
                        <p className="mt-1 flex items-center gap-1 text-xs text-gray-600">
                          <span className={`h-2 w-2 rounded-full ${ls.dot}`} /> {slot.location}
                        </p>
                        <p className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                          <User className="h-3 w-3" /> {slot.animateur}
                        </p>
                      </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vue mobile/tablette : accordéon par jour */}
        <div className="space-y-4 lg:hidden">
  {days.map((day) => {
    const slots = schedule.filter((s) => s.day === day);
    if (slots.length === 0) return null;
    return (
      <div key={day} className="card overflow-hidden">
        <div className="bg-brand-purple-600 px-5 py-3">
          <h3 className="font-heading text-base font-bold text-white">{day}</h3>
        </div>
        {/* Espacement entre les cours entourés */}
        <div className="space-y-3 p-4">
          {slots.map((slot, i) => {
            const ls = styleForLocation(slot.location);
            return (
              /* Chaque cours est entouré d'une bordure avec un fond léger et des coins arrondis */
              <div 
                key={i} 
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50/50 p-3.5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${ls.badge}`}>
                  <Clock className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">{slot.activity}</p>
                  <p className="text-xs text-gray-500">{slot.time}</p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-gray-600">
                    <span className={`h-2 w-2 rounded-full ${ls.dot}`} /> {slot.location}
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                    <User className="h-3 w-3" /> {slot.animateur}
                  </p>
                  <span className={`mt-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium ${ls.badge}`}>
                    <Tag className="h-2.5 w-2.5" /> {slot.level}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  })}
</div>

        <p className="mt-8 text-sm text-gray-500">
          Les horaires sont susceptibles d'évoluer en cours de saison. Contactez-nous pour toute question.
        </p>
      </section>
    </div>
  );
}

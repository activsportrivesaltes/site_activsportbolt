import { Award, Dumbbell } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { team } from '@/data/team';

export default function TeamPage() {
  return (
    <div>
      <PageHero
        eyebrow="L'équipe"
        title="Nos dirigeants et nos animateurs diplômés"
        subtitle="Des passionnés au service de votre bien-être. Tous nos animateurs sont diplômés et bénévoles, engagés pour vous offrir des cours de qualité dans une ambiance conviviale."
      />

      <section className="container-page py-10 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.id} className="card group overflow-hidden hover:-translate-y-1 hover:shadow-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role} au club Activ' Sport Rivesaltes`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-brand-purple-900">{member.name}</h3>
                <p className="text-sm font-medium text-brand-green-600">{member.role}</p>
                <div className="mt-3 flex items-start gap-2 text-sm text-gray-600">
                  <Award className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow-500" />
                  <span>{member.certification}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {member.activities.map((act) => (
                    <span
                      key={act}
                      className="inline-flex items-center gap-1 rounded-full bg-brand-purple-50 px-3 py-1 text-xs font-medium text-brand-purple-700"
                    >
                      <Dumbbell className="h-3 w-3" />
                      {act}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-brand-purple-50 p-8 text-center">
          <p className="text-gray-600">
            Le club est animé par une équipe de bénévoles engagés. Vous souhaitez rejoindre l'équipe
            d'encadrement ? <a href="#/contact" className="font-semibold text-brand-purple-700 underline-offset-2 hover:underline">Contactez-nous</a>.
          </p>
        </div>
      </section>
    </div>
  );
}

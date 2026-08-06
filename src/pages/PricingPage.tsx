import { Check, Users, GraduationCap } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { pricingPlans, familyDiscount } from '@/data/pricing';

export default function PricingPage() {
  return (
    <div>
      <PageHero
        eyebrow="Tarifs"
        title="Des formules adaptées à votre pratique"
        subtitle="Choisissez la formule qui vous convient. Réduction de 10 € pour le 2e membre du foyer ainsi que pour les étudiants, valable du 14/09/2026 au 31/12/26 ."
      />

      <section className="container-page py-10 sm:py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-3xl p-8 transition-all ${
                plan.variant === 'green'
                  ? 'bg-brand-green-50 text-brand-green-800 shadow-soft ring-2 ring-brand-green-700'
                  : plan.variant === 'purple'
                    ? 'bg-brand-purple-50 text-brand-purple-800 shadow-soft ring-2 ring-brand-purple-700'
                    : plan.variant === 'yellow'
                      ? 'bg-brand-yellow-50 text-brand-yellow-800 shadow-soft ring-2 ring-brand-yellow-600'
                      : 'bg-white text-gray-800 shadow-soft ring-1 ring-black/5'
              }`}
            >
              <h3 className={`font-heading text-xl font-bold ${plan.variant === 'green' ? 'text-brand-green-800' : plan.variant === 'purple' ? 'text-brand-purple-800' : plan.variant === 'yellow' ? 'text-brand-yellow-800' : 'text-brand-purple-900'}`}>
                {plan.name}
              </h3>
              <p className={`mt-2 text-sm ${plan.variant === 'green' ? 'text-brand-green-700' : plan.variant === 'purple' ? 'text-brand-purple-700' : plan.variant === 'yellow' ? 'text-brand-yellow-700' : 'text-gray-500'}`}>
                {plan.description}
              </p>
              <div className="mt-6 flex items-end gap-1">
                <span className={`font-heading text-4xl font-bold ${plan.variant === 'green' ? 'text-brand-green-700' : plan.variant === 'purple' ? 'text-brand-purple-700' : plan.variant === 'yellow' ? 'text-brand-yellow-400' : 'text-brand-purple-800'}`}>
                  {plan.price} €
                </span>
                <span className={`mb-1 text-sm ${plan.variant === 'green' ? 'text-brand-green-600' : plan.variant === 'purple' ? 'text-brand-purple-600' : plan.variant === 'yellow' ? 'text-brand-yellow-600' : 'text-gray-500'}`}>
                  / saison
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.variant === 'purple' ? 'text-brand-purple-600' : plan.variant === 'yellow' ? 'text-brand-yellow-600' : 'text-brand-green-600'}`} />
                    <span className={plan.variant === 'green' ? 'text-brand-green-800' : plan.variant === 'purple' ? 'text-brand-purple-800' : plan.variant === 'yellow' ? 'text-brand-yellow-800' : 'text-gray-600'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#/inscription"
                className={`btn mt-8 ${plan.variant === 'green' ? 'bg-brand-green-700 text-white hover:bg-brand-green-800' : plan.variant === 'purple' ? 'bg-brand-purple-700 text-white hover:bg-brand-purple-800' : plan.variant === 'yellow' ? 'bg-brand-yellow-600 text-white hover:bg-brand-yellow-700' : 'btn-primary'}`}
              >
                Choisir cette formule
              </a>
            </div>
          ))}
        </div>

        {/* Réductions */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-brand-green-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green-100 text-brand-green-700">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-brand-green-800">2e membre du foyer</h3>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Une réduction de <strong>{familyDiscount} €</strong> est appliquée pour le deuxième membre
              d'un même foyer. Une belle occasion de partager une activité en famille.
            </p>
          </div>
          <div className="rounded-2xl bg-brand-green-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green-100 text-brand-green-700">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-brand-green-800">Étudiants</h3>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Une réduction de <strong>{familyDiscount} €</strong> est appliquée pour les étudiants.
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          La cotisation inclut l'affiliation à la Fédération Française du Sport Vitalité et l'assurance fédérale.
        </p>
      </section>
    </div>
  );
}

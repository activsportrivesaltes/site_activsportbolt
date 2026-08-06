// Tarifs de la saison.
// Source isolée — à reconnecter à une table Supabase "pricing" plus tard.

export type PricingPlan = {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  variant?: 'green' | 'purple' | 'yellow';
};

export const pricingPlans: PricingPlan[] = [
  {
    id: 'one-course',
    name: 'Formule 1 cours',
    price: 110,
    description: 'Une activité par semaine, au choix.',
    variant: 'green',
    features: [
      '1 cours hebdomadaire',
      'Accès à une activité au choix',
      'Assurance fédérale incluse',
      'Affiliation FFSV',
    ],
  },
  {
    id: 'two-courses',
    name: 'Formule 2 cours',
    price: 140,
    description: 'Deux activités par semaine pour progresser.',
    variant: 'yellow',
    features: [
      '2 cours hebdomadaires',
      '2 activités au choix',
      'Assurance fédérale incluse',
      'Affiliation FFSV',
      'Progression plus rapide',
    ],
  },
  {
    id: 'unlimited',
    name: 'Formule Illimité',
    price: 200,
    description: 'Tous les cours que vous souhaitez, sans limite.',
    variant: 'purple',
    features: [
      'Cours illimités dans la semaine',
      'Accès à toutes les activités',
      'Assurance fédérale incluse',
      'Affiliation FFSV',
      'Liberté totale de pratique',
    ],
  },
];

// Réduction de 10 € pour le 2e membre du foyer et pour les étudiants.
export const familyDiscount = 10;

// Planning hebdomadaire des cours.
// Source isolée — à reconnecter à une table Supabase "schedule" plus tard.
// Données inspirées du fichier "TABLEAU D'activité par semaine 2026-2027.xlsx".

export type ScheduleSlot = {
  day: string;
  time: string;
  activity: string;
  location: string;
  level: string;
  animateur: string;
};

// Lieux possibles : "Ami-Club", "Ancienne mairie", "Extérieur"

export const schedule: ScheduleSlot[] = [
  { day: 'Lundi', time: '09h00 – 10h00', activity: 'Pilates', location: 'Ami-Club', level: 'Tous niveaux', animateur: 'Lyana' },
  { day: 'Lundi', time: '09h00 – 10h00', activity: 'Gym douce', location: 'Ancienne mairie', level: 'Tous niveaux', animateur: 'Christine' },
  { day: 'Lundi', time: '10h00 – 11h00', activity: 'Pilates', location: 'Ami-Club', level: 'Tous niveaux', animateur: 'Lyana' },
  { day: 'Lundi', time: '10h00 – 11h00', activity: 'Gym adaptée', location: 'Ancienne mairie', level: 'Adapté', animateur: 'Christine' },
  { day: 'Lundi', time: '18h00 – 19h00', activity: 'Pilates', location: 'Ami-Club', level: 'Tous niveaux', animateur: 'Lyana' },
  { day: 'Lundi', time: '19h00 – 20h00', activity: 'Yoga', location: 'Ami-Club', level: 'Tous niveaux', animateur: 'Monique' },

  { day: 'Mardi', time: '09h00 – 10h00', activity: 'Gym plein air', location: 'Espace détente', level: 'Tous niveaux', animateur: 'Christine' },
  { day: 'Mardi', time: '17h15 – 18h15', activity: 'Yin yoga/Fascia', location: 'Ami-Club', level: 'Tous niveaux', animateur: 'Roland' },
  { day: 'Mardi', time: '18h30 – 19h30', activity: 'Fitness', location: 'Ami-Club', level: 'Tous niveaux', animateur: 'Axelle' },
  { day: 'Mardi', time: '19h30 – 20h30', activity: 'Zumba', location: 'Ami-Club', level: 'Tous niveaux', animateur: 'Axelle' },

  { day: 'Mercredi', time: '09h00 – 10h00', activity: 'Gym adultes', location: 'Ami-Club', level: 'Tous niveaux', animateur: 'Christine' },
  { day: 'Mercredi', time: '10h00 – 11h00', activity: 'Yoga', location: 'Ami-Club', level: 'Tous niveaux', animateur: 'Monique' },
  { day: 'Mercredi', time: '18h00 – 19h00', activity: 'Fitball', location: 'Ami-Club', level: 'Tous niveaux', animateur: 'Roland' },
  { day: 'Mercredi', time: '19h00 – 20h00', activity: 'Pilates', location: 'Ami-Club', level: 'Tous niveaux', animateur: 'Roland' },

  { day: 'Jeudi', time: '09h00 – 10h00', activity: 'Pilates', location: 'Ami-Club', level: 'Tous niveaux', animateur: 'Lyana' },
  { day: 'Jeudi', time: '09h00 – 10h00', activity: 'Gym douce', location: 'Ancienne mairie', level: 'Tous niveaux', animateur: 'Christine' },
  { day: 'Jeudi', time: '10h00 – 11h00', activity: 'Strechmouv', location: 'Ami-Club', level: 'Tous niveaux', animateur: 'Lyana' },
  { day: 'Jeudi', time: '18h30 – 19h30', activity: 'Gym tonic', location: 'Ami-Club', level: 'Tous niveaux', animateur: 'Marie' },

  { day: 'Vendredi', time: '08h30 – 10h00', activity: 'Marche nordique', location: 'Extérieur', level: 'Tous niveaux', animateur: 'Céline' },
  { day: 'Vendredi', time: '09h00 – 10h00', activity: 'Gym tonic', location: 'Ami-Club', level: 'Tous niveaux', animateur: 'Marie' },
];

export const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];

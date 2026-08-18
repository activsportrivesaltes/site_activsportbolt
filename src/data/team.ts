// Équipe des animateurs du club.
// Source isolée — à reconnecter à une table Supabase "team" plus tard.

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  certification?: string[];
  activities?: string[];
  image: string;
};

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Gisèle',
    role: 'Présidente',
    certification: [],
    activities: [],
    image: '/images/Gisele.jpg',
  },
  {
    id: '2',
    name: 'Marie-Thérèse',
    role: 'Vice-présidente',
    certification: [],
    activities: [],
    image: '/images/Marie_Therese.jpg',
  },
{
    id: '3',
    name: 'Christian',
    role: 'Trésorier',
    certification: [],
    activities: [],
    image: '/images/Christian.jpg',
  },

    {
    id: '11',
    name: 'Le bureau',
    role: 'Le bureau du club',
    certification: [],
    activities: [],
    image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=600',
  },

  {
    id: '4',
    name: 'Axelle',
    role: 'Animatrice',
    certification: [],
    activities: ['Fitness', 'Zumba'],
    image: '/images/Axelle.jpg',
  },
  {
    id: '5',
    name: 'Céline',
    role: 'Animatrice',
    certification: [],
    activities: ['Marche nordique'],
    image: '/images/Celine.jpg',
  },
  {
    id: '6',
    name: 'Christine',
    role: 'Animatrice',
    certification: [],
    activities: ['Gym adultes', 'Gym adaptée', 'Gym douce', 'Gym plein air'],
    image: '/images/Christine.jpg',
  },
  {
    id: '7',
    name: 'Lyana',
    role: 'Animatrice',
    certification: [],
    activities: ['Pilates'],
    image: '/images/Lyana.jpg',
  },
{
    id: '8',
    name: 'Marie',
    role: 'Animatrice',
    certification: [],
    activities: ['Gym tonic'],
    image: '/images/Marie.jpg',
  },
{
    id: '9',
    name: 'Monique',
    role: 'Animatrice',
    certification: [],
    activities: ['Yoga'],
    image: '/images/Monique.jpg',
  },
{
    id: '10',
    name: 'Roland',
    role: 'Animateur',
    certification: [],
    activities: ['Fitball', 'Pilates'],
    image: '/images/Roland.jpg',
  },

];

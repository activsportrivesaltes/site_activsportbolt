// Galerie photos du club.
// Source isolée — à reconnecter à une table Supabase "gallery" plus tard.
// Les images sont des placeholders génériques — à remplacer par les vraies photos du club.

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
};

export const gallery: GalleryItem[] = [
  {
    id: '1',
    src: '/images/Pilates.jpg',
    alt: 'Cours de Pilates en salle à Activ\u2019 Sport Rivesaltes',
    caption: 'Pilates',
    category: 'Cours',
  },
  {
    id: '2',
    src: '/images/Pilates2.jpg',
    alt: 'Pilates',
    caption: 'Pilates avec Roland',
    category: 'Cours',
  },
  {
    id: '3',
    src: 'Gym_tonic.jpg',
    alt: 'S\u00e9ance de Pilates au sol sur tapis',
    caption: 'Pilates',
    category: 'Cours',
  },
  {
    id: '4',
    src: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Cours de yoga collectif en salle',
    caption: 'Yoga',
    category: 'Cours',
  },
  {
    id: '5',
    src: 'https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Moment convivial entre adh\u00e9rents lors d\u2019un \u00e9v\u00e9nement du club',
    caption: 'Galette des rois',
    category: 'Événements',
  },
  {
    id: '6',
    src: 'https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'S\u00e9ance de renforcement musculaire avec halt\u00e8res l\u00e9gers',
    caption: 'Renforcement musculaire',
    category: 'Cours',
  },
  {
    id: '7',
    src: 'https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Cours de Zumba dans une ambiance festive',
    caption: 'Zumba',
    category: 'Cours',
  },
  {
    id: '8',
    src: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Gymnastique en plein air dans un parc',
    caption: 'Gym plein air',
    category: 'Sorties',
  },
];

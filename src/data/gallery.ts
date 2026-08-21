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
    src: '/images/Pilates2F.jpg',
    alt: 'Pilates',
    caption: 'Pilates avec Roland',
    category: 'Cours',
  },
  {
    id: '3',
    src: 'images/Gym_tonic.jpg',
    alt: 'S\u00e9ance de Pilates au sol sur tapis',
    caption: 'Pilates',
    category: 'Cours',
  },
  
];

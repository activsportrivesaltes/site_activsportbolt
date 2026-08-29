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
    src: 'public/images/PilatesF.jpg',
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
    alt: 'Gym tonic',
    caption: 'Gym Tonic',
    category: 'Cours',
  },
  {
    id: '4',
    src: 'images/CoursMarieF.jpg',
    alt: 'Cours de Marie',
    caption: 'Gym tonic avec Marie',
    category: 'Cours',
  },
  {
    id: '5',
    src: 'images/CoursSeniorsF.jpg',
    alt: 'Cours sénior',
    caption: 'Cours sénior',
    category: 'Cours',
  },
  {
    id: '6',
    src: 'images/Fitball3F.jpg',
    alt: 'Fitball',
    caption: 'Fitball',
    category: 'Cours',
  },
  {
    id: '7',
    src: 'images/Fitball4F.jpg',
    alt: 'Fitball',
    caption: 'Fitball',
    category: 'Cours',
  },
  {
    id: '8',
    src: 'images/GymF.jpg',
    alt: 'Gym',
    caption: 'Gym',
    category: 'Cours',
  },
  {
    id: '9',
    src: 'images/Gym4F.jpg',
    alt: 'Gym',
    caption: 'Gym',
    category: 'Cours',
  },
];

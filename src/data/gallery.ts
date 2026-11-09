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
    id: '23',
    src: '/images/Gym_Adaptee-112026.jpg',
    alt: 'Gym_Adaptée',
    caption: 'Gym_Adaptée',
    category: 'Cours',
  },
  {
    id: '21',
    src: '/images/Gym2_Plein_Air-112026.jpg',
    alt: 'Gym Plein Air',
    caption: 'Gym Plein Air',
    category: 'Cours',
  },{
    id: '22',
    src: '/images/Gym3_Plein_Air-112026.jpg',
    alt: 'Gym Plein Air',
    caption: 'Gym Plein Air',
    category: 'Cours',
  },
  {
    id: '10',
    src: '/images/Marche2_Nordique11-2026.jpeg',
    alt: 'Marche nordique à Saint Estève à Activ\u2019 Sport Rivesaltes',
    caption: 'Marche nordique',
    category: 'Cours',
  },
  {
    id: '11',
    src: '/images/Marche_Nordique11-2026.jpeg',
    alt: 'Marche nordique à Saint Estève à Activ\u2019 Sport Rivesaltes',
    caption: 'Marche nordique',
    category: 'Cours',
  },
  {
    id: '12',
    src: '/images/Marche_Nordique10-2026.jpeg',
    alt: 'Marche nordique à Activ\u2019 Sport Rivesaltes',
    caption: 'Marche nordique',
    category: 'Cours',
  },
  {
    id: '13',
    src: '/images/Marche2_Nordique10-2026.jpeg',
    alt: 'Marche nordique à Activ\u2019 Sport Rivesaltes',
    caption: 'Marche nordique',
    category: 'Cours',
  },
  {
    id: '14',
    src: '/images/Marche3_Nordique10-2026.jpeg',
    alt: 'Marche nordique à Activ\u2019 Sport Rivesaltes',
    caption: 'Marche nordique',
    category: 'Cours',
  },{
    id: '15',
    src: '/images/Marche4_Nordique10-2026.jpeg',
    alt: 'Marche nordique à Activ\u2019 Sport Rivesaltes',
    caption: 'Marche nordique',
    category: 'Cours',
  },
  {
    id: '16',
    src: '/images/Marche5_Nordique10-2026.jpeg',
    alt: 'Marche nordique à Activ\u2019 Sport Rivesaltes',
    caption: 'Marche nordique',
    category: 'Cours',
    },
    {
    id: '17',
    src: '/images/Yoga_10-2026.jpg',
    alt: 'Yoga à Activ\u2019 Sport Rivesaltes',
    caption: 'Yoga',
    category: 'Cours',
    },
    {
    id: '18',
    src: '/images/Pilates3_10-2026.jpg',
    alt: 'Pilates à Activ\u2019 Sport Rivesaltes',
    caption: 'Pilates',
    category: 'Cours',
    },
    {
    id: '19',
    src: '/images/Pilates_10-2026.jpg',
    alt: 'Pilates à Activ\u2019 Sport Rivesaltes',
    caption: 'Pilates',
    category: 'Cours',
    },
  {
    id: '1',
    src: '/images/PilatesF.jpg',
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
    src: '/images/Gym_tonic.jpg',
    alt: 'Gym tonic',
    caption: 'Gym Tonic',
    category: 'Cours',
  },
  {
    id: '4',
    src: '/images/CoursMarieF.jpg',
    alt: 'Cours de Marie',
    caption: 'Gym tonic avec Marie',
    category: 'Cours',
  },
  {
    id: '5',
    src: '/images/CoursSeniorsF.jpg',
    alt: 'Cours sénior',
    caption: 'Cours sénior',
    category: 'Cours',
  },
  {
    id: '6',
    src: '/images/Fitball3F.jpg',
    alt: 'Fitball',
    caption: 'Fitball',
    category: 'Cours',
  },
  {
    id: '7',
    src: '/images/Fitball4F.jpg',
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
    src: '/images/Gym4F.jpg',
    alt: 'Gym',
    caption: 'Gym',
    category: 'Cours',
  },
];

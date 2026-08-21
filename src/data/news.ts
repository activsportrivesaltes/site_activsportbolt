// Actualités & événements du club.
// Source isolée — à reconnecter à une table Supabase "news" (ou "events") plus tard.

export type NewsItem = {
  id: string;
  title: string;
  date?: string; // ISO
  category: 'Événement' | 'Info club' | 'Sortie';
  excerpt: string;
  content: string;
  image: string;
};

export const news: NewsItem[] = [
  {
    id: '1',
    title: 'Assemblée générale 2026',
    date: '2026-09-03',
    category: 'Info club',
    excerpt:
      'Notre assemblée générale annuelle se tiendra le jeudi 3 septembre 2026 à 17h30 à l\'Ami-Club. Changement de nom de l\'association, bilan de la saison, élection du bureau et projets à venir — tous les adhérents sont conviés.',
    content:
      'L\'assemblée générale d\'Activ\' Sport Rivesaltes se tiendra le jeudi 3 septembre 2026 à 17h30 à l\'Ami-Club. Au programme : Changement de nom de l\'association,bilan moral et financier de la saison écoulée, élection du bureau pour la nouvelle saison, présentation des activités et du planning 2026-2027. Votre présence est importante pour la vie démocratique du club.',
    image: '/images/AGF.jpg',
  },
  
   {
    id: '2',
    title: 'Forum des associations',
    date: '2026-09-05',
    category: 'Événement',
    excerpt:
      'Le forum des associations se tiendra le samedi 5 septembre aux Dômes, venez nous rencontrer et découvrir nos activités sportives et bien-être pour la saison 2026 – 2027.',
    content:
      'Comme chaque année, nous participons au forum des associations. Rendez-vous le samedi 5 septembre 2026 aux Dômes pour rencontrer nos animateurs et découvrir nos activités sportives et bien-être pour la saison 2026 – 2027. Inscriptions possibles sur place.',
    image: '/images/Forum.jpg?auto=compress&cs=tinysrgb&w=600',
  },
  
  {
    id: '3',
    title: 'Galette des rois',
    date: '2025-01-23',
    category: 'Événement',
    excerpt:
      'Moment convivial autour de la galette des rois pour bien démarrer l\'année ensemble. Adhérents et accompagnants bienvenus !',
    content:
      'Comme chaque année, nous célébrons l\'Épiphanie entre adhérents. Rendez-vous en janvier 2027 à l\'Ami-Club pour partager une galette des rois, un rafraîchissement et un moment de convivialité. Pensez à vous inscrire.',
    image: '/images/Galette2024.jpg?auto=compress&cs=tinysrgb&w=600',
  },

  {
    id: '4',
    title: 'Festimarche',
    date: '2025-05-27',
    category: 'Événement',
    excerpt:
      'Regroupement de tous les clubs EPGV 66.',
    content:
      'Regroupement de tous les clubs EPGV 66 pour une journée oxygène, marche active autour des 2 lacs à Villeneuve de la Raho, animations, repas et remise des récompenses.',
    image: '/images/FestimarcheF.jpg?auto=compress&cs=tinysrgb&w=600',
  },
];

// Actualités & événements du club.
// Source isolée — à reconnecter à une table Supabase "news" (ou "events") plus tard.

export type NewsItem = {
  id: string;
  title: string;
  date?: string; // ISO
  category: 'Événement' | 'Info club' | 'Sortie';
  excerpt: string;
  content: string;
  text?: string;
  image: string;
};

export const news: NewsItem[] = [
  {
    id: '1',
    title: 'Assemblée générale 2026',
    date: '2026-09-03',
    category: 'Info club',
    excerpt:
      'Notre assemblée générale annuelle s\'est tenue le jeudi 3 septembre 2026.',
    content:
      'L\'assemblée générale d\'Activ\' Sport Rivesaltes s\'est tenue le jeudi 3 septembre 2026.\nL\'assemblée a validé le changement de nom de l\'association : Activ\' Sport Rivesaltes. \n\n Mot de la présidente :\nRemerciement aux personnes présentes.\nLe quorum est atteint avec 77 personnes présentes et 40 pouvoirs, l’assemblée générale peut donc se dérouler.\nL’assemblée générale est le moment de vous rendre des comptes sur le fonctionnement de notre association.\nLe bilan d’activité sera présenté par Gisèle et le bilan financier par Pascale.\nNous soumettrons à votre approbation ces différents rapports, les nouveaux tarifs pour la saison qui reprendra le 14 septembre 2026, tarifs légèrement en hausse car nous finissons l’année passée avec un déficit dû à la baisse des effectifs alors que nous avons augmenté l’offre d’activités et enfin, la nouvelle composition du bureau et le budget prévisionnel.\nLa nouvelle saison s’annonce avec des changements ce qui va nous permettre de renforcer notre engagement et rendre notre communication plus lisible. Notre objectif étant toujours de proposer des activités sportives variées, destinées à tout public qui visent le maintien en forme et l’épanouissement tout en se faisant  plaisir.\n\nLes changements :\n- le nom, approuvé à l’unanimité sauf une abstention, lors de l’assemblée générale extraordinaire,\n-	l’équipe dirigeante étoffée (Pascale Gatineau et Maguy Radondy ne se représentent pas). Les nouvelles candidatures sont : Christian Tricoire, Catherine Grosjean, Anne Piquemal, Annie Antoine et Lydie Mascort,\n- le nouveau site internet conçu par Annie et qui vous sera présenté tout à l’heure,\n- le nouveau logo créé par Carole Gonquet,\n- enfin, nous allons renforcer la communication envers le public en utilisant davantage les réseaux sociaux.',
    image: '/images/AG2026.jpg',
  },
  
  {
    id: '2',
    title: 'Forum des associations',
    date: '2026-09-05',
    category: 'Événement',
    excerpt:
      'Le forum des associations s\'est tenu le samedi 5 septembre aux Dômes.',
    content:
      'Comme chaque année, le forum des associations s\'est tenu aux Dômes.\nVous avez été nombreux à venir nous rencontrer pour découvrir nos activités sportives et bien-être pour la saison 2026 – 2027.',
    image: '/images/Forum2026.jpg?auto=compress&cs=tinysrgb&w=600',
  },
  
  {
    id: '3',
    title: 'Galette des rois',
    date: '2025-01-23',
    category: 'Événement',
    excerpt:
      'Moment convivial autour de la galette des rois pour bien démarrer l\'année ensemble.',
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
      'Regroupement de tous les clubs EPGV 66 pour une journée oxygène, marche active autour des 2 lacs à Villeneuve de la Raho, présentation de nouvelles activités par petits ateliers l\'après-midi, animations, repas et remise des récompenses.',
    image: '/images/FestimarcheF.jpg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '5',
    title: 'Les 50 ans du club',
    date: '2024-06-20',
    category: 'Événement',
    excerpt:
      'Anniversaire de la création du club.',
    content:
      '50 ans de sport, de vitalité et de passion partagée ! Depuis 1974, notre club fait bouger toutes les générations dans un esprit familial et bienveillant.',
    image: '/images/50ansGateau.jpg',
  },
];

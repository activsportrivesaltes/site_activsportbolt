// Actualités & événements du club.
// Source isolée — à reconnecter à une table Supabase "news" (ou "events") plus tard.

export type NewsItem = {
  id: string;
  title: string;
  date: string; // ISO
  category: 'Événement' | 'Info club' | 'Sortie';
  excerpt: string;
  content: string;
  image: string;
};

export const news: NewsItem[] = [
  {
    id: '1',
    title: 'Assemblée générale 2026',
    date: '2026-09-12',
    category: 'Info club',
    excerpt:
      'Notre assemblée générale annuelle se tiendra le jeudi 4 septembre 2026. Bilan de la saison, élection du bureau et projets à venir — tous les adhérents sont conviés.',
    content:
      'L\'assemblée générale d\'Activ\' Sport Rivesaltes se tiendra le samedi 12 septembre 2026 à 10h à l\'Ami-Club. Au programme : bilan moral et financier de la saison écoulée, élection du bureau pour la nouvelle saison, présentation des activités et du planning 2026-2027. Votre présence est importante pour la vie démocratique du club.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '2',
    title: 'Galette des rois',
    date: '2027-01-09',
    category: 'Événement',
    excerpt:
      'Moment convivial autour de la galette des rois pour bien démarrer l\'année ensemble. Adhérents et accompagnants bienvenus !',
    content:
      'Comme chaque année, nous célébrons l\'Épiphanie entre adhérents. Rendez-vous le 9 janvier 2027 à 16h à l\'Ami-Club pour partager une galette des rois, un café et un moment de convivialité. Pensez à vous inscrire auprès de la trésorière.',
    image: 'https://images.pexels.com/photos/4109136/pexels-photo-4109136.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '3',
    title: 'Sortie marche nordique au Mont Canigou',
    date: '2026-10-25',
    category: 'Sortie',
    excerpt:
      'Grande sortie marche nordique au pied du Canigou. Parcours adapté, pique-nique partagé et grand air garantis.',
    content:
      'Le groupe marche nordique organise une grande sortie le dimanche 25 octobre 2026 au pied du Canigou. Départ à 8h du parking de Vernet-les-Bains. Parcours de 8 km adapté à tous les niveaux, avec pique-nique partagé en milieu de parcours. Inscriptions auprès de Marie-Thérèse.',
    image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '4',
    title: 'Stage découverte Pilates',
    date: '2026-11-15',
    category: 'Événement',
    excerpt:
      'Un stage de découverte Pilates ouvert à tous, adhérents et non-adhérents. Venez tester en douceur cette pratique accessible.',
    content:
      'Samedi 15 novembre 2026, de 14h à 16h, Nathalie anime un stage découverte Pilates à l\'ancienne mairie. Au programme : principes de la méthode, travail postural et respiration. Ouvert à tous, adhérents et non-adhérents. Tarif : 10 €. Inscriptions à l\'accueil du club.',
    image: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

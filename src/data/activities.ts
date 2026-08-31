// Données des activités du club.
// Source isolée — à reconnecter à une table Supabase "activities" plus tard.

export type Activity = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  level: 'Tous niveaux' | 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Adapté';
  audience: 'Adulte' | 'Senior' | 'Adulte & Senior';
  icon: string; // nom lucide-react
  color: 'yellow' | 'green' | 'purple';
  img ?: string;
  animateur?: 'Axelle'| 'Céline' | 'Christine' | 'Lyana' |'Marie' |'Monique'| 'Roland'| 'Lyana ou Roland';
}

export const activities: Activity[] = [
  {
    slug: 'fitball',
    name: 'Fitball',
    shortDescription: 'Renforcement et équilibre sur grand ballon.',
    description:
      'Travail musculaire doux sur gros ballon (Swiss ball). Le ballon associé au pilates crée du déséquilibre dans le maintien des postures, il permet d\'engager des muscles posturaux profonds nécessaires à ce maintien tout en protégeant le dos. De par son côté ludique, il est idéal pour reprendre une activité en douceur.',
    level: 'Tous niveaux',
    audience: 'Adulte & Senior',
    icon: 'CircleDot',
    color: 'purple',
    img: "/images/FitballF.jpg",
    animateur : 'Roland'
  },
  {
    slug: 'fitness',
    name: 'Fitness',
    shortDescription: 'Cardio et renforcement musculaire complet.',
    description:
      'Cours dynamique alternant séquences cardio et renforcement musculaire. Le fitness améliore l\'endurance, brûle des calories et tonifie l\'ensemble du corps dans une ambiance motivante.',
    level: 'Intermédiaire',
    audience: 'Adulte',
    icon: 'Dumbbell',
    color: 'yellow',
    img:"/images/FitnessF.jpg",
    animateur : 'Axelle'
  },
  {
    slug: 'gym-adaptee',
    name: 'Gym adaptée',
    shortDescription: 'Activité physique adaptée à chaque condition.',
    description:
      'Cours conçu pour les personnes souffrant de pathologies ou de douleurs chroniques (dos, articulations, surpoids). La gym adaptée propose des mouvements sécurisés et progressifs pour reprendre confiance en son corps.',
    level: 'Adapté',
    audience: 'Adulte & Senior',
    icon: 'HeartPulse',
    color: 'green',
    img:"/images/GymAdapteeF.jpg",
    animateur : 'Christine'
  },
  {
    slug: 'gym-adultes',
    name: 'Gym adultes',
    shortDescription: 'Assouplissement et allongement musculaire.',
    description:
      'La gym adultes regroupe des activités physiques variées adaptées aux personnes majeures, du débutant au sportif confirmé. Elle vise à entretenir la santé, améliorer la condition physique et favoriser le bien-être général.',
    level: 'Tous niveaux',
    audience: 'Adulte',
    icon: 'Move',
    color: 'green',
    img:"/images/GymAdultesF.jpg", 
    animateur : 'Christine'
  },
  {
    slug: 'gym-douce',
    name: 'Gym douce',
    shortDescription: 'Mouvements lents, respiration et posture.',
    description:
      'Gymnastique douce axée sur la mobilité, la souplesse et la respiration. Les enchaînements lents et contrôlés relâchent les tensions, entretiennent les articulations et favorisent le bien-être.',
    level: 'Tous niveaux',
    audience: 'Adulte & Senior',
    icon: 'Feather',
    color: 'green',
    img:"/images/GymDouceF.jpg", 
    animateur : 'Christine'
   },
  {
    slug: 'gym-plein-air',
    name: 'Gym plein air',
    shortDescription: 'Séances en extérieur, été comme hiver.',
    description:
      'Profitez du grand air ! La gym en plein air combine renforcement, cardio et jeux de motricité dans un cadre naturel. Une bouffée d\'oxygène pour le corps et l\'esprit.',
    level: 'Tous niveaux',
    audience: 'Adulte & Senior',
    icon: 'Trees',
    color: 'green',
    img:"/images/GymPleinAir.jpg",
    animateur : 'Christine'
      },
  {
    slug: 'gym-tonic',
    name: 'Gym tonic',
    shortDescription: 'Gymnastique rythmée et énergique.',
    description:
      'Cours de gymnastique rythmé, idéal pour entretenir forme et vitalité. La gym tonic travaille le cardio, la coordination et le renforcement dans une ambiance enjouée.',
    level: 'Intermédiaire',
    audience: 'Adulte & Senior',
    icon: 'Zap',
    color: 'yellow',
    img:"/images/Gym_tonic.jpg",
    animateur : 'Marie'
  },
  {
    slug: 'marche-nordique',
    name: 'Marche nordique',
    shortDescription: 'Marche sportive avec bâtons en pleine nature.',
    description:
      'La marche nordique sollicite 90 % des muscles du corps grâce à l\'utilisation des bâtons. En pleine nature, elle améliore l\'endurance, renforce le haut du corps et libère le stress.',
    level: 'Tous niveaux',
    audience: 'Adulte & Senior',
    icon: 'Footprints',
    color: 'green',
    animateur : 'Céline',
    img:"/images/Marche_nordique.jpg"
  },
  {
    slug: 'pilates',
    name: 'Pilates',
    shortDescription: 'Renforcement profond et alignement postural.',
    description:
      'Méthode Pilates axée sur le gainage, le contrôle postural et la respiration. Le travail des muscles profonds améliore la posture, soulage le dos et affine la silhouette.',
    level: 'Tous niveaux',
    audience: 'Adulte & Senior',
    icon: 'Activity',
    color: 'purple',
    img:"/images/PilatesF.jpg",
    animateur : 'Lyana ou Roland'
  },
  
  {
    slug: 'stretchmouv',
    name: 'Strechmouv',
    shortDescription: 'Étirements fluides et mobilité articulaire.',
    description:
      'Méthode d\'étirements dynamiques et fluides qui libère les tensions, améliore la mobilité et favorise la récupération. Une parenthèse de bien-être pour le corps.',
    level: 'Tous niveaux',
    audience: 'Adulte & Senior',
    icon: 'Waves',
    color: 'green',
    img:"/images/Strechmouv.jpg",
    animateur : 'Lyana',
  },
  
  {
    slug: 'yin-yoga-fascia',
    name: 'Yin yoga / Fascia',
    shortDescription: 'Étirements profonds et libération des fascias.',
    description:
      'Cette séance est la combinaison de 2 pratiques. Pratique lente où les postures sont maintenues plusieurs minutes pour relâcher les fascias et les tensions profondes. Le yin yoga apaise le système nerveux , renforce ligaments et articulations et améliore la souplesse. La seconde pratique est une succession de mouvements lents au sol permettant une meilleure mobilité pour les fascias ...gage d\'une amélioration des tissus et d\'une détente profonde.',
    level: 'Tous niveaux',
    audience: 'Adulte & Senior',
    icon: 'Moon',
    color: 'purple',
    img:"/images/Yin_yoga_fascia.jpg",
    animateur : 'Roland',
  },
  {
    slug: 'yoga',
    name: 'Yoga',
    shortDescription: 'Postures, respiration et relaxation.',
    description:
      'C \'est un yoga traditionnel qui allie postures, enchaînements posturaux et respiration. Il est adapté à chaque personne que ce soit au niveau des facilitations ou des intensifications. Il permet de développer la souplesse du corps, la musculature profonde, le contrôle du souffle, la concentration, la confiance et la maîtrise de soi. Sa pratique permet d\'éliminer les tensions physiques et l\'accumulation de stress, il est donc orienté vers une recherche de mieux-être. Chaque séance se termine par un temps de relaxation, de pranayama (respirations) et-ou d\'assise méditative.',
    level: 'Tous niveaux',
    audience: 'Adulte & Senior',
    icon: 'Flower2',
    color: 'purple',
    img:"/images/Yoga.jpg",
    animateur : 'Monique',
  },
  {
    slug: 'zumba',
    name: 'Zumba',
    shortDescription: 'Danse fitness festive sur rythmes latinos.',
    description:
      'Cours de danse fitness  sur des rythmes latinos et internationaux. La zumba fait travailler le cardio tout en s\'amusant - la transpiration sans s\'en rendre compte, dans une ambiance festive.',
    level: 'Tous niveaux',
    audience: 'Adulte & Senior',
    icon: 'Music',
    color: 'yellow',
    img:"/images/ZumbaF.jpg",
    animateur : 'Axelle'
  }

];

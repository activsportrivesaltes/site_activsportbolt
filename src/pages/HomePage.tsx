import { ArrowRight, Calendar, Users, Heart, MapPin, Sparkles } from 'lucide-react';
import { activities } from '@/data/activities';
import { news } from '@/data/news';

const stats = [
  { value: '240', label: 'Adhérents', icon: Users },
  { value: '45+', label: "Années d'existence", icon: Calendar },
  { value: '13', label: 'Activités proposées', icon: Sparkles },
  { value: '100%', label: 'Sans compétition', icon: Heart },
];

const colorClasses: Record<string, { bg: string; text: string }> = {
  yellow: { bg: 'bg-brand-yellow-100', text: 'text-brand-yellow-700' },
  green: { bg: 'bg-brand-green-100', text: 'text-brand-green-700' },
  purple: { bg: 'bg-brand-purple-100', text: 'text-brand-purple-700' },
};

export default function HomePage() {
  const featured = activities.slice(0, 6);
  const latestNews = news.slice(0, 3);

  return (
    <div>
      
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
  {/* Dégradé décoratif vert-violet très léger en arrière-plan */}
  <div className="absolute inset-0 bg-gradient-to-br from-brand-green-50/60 via-white to-brand-purple-50/50 pointer-events-none" />
  <div className="absolute right-0 top-0 h-[360px] w-[360px] rounded-full bg-brand-purple-100/40 blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
  <div className="absolute left-0 bottom-0 h-48 w-48 rounded-full bg-brand-green-100/50 blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

  {/* Réduction du padding vertical : py-10 lg:py-16 au lieu de py-20 lg:py-28 */}
  <div className="container-page relative grid items-center gap-8 py-10 lg:grid-cols-2 lg:py-16">
    {/* Colonne texte */}
    <div className="animate-fade-up">
      {/* Réduction de la marge haute (mt-2 au lieu de mt-5) */}
      <h1 className="mt-2 font-heading text-3xl font-bold leading-[1.15] tracking-tight text-gray-900 sm:text-4xl lg:text-[2.8rem]">
        <span className="text-brand-green-500">Bougez, respirez,</span><br />
        <span className="text-brand-yellow-400">&emsp;&nbsp;vivez sport</span><br />
        <span className="text-purple-800">&emsp;&emsp;&emsp;à votre rythme.</span>
      </h1>

      {/* Réduction de la marge haute (mt-4 au lieu de mt-6) */}
      <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-500 sm:text-lg">
        Anciennement Gymnastique Volontaire Rivesaltes,{' '}<br />
        <strong className="font-semibold text-gray-700">
          <span className="text-green-600">Activ'</span>{' '}
          <span className="text-yellow-500">Sport</span>{' '}
          <span className="text-purple-600">Rivesaltes</span>
        </strong> réunit adultes et seniors autour d'activités douces et dynamiques, dans une ambiance chaleureuse,{' '}
<<<<<<< HEAD
         sans esprit de compétition.
=======
        sans esprit de compétition.
>>>>>>> fd8cfc8dceff2ab9805bc2029c115d96cd0b55f2
      </p>

      {/* Réduction de la marge haute (mt-6 au lieu de mt-8) */}
      <div className="mt-6 flex flex-wrap gap-3">
<<<<<<< HEAD
        <a href="#/inscription" className="btn btn-primary">
          Rejoindre le club
          <ArrowRight className="h-4 w-4" />
        </a>
        <a href="#/activites" className="btn btn-outline">
=======
        <a
          href="#/inscription"
          className="inline-flex items-center gap-2 rounded-full bg-brand-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-brand-green-700 hover:shadow-md"
        >
          Rejoindre le club
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="#/activites"
          className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:border-gray-400"
        >
>>>>>>> fd8cfc8dceff2ab9805bc2029c115d96cd0b55f2
          Voir les cours
        </a>
      </div>
    </div>

    {/* Colonne logo */}
    <div className="flex justify-center animate-fade-in lg:justify-end">
      <div className="relative">
        {/* Halo décoratif adapté */}
        <div className="absolute inset-0 scale-110 rounded-3xl bg-gradient-to-br from-brand-green-100/70 via-brand-purple-100/40 to-brand-yellow-100/50 blur-2xl" />
        {/* Légère réduction du padding et de la taille de l'image (h-48 w-48 sm:h-56 sm:w-56) */}
        <div className="relative rounded-3xl bg-white p-6 shadow-[0_8px_48px_rgba(0,0,0,0.10)] ring-1 ring-gray-100 sm:p-8">
          <img
            src="/images/Logo_ActivSportRiv.jpg"
            alt="Logo Activ' Sport Rivesaltes"
            className="h-48 w-48 object-contain sm:h-56 sm:w-56"
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Présentation courte */}
      <section className="container-page py-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Bienvenue au club</span>
            <h2 className="section-title mt-2">Un club pour bouger en toute sérénité</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
<<<<<<< HEAD
              Le club est devenu{" "}
=======
              Anciennement Gymnastique Volontaire Rivesaltes, le club est devenu{" "}
>>>>>>> fd8cfc8dceff2ab9805bc2029c115d96cd0b55f2
  <span className="text-green-600 font-semibold">Activ'</span>{" "}
  <span className="text-yellow-500 font-semibold">Sport</span>{" "}
  <span className="text-purple-600 font-semibold">Rivesaltes </span>

               pour affirmer sa vocation : proposer à toutes et à tous, quel que soit l'âge ou le niveau,
              une activité physique de bien-être. Nos animateurs diplômés encadrent chaque cours avec
              attention, dans le respect des capacités de chacun.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Ambiance conviviale et bienveillante',
                'Cours accessibles aux débutants comme aux pratiquants réguliers',
                'Encadrement par des animateurs diplômés',
                'Affilié à la Fédération Française du Sport Vitalité',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green-100 text-brand-green-600">
                    <Heart className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#/le-club" className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-purple-700 hover:text-brand-purple-900">
              En savoir plus sur le club
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
         <div className="grid grid-cols-2 gap-4 items-center">
  <img
    src="https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=500"
    alt="Séance de Pilates au sol"
    className="h-48 w-full rounded-2xl object-cover shadow-soft sm:h-64"
  />
  <img
    src="/images/Photo_Rivesaltes.jpg"
    alt="Sortie marche nordique en nature"
    className="h-48 w-full rounded-2xl object-cover shadow-soft sm:h-64"
  />
</div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="bg-brand-purple-50 py-16">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="card p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple-100 text-brand-purple-700">
                  <s.icon className="h-6 w-6" />
                </div>
                <p className="mt-4 font-heading text-3xl font-bold text-brand-purple-800">{s.value}</p>
                <p className="mt-1 text-sm text-gray-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aperçu activités */}
      <section className="container-page py-10 sm:py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="eyebrow">Nos activités</span>
            <h2 className="section-title mt-2">Une activité pour chaque envie</h2>
          </div>
          <a href="#/activites" className="hidden shrink-0 items-center gap-2 font-semibold text-brand-purple-700 hover:text-brand-purple-900 sm:inline-flex">
            Tout voir <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((a) => {
            const c = colorClasses[a.color];
            return (
            <a key={a.slug} href={`#/activites/${a.slug}`} className="card group p-6 hover:-translate-y-1 hover:shadow-card">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${c.bg} ${c.text}`}>
                <span className="font-heading text-lg font-bold">{a.name.charAt(0)}</span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-brand-purple-900">{a.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{a.shortDescription}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-purple-700 group-hover:text-brand-purple-900">
                Découvrir <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            );
          })}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <a href="#/activites" className="btn btn-outline">
            Voir toutes les activités
          </a>
        </div>
      </section>

      {/* Dernières actualités */}
      <section className="bg-brand-green-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Actualités</span>
              <h2 className="section-title mt-2">Les dernières nouvelles du club</h2>
            </div>
            <a href="#/actualites" className="hidden shrink-0 items-center gap-2 font-semibold text-brand-purple-700 hover:text-brand-purple-900 sm:inline-flex">
              Toutes les actus <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {latestNews.map((n) => (
              <a key={n.id} href="#/actualites" className="card group overflow-hidden hover:-translate-y-1 hover:shadow-card">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={n.image}
                    alt={n.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="rounded-full bg-brand-yellow-100 px-2.5 py-0.5 font-semibold text-brand-yellow-800">
                      {n.category}
                    </span>
                    <span className="text-gray-500">
                      {new Date(n.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                  </div>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-brand-purple-900">{n.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">{n.excerpt}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-10 sm:py-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-purple-700 to-brand-purple-900 px-6 py-14 text-center text-white sm:px-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-yellow-400/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-brand-green-400/20 blur-3xl" />
          <div className="relative">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">Prêt à rejoindre l'aventure ?</h2>
            <p className="mx-auto mt-4 max-w-xl text-brand-purple-100">
              L'inscription est ouverte à toutes et à tous, débutants ou confirmés. Venez essayer un cours gratuitement.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#/inscription" className="btn btn-secondary">
                S'inscrire au club
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#/tarifs" className="btn btn-outline border-white/30 text-white hover:bg-white/10">
                Voir les tarifs
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { news } from '@/data/news';

export default function NewsPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = news.find((n) => n.id === selectedId);

  if (selected) {
    return (
      <div>
        <PageHero eyebrow="Actualités" title={selected.title} subtitle={selected.excerpt} />
        <section className="container-page py-10 sm:py-12">
          <button
            onClick={() => setSelectedId(null)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-purple-700 hover:text-brand-purple-900"
          >
            <ArrowLeft className="h-4 w-4" /> Retour aux actualités
          </button>
          <div className="mt-8 overflow-hidden rounded-3xl shadow-card">
            <img src={selected.image} alt={selected.title} className="aspect-[16/9] w-full object-cover" />
          </div>
          <div className="mt-6 flex items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-yellow-100 px-3 py-1 font-semibold text-brand-yellow-800">
              <Tag className="h-3.5 w-3.5" /> {selected.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-gray-500">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(selected.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>
          <div className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
            {selected.content}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <PageHero
        eyebrow="Actualités & Agenda"
        title="Les actualités du club"
        subtitle="Événements, sorties, infos pratiques : suivez la vie de l'association."
      />
      <section className="container-page py-10 sm:py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {news.map((n) => (
            <article key={n.id} className="card group cursor-pointer overflow-hidden hover:-translate-y-1 hover:shadow-card" onClick={() => setSelectedId(n.id)}>
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={n.image}
                  alt={n.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-brand-yellow-100 px-2.5 py-0.5 font-semibold text-brand-yellow-800">{n.category}</span>
                  <span className="text-gray-500">
                    {new Date(n.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-xl font-semibold text-brand-purple-900">{n.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">{n.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-purple-700 group-hover:text-brand-purple-900">
                  Lire la suite
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

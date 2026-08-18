import { useState } from 'react';
import { X } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { gallery } from '@/data/gallery';

export default function GalleryPage() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = gallery.find((g) => g.id === activeId);

  return (
    <div>
      <PageHero
        eyebrow="Galerie"
        title="Le club en images"
        subtitle="Quelques instantanés de nos cours, sorties et événements. Les photos seront prochainement enrichies avec les clichés du club."
      />

      <section className="container-page py-10 sm:py-12">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {gallery.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className="group relative block w-full overflow-hidden rounded-2xl shadow-soft"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                <p className="p-4 text-left text-sm font-medium text-white">{item.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 animate-fade-in"
          onClick={() => setActiveId(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
        >
          <button
            type="button"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setActiveId(null)}
            aria-label="Fermer"
          >
            <X className="h-6 w-6" />
          </button>
          <figure className="max-h-[85vh] max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.alt} className="max-h-[75vh] w-full rounded-2xl object-contain" />
            <figcaption className="mt-3 text-center text-sm text-white/90">
              {active.caption} — <span className="text-white/60">{active.category}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}

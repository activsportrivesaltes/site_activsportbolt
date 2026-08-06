import type { ReactNode } from 'react';

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-purple-50 via-white to-brand-green-50">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-yellow-200/50 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-brand-purple-200/40 blur-3xl" />
      <div className="container-page relative py-10 sm:py-12">
        <div className="max-w-3xl animate-fade-up">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-brand-purple-900 sm:text-5xl">
            {title}
          </h1>
          {subtitle && <p className="mt-4 text-lg leading-relaxed text-gray-600">{subtitle}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}

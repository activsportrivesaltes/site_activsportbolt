import { useEffect, useState } from 'react';

// Routeur minimal basé sur le hash de l'URL (ex: #/le-club).
// Suffisant pour un site vitrine sans dépendance externe.
export function useHashRoute(): string {
  const [path, setPath] = useState(() => normalize(window.location.hash));

  useEffect(() => {
    const onChange = () => {
      setPath(normalize(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return path;
}

function normalize(hash: string): string {
  if (!hash || hash === '#') return '/';
  return hash.replace(/^#/, '');
}

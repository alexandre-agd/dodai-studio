
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si on n'a pas de hash (#), on scroll en haut
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // Si on a un hash, on laisse le comportement natif ou on gère le scroll vers l'élément
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

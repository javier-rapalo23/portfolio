import { useEffect, useState } from 'react';

/**
 * Devuelve el id de la sección que ocupa la banda central del viewport.
 * Se usa para marcar el enlace activo en la navegación.
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  const key = ids.join('|');

  useEffect(() => {
    const elements = key
      .split('|')
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) setActive(visible[0].target.id);
      },
      // Banda estrecha en el centro de la pantalla: la sección activa es
      // la que el lector tiene realmente delante, no la que asoma por el borde.
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.2, 0.5, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return active;
}

/** true en cuanto la página se ha desplazado más de `offset` píxeles. */
export function useScrolled(offset = 24) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);

  return scrolled;
}

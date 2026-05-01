'use client';

import { useEffect } from 'react';

export default function ScrollSpy() {
  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>(
      '.menu a[data-nav]',
    );
    const sections = [...links]
      .map((a) => document.getElementById(a.dataset.nav ?? ''))
      .filter((el): el is HTMLElement => el !== null);

    if (!sections.length) return;

    const setActive = (id: string) => {
      links.forEach((a) =>
        a.classList.toggle('is-active', a.dataset.nav === id),
      );
    };

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return null;
}

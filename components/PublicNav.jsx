'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function PublicNav({ initialOnLight = false, darkSectionIds = ['top', 'cta'] }) {
  const [scrolled, setScrolled] = useState(false);
  const [onLight, setOnLight] = useState(initialOnLight);

  useEffect(() => {
    function updateNav() {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 24);

      const viewportMid = scrollY + 40;
      let overDark = false;
      for (const id of darkSectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (viewportMid >= top && viewportMid < bottom) {
          overDark = true;
          break;
        }
      }
      const proof = document.querySelector('.proof');
      if (proof) {
        const t = proof.offsetTop;
        const b = t + proof.offsetHeight;
        if (viewportMid >= t && viewportMid < b) overDark = true;
      }
      setOnLight(!overDark);
    }
    updateNav();
    window.addEventListener('scroll', updateNav, { passive: true });
    window.addEventListener('resize', updateNav);
    return () => {
      window.removeEventListener('scroll', updateNav);
      window.removeEventListener('resize', updateNav);
    };
  }, [darkSectionIds]);

  const cls = `public-nav${scrolled ? ' scrolled' : ''}${onLight ? ' on-light' : ''}`;

  return (
    <nav className={cls}>
      <div className="wrap">
        <Link href="/" className="public-brand">
          <span className="mark"></span>
          <span>SFLC</span>
        </Link>
        <div className="public-nav-links">
          <a href="/#features">Platform</a>
          <a href="/#how">How it works</a>
          <a href="/#pricing">Pricing</a>
          <Link href="/docs">Docs</Link>
          <Link href="/login" className="signin">Sign in</Link>
          <Link href="/login" className="cta">Request access →</Link>
        </div>
      </div>
    </nav>
  );
}

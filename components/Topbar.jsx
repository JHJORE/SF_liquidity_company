'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth, ROLE_ACCESS } from '@/lib/auth-context';

const NAV = [
  { label: 'Markets', href: '/', roles: ['investor', 'issuer', 'operator'] },
  { label: 'Issuer', href: '/market/nvr', roles: ['investor', 'issuer', 'operator'] },
  { label: 'Derivatives', href: '/derivatives', roles: ['investor', 'operator'] },
  { label: 'Portfolio', href: '/portfolio', roles: ['investor'] },
  { label: 'Orders', href: '/orders', roles: ['investor', 'issuer'] },
  { label: 'Issuer Console', href: '/admin/issuer', roles: ['issuer', 'operator'] },
];

export default function Topbar() {
  const { state, setRole, signOut } = useAuth();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function onClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const visibleNav = NAV.filter((n) => n.roles.includes(state.role));

  return (
    <header className="topbar">
      <div className="hstack" style={{ height: '100%' }}>
        <div className="brand">
          <div className="brand-mark">
            <img src="/brand-logo.png" alt="SFLC" />
          </div>
          <div className="brand-txt">
            <div className="wm">San Francisco Liquidity Co.</div>
            <div className="sub">Private Market Infrastructure</div>
          </div>
        </div>
        <nav className="nav">
          {visibleNav.map((n) => (
            <Link key={n.href} href={n.href} className={isActive(n.href) ? 'active' : ''} style={{ display: 'inline-block', height: '100%', lineHeight: '60px' }}>
              <button className={isActive(n.href) ? 'active' : ''}>{n.label}</button>
            </Link>
          ))}
        </nav>
      </div>
      <div></div>
      <div className="topbar-right">
        <div className="search">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" /></svg>
          <input placeholder="Search issuers, symbols, investors" />
          <kbd>⌘K</kbd>
        </div>
        <button className="icon-btn" title="Notifications" aria-label="Notifications">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
        </button>
        <button className="icon-btn" title="Settings" aria-label="Settings">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
        </button>
        <div className={`user-menu ${menuOpen ? 'open' : ''}`} ref={menuRef}>
          <button className="icon-btn" onClick={(e) => { e.stopPropagation(); setMenuOpen((v) => !v); }} style={{ width: 'auto', padding: '0 6px', gap: '8px', display: 'flex', alignItems: 'center' }}>
            <div className="avatar">AM</div>
            <span className="compliance-badge pass"><span className="dot"></span>KYC</span>
          </button>
          <div className="user-menu-panel">
            <div className="user-menu-section">
              <div className="user-menu-label">Account</div>
              <div style={{ fontSize: '13px', color: 'var(--white)' }}>Alexandra Morrow</div>
              <div style={{ fontSize: '11px', color: 'var(--silver-3)', fontFamily: 'var(--mono)', marginTop: '2px' }}>alexandra.morrow@pantera.capital</div>
            </div>
            <div className="user-menu-section">
              <div className="user-menu-label">Role · Preview as</div>
              <div className="role-switcher">
                {['investor', 'issuer', 'operator'].map((r) => (
                  <button key={r} className={state.role === r ? 'on' : ''} onClick={() => setRole(r)}>
                    {r[0].toUpperCase() + r.slice(1)}
                  </button>
                ))}
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '9.5px', color: 'var(--silver-3)', letterSpacing: '0.08em', marginTop: '8px' }}>Qualified · $10M+ AUM · US</div>
            </div>
            <div className="user-menu-section">
              <div className="user-menu-label">Compliance</div>
              <div className="user-menu-row"><span className="k">KYC</span><span className="v pass">Approved · expires 2027</span></div>
              <div className="user-menu-row"><span className="k">Accreditation</span><span className="v pass">Qualified · expires 2026</span></div>
              <div className="user-menu-row"><span className="k">Jurisdiction</span><span className="v">United States</span></div>
              <div className="user-menu-row"><span className="k">Sanctions</span><span className="v pass">Cleared · 62s ago</span></div>
            </div>
            <button className="user-menu-action">Settings</button>
            <button className="user-menu-action">Wallets</button>
            <button className="user-menu-action">Audit trail</button>
            <button className="user-menu-action danger" onClick={signOut}>Sign out</button>
          </div>
        </div>
      </div>
    </header>
  );
}

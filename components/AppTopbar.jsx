'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';

const TITLES = {
  '/dashboard': 'Dashboard',
  '/portfolio': 'Portfolio',
  '/derivatives': 'Derivatives',
  '/orders': 'Orders',
  '/admin/issuer': 'Issuer Console',
  '/holder': 'Holder Portal',
};

function pad(n) {
  return String(n).padStart(2, '0');
}

export default function AppTopbar() {
  const pathname = usePathname();
  const { state, setRole, signOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [utc, setUtc] = useState('--:--:--');
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

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setUtc(`${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  let title = TITLES[pathname || ''];
  if (!title && pathname?.startsWith('/market/')) {
    const co = pathname.split('/')[2] || '';
    title = `Companies / ${co.toUpperCase()}`;
  }
  if (!title) title = 'SFLC';

  return (
    <header className="app-topbar">
      <div className="app-breadcrumb">
        <span>Helion Labs</span>
        <span className="sep">/</span>
        <span className="here">{title}</span>
      </div>

      <div className="app-market-strip">
        <span className="ms-cell"><span className="dot ext"></span>EXTERNAL · OPEN</span>
        <span className="ms-cell"><span className="dot int"></span>INTERNAL · OPEN</span>
        <span className="ms-cell ms-clock">{utc} UTC</span>
        <span className="ms-cell">USDC 1.0001</span>
      </div>

      <div className="app-topbar-tools">
        <button className="app-icon-btn" title="Search" aria-label="Search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" /></svg>
        </button>
        <button className="app-icon-btn" title="Notifications" aria-label="Notifications">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
        </button>
        <div className={`app-user-menu ${menuOpen ? 'open' : ''}`} ref={menuRef}>
          <button
            className="app-user-trigger"
            onClick={(e) => { e.stopPropagation(); setMenuOpen((v) => !v); }}
          >
            <div className="app-user-avatar">AM</div>
            <span className="kyc-badge"><span className="dot"></span>KYC</span>
          </button>
          <div className="app-user-panel">
            <div className="app-user-panel-section">
              <div className="app-user-panel-label">Account</div>
              <div className="who">Alexandra Morrow</div>
              <div className="sub">alexandra.morrow@pantera.capital</div>
            </div>
            <div className="app-user-panel-section">
              <div className="app-user-panel-label">Role · Preview as</div>
              <div className="app-role-switcher">
                {['investor', 'issuer', 'operator'].map((r) => (
                  <button
                    key={r}
                    className={state.role === r ? 'on' : ''}
                    onClick={() => setRole(r)}
                  >
                    {r[0].toUpperCase() + r.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="app-user-panel-section">
              <div className="app-user-panel-label">Compliance</div>
              <div className="app-user-row"><span className="k">KYC</span><span className="v pass">Approved · 2027</span></div>
              <div className="app-user-row"><span className="k">Accreditation</span><span className="v pass">Qualified · 2026</span></div>
              <div className="app-user-row"><span className="k">Jurisdiction</span><span className="v">United States</span></div>
            </div>
            <button className="app-user-action">Settings</button>
            <button className="app-user-action">Audit trail</button>
            <button
              className="app-user-action danger"
              onClick={() => { setMenuOpen(false); signOut(); }}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

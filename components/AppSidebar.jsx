'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';

const GROUPS = [
  {
    label: 'Markets',
    roles: ['investor', 'issuer', 'operator'],
    items: [
      { key: 'dashboard', label: 'Dashboard', href: '/dashboard' },
      { key: 'companies', label: 'Companies', href: '/market/cas' },
    ],
  },
  {
    label: 'Trading',
    roles: ['investor', 'operator'],
    items: [
      { key: 'derivatives', label: 'Derivatives', href: '/derivatives' },
      { key: 'orders', label: 'Orders', href: '/orders', roles: ['investor', 'issuer'] },
      { key: 'portfolio', label: 'Portfolio', href: '/portfolio', roles: ['investor'] },
    ],
  },
  {
    label: 'Issuer',
    roles: ['issuer', 'operator'],
    items: [
      { key: 'issuer-console', label: 'Issuer Console', href: '/admin/issuer' },
    ],
  },
  {
    label: 'Account',
    roles: ['investor', 'issuer', 'operator'],
    items: [
      { key: 'holder', label: 'Holder portal', href: '/holder' },
    ],
  },
];

function Icon({ name }) {
  const stroke = 'currentColor';
  const props = { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none', stroke, strokeWidth: 1.5 };
  switch (name) {
    case 'dashboard':
      return <svg {...props} className="ico"><rect x="2" y="2" width="5.5" height="5.5" rx="0.5" /><rect x="8.5" y="2" width="5.5" height="5.5" rx="0.5" /><rect x="2" y="8.5" width="5.5" height="5.5" rx="0.5" /><rect x="8.5" y="8.5" width="5.5" height="5.5" rx="0.5" /></svg>;
    case 'companies':
      return <svg {...props} className="ico"><rect x="2.5" y="3" width="11" height="10" rx="1" /><path d="M5.5 6.5h5M5.5 9h5M5.5 11.5h3" /></svg>;
    case 'derivatives':
      return <svg {...props} className="ico"><path d="M2 12l3-5 3 3 5-7" /><path d="M11 3h2v2" /></svg>;
    case 'orders':
      return <svg {...props} className="ico"><path d="M3 6h9l-2-2M13 10H4l2 2" /></svg>;
    case 'portfolio':
      return <svg {...props} className="ico"><path d="M8 1.5L2 4.5v7L8 14.5l6-3v-7z" /><path d="M2 4.5L8 7.5l6-3M8 7.5v7" /></svg>;
    case 'issuer-console':
      return <svg {...props} className="ico"><circle cx="8" cy="6" r="2.5" /><path d="M3.5 14c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" /></svg>;
    case 'holder':
      return <svg {...props} className="ico"><circle cx="8" cy="5.5" r="2.5" /><path d="M3 14c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5" /></svg>;
    default:
      return null;
  }
}

export default function AppSidebar() {
  const { state, signOut } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href) => {
    if (href === '/dashboard') return pathname === '/dashboard';
    if (href === '/market/cas') return pathname?.startsWith('/market');
    return pathname?.startsWith(href);
  };

  const visibleGroups = GROUPS.map((g) => ({
    ...g,
    items: g.items.filter((it) => !it.roles || it.roles.includes(state.role)),
  })).filter((g) => g.roles.includes(state.role) && g.items.length > 0);

  const handleSignOut = () => {
    signOut();
    router.push('/');
  };

  return (
    <aside className="app-sidebar">
      <div className="app-brand">
        <div className="mark"></div>
        <div className="name">SFLC</div>
        <div className="version">v2.4</div>
      </div>

      <div className="app-org">
        <div className="app-org-avatar">HL</div>
        <div className="app-org-meta">
          <div className="name">Helion Labs, Inc.</div>
          <div className="role">{state.role.toUpperCase()}</div>
        </div>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'rgba(255,255,255,0.35)' }}>
          <path d="M3 5l3 3 3-3" />
        </svg>
      </div>

      <nav className="app-nav">
        {visibleGroups.map((g) => (
          <div className="app-nav-group" key={g.label}>
            <div className="app-nav-label">{g.label}</div>
            {g.items.map((it) => (
              <Link
                key={it.key}
                href={it.href}
                className={`app-nav-item${isActive(it.href) ? ' active' : ''}`}
              >
                <Icon name={it.key} />
                {it.label}
              </Link>
            ))}
          </div>
        ))}
      </nav>

      <div className="app-sidebar-foot">
        <div className="app-avatar">AM</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="who">Alexandra Morrow</div>
          <div className="who-role">{state.role.toUpperCase()}</div>
        </div>
        <button
          className="app-signout"
          onClick={handleSignOut}
          title="Sign out"
          aria-label="Sign out"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9.5 3.5H4a1 1 0 00-1 1v7a1 1 0 001 1h5.5M9.5 8h5M12 5.5L14.5 8 12 10.5" />
          </svg>
        </button>
      </div>
    </aside>
  );
}

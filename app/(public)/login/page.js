'use client';
import { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';

function LoginPageInner() {
  const { state, setField, submit, signIn } = useAuth();
  const router = useRouter();
  const params = useSearchParams();
  const dest = params.get('from') || '/dashboard';
  const [tab, setTab] = useState('email');

  const onEmailSubmit = (e) =>
    submit(e, () => router.push(dest));

  const quickEnter = () => {
    signIn();
    router.push(dest);
  };

  return (
    <div className="login-shell">
      <div className="login-left">
        <div className="login-brand">
          <span className="mark"></span>
          <Link href="/">SFLC</Link>
        </div>
        <div className="login-quote">
          <span className="eyebrow">EQUITY · PROGRAMMABLE</span>
          <h2>
            The cap table is no longer<br />
            <em>a back-office workflow.</em>
          </h2>
          <p>
            SFLC turns every share into a programmable instrument. Issue, manage, transfer, and
            settle equity — all from one place, in seconds.
          </p>
        </div>
        <div className="login-foot">
          <div>© 2026 SAN FRANCISCO LIQUIDITY COMPANY · V2.4.1</div>
          <div className="status">ALL SYSTEMS OPERATIONAL</div>
        </div>
      </div>

      <div className="login-right">
        <Link href="/" className="login-back">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 3l-5 5 5 5" />
          </svg>
          Back to home
        </Link>

        <div className="login-card">
          <h1>Sign in</h1>
          <p className="sub">
            New to SFLC? <a href="#">Request access →</a>
          </p>

          <div className="login-tabs">
            <div
              className={`login-tab ${tab === 'email' ? 'active' : ''}`}
              onClick={() => setTab('email')}
            >
              Email
            </div>
            <div
              className={`login-tab ${tab === 'wallet' ? 'active' : ''}`}
              onClick={() => setTab('wallet')}
            >
              Wallet
            </div>
          </div>

          {tab === 'email' ? (
            <form onSubmit={onEmailSubmit}>
              <div className="login-field">
                <label>Work email</label>
                <input
                  type="email"
                  placeholder="you@helion-labs.com"
                  value={state.email}
                  onChange={(e) => setField('email', e.target.value)}
                  required
                />
              </div>
              <div className="login-field">
                <div className="login-field-aside">
                  <label>Password</label>
                  <a href="#" className="help">Forgot?</a>
                </div>
                <input
                  type="password"
                  placeholder="••••••••••••"
                  value={state.password}
                  onChange={(e) => setField('password', e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="login-submit" disabled={state.submitting}>
                {state.submitting ? 'Signing in…' : (<>Sign in <span className="arr">→</span></>)}
              </button>
            </form>
          ) : (
            <div>
              <button className="wallet-btn" onClick={quickEnter}>
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 6.5A2.5 2.5 0 015.5 4h13A2.5 2.5 0 0121 6.5v11a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 17.5v-11z" />
                  <path d="M21 10h-3.5a1.5 1.5 0 000 3H21" />
                </svg>
                Continue with MetaMask
              </button>
              <button className="wallet-btn" onClick={quickEnter}>
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a13 13 0 010 18M12 3a13 13 0 000 18" />
                </svg>
                Continue with WalletConnect
              </button>
              <button className="wallet-btn" onClick={quickEnter}>
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="6" width="18" height="13" rx="2" />
                  <path d="M3 10h18" />
                </svg>
                Continue with Ledger
              </button>
              <button className="wallet-btn" onClick={quickEnter}>
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                  <path d="M8 12h8M12 8v8" />
                </svg>
                Continue with Coinbase Smart Wallet
              </button>
            </div>
          )}

          <div className="login-divider">OR DEMO ACCESS</div>

          <div className="demo-accounts">
            <h4>QUICK DEMO ACCESS</h4>
            <div className="row">
              <div className="who">
                <strong>Issuer · Helion Labs admin</strong>
                <span className="sub">RURU SAINI · ADMIN</span>
              </div>
              <button
                className="go"
                onClick={() => {
                  signIn();
                  router.push('/admin/issuer');
                }}
              >
                Enter →
              </button>
            </div>
            <div className="row">
              <div className="who">
                <strong>Holder · Helion Labs employee</strong>
                <span className="sub">J. OKONKWO · HOLDER</span>
              </div>
              <button
                className="go"
                onClick={() => {
                  signIn();
                  router.push('/holder');
                }}
              >
                Enter →
              </button>
            </div>
          </div>

          <p className="login-legal">
            By signing in you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
            SFLC is SOC 2 Type II certified.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginPageInner />
    </Suspense>
  );
}

'use client';
import { useAuth } from '@/lib/auth-context';

export default function AuthShell() {
  const { state, setField, submit } = useAuth();

  if (state.signedIn) return null;

  return (
    <div className="auth-shell">
      <div className="auth-left">
        <div className="auth-brand">
          <div className="auth-brand-mark"><img src="/brand-logo.png" alt="SFLC" /></div>
          <div className="auth-brand-txt">
            <div className="wm">San Francisco Liquidity Co.</div>
            <div className="sub">Private Market Infrastructure</div>
          </div>
        </div>

        <form className="auth-form" onSubmit={submit}>
          <div className="auth-eyebrow">Sign In · Member Access</div>
          <h1 className="auth-h">Welcome back.</h1>
          <p className="auth-sub">Sign in to access internal marks, external markets, and your derivatives book.</p>

          <div className="auth-field">
            <div className="lbl"><span>Email</span></div>
            <div className={`auth-input ${state.emailError ? 'error' : ''}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" /><path d="M3 7l9 6 9-6" /></svg>
              <input
                type="email"
                placeholder="name@firm.com"
                value={state.email}
                onChange={(e) => setField('email', e.target.value)}
              />
            </div>
            <div className={`auth-field-error ${state.emailError ? 'show' : ''}`}>{state.emailError || 'Please enter a valid email address'}</div>
          </div>

          <div className="auth-field">
            <div className="lbl"><span>Password</span><a href="#">Forgot?</a></div>
            <div className={`auth-input ${state.pwError ? 'error' : ''}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="5" y="11" width="14" height="10" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
              <input
                type="password"
                placeholder="••••••••••••"
                value={state.password}
                onChange={(e) => setField('password', e.target.value)}
              />
            </div>
            <div className={`auth-field-error ${state.pwError ? 'show' : ''}`}>{state.pwError || 'Password must be at least 12 characters'}</div>
          </div>

          <button type="submit" className={`auth-submit ${state.submitting ? 'submitting' : ''}`} disabled={state.submitting}>
            Continue →
          </button>

          <div className="auth-divider"><span>OR</span></div>

          <div className="auth-oauth">
            <button type="button">
              <svg width="14" height="14" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12.08c0-.7-.06-1.38-.18-2.04H12v3.85h5.64c-.24 1.3-.98 2.4-2.08 3.14v2.6h3.36c1.96-1.8 3.08-4.46 3.08-7.55z" /><path fill="currentColor" d="M12 22c2.8 0 5.14-.92 6.86-2.5l-3.36-2.6c-.94.62-2.12.98-3.5.98-2.68 0-4.96-1.82-5.78-4.26H2.74v2.68C4.44 19.66 7.96 22 12 22z" opacity="0.85" /><path fill="currentColor" d="M6.22 13.62A5.98 5.98 0 0 1 5.88 12c0-.56.1-1.1.26-1.62V7.7H2.74A9.98 9.98 0 0 0 2 12c0 1.62.4 3.14 1.1 4.5l3.12-2.88z" opacity="0.65" /><path fill="currentColor" d="M12 5.78c1.52 0 2.88.52 3.96 1.54l2.96-2.96C17.14 2.68 14.8 1.7 12 1.7 7.96 1.7 4.44 4.04 2.74 7.7l3.48 2.68C7.04 7.6 9.32 5.78 12 5.78z" opacity="0.5" /></svg>
              Google
            </button>
            <button type="button">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
              Apple
            </button>
            <button type="button">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="4" y="7" width="16" height="13" rx="1" /><path d="M8 7V5a4 4 0 0 1 8 0v2" /><circle cx="12" cy="14" r="1.5" fill="currentColor" /></svg>
              Passkey
            </button>
          </div>

          <button type="button" className="auth-wallet">
            <span className="l">
              <span className="ico" style={{ background: 'linear-gradient(135deg,#F4B8D0,#A8C8F7)', color: '#1A0B13' }}>◆</span>
              Connect Wallet
            </span>
            <span className="rt">METAMASK · WALLETCONNECT</span>
          </button>

          <div className="auth-request">New to SFLC? <a href="#">Request access →</a></div>
        </form>

        <div className="auth-foot">
          <span>SAN FRANCISCO · NEW YORK · LONDON</span>
          <span><a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">Disclosures</a></span>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-right-top">
          <span>Live Session · Q4 2026 · Day 46</span>
          <div className="auth-status-pills">
            <span className="auth-pill int"><span className="dot"></span>INTERNAL OPEN</span>
            <span className="auth-pill ext"><span className="dot"></span>EXTERNAL OPEN</span>
          </div>
        </div>

        <div className="auth-hero">
          <div className="auth-hero-eyebrow">The venture market, intermediated.</div>
          <h2>Two markets,<br />one knot. <span className="int">Private</span><br />meets <span className="ext">liquid</span>.</h2>
          <p>SFLC operates the infrastructure connecting venture-priced internal equity to a fast external market — with spot, perpetuals, and options on every listed issuer.</p>
        </div>

        <div className="auth-metrics">
          <div className="auth-metric">
            <div className="lbl">Issuers Listed</div>
            <div className="val">142</div>
            <div className="sub">+14 this quarter</div>
          </div>
          <div className="auth-metric">
            <div className="lbl">24H Spot</div>
            <div className="val">$42.18M</div>
            <div className="sub up" style={{ color: 'var(--up)' }}>+12.4%</div>
          </div>
          <div className="auth-metric">
            <div className="lbl">Open Interest</div>
            <div className="val">$284M</div>
            <div className="sub">Perps + Options</div>
          </div>
          <div className="auth-metric">
            <div className="lbl">Avg Latency</div>
            <div className="val">62ms</div>
            <div className="sub">External book</div>
          </div>
        </div>

        <div className="auth-live-strip">
          <div className="auth-live-strip-h"><span>LIVE · RECENT PRINTS</span><span style={{ color: 'var(--ext)' }}>EXTERNAL</span></div>
          <div className="auth-live-row"><span className="t">14:32:04</span><span className="n">Cascade AI · CAS</span><span className="px">$412.08</span><span className="sz">1,240</span><span className="tg tag buy">BUY</span></div>
          <div className="auth-live-row"><span className="t">14:31:58</span><span className="n">Nova Robotics · NVR-PERP</span><span className="px">$142.92</span><span className="sz">340</span><span className="tg tag sell">SHORT</span></div>
          <div className="auth-live-row"><span className="t">14:31:44</span><span className="n">Foundry Nuclear · FND</span><span className="px">$94.20</span><span className="sz">—</span><span className="tg tag round">ROUND</span></div>
          <div className="auth-live-row"><span className="t">14:31:30</span><span className="n">Obsidian Labs · OBS-C240</span><span className="px">$18.40</span><span className="sz">80</span><span className="tg tag buy">CALL</span></div>
          <div className="auth-live-row"><span className="t">14:31:18</span><span className="n">Helios Compute · HLO-PERP</span><span className="px">$86.14</span><span className="sz">820</span><span className="tg tag buy">LONG</span></div>
        </div>

        <div className="auth-right-foot">
          <span>SFLC · Regulated Private Market Operator</span>
          <span>Encrypted · SOC 2 · SSO Ready</span>
        </div>
      </div>
    </div>
  );
}

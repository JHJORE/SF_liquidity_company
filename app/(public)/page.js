'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import PublicNav from '@/components/PublicNav';
import PublicFooter from '@/components/PublicFooter';

export default function Landing() {
  const stepsRef = useRef(null);

  useEffect(() => {
    // Reveal on intersection
    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach((r) => io.observe(r));

    // Hero demo step animation
    const steps = stepsRef.current?.querySelectorAll('.demo-step');
    if (!steps || !steps.length) return;
    let cursor = -1;
    let timer;
    function tick() {
      cursor++;
      if (cursor > 4) {
        steps.forEach((s) => s.classList.remove('active', 'done'));
        cursor = -1;
        timer = setTimeout(tick, 900);
        return;
      }
      steps.forEach((s, i) => {
        s.classList.remove('active');
        if (i < cursor) s.classList.add('done');
        if (i === cursor) s.classList.add('active');
      });
      timer = setTimeout(tick, cursor === 3 ? 2000 : 900);
    }
    timer = setTimeout(tick, 600);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <PublicNav darkSectionIds={['top', 'cta']} />

      <section className="hero" id="top">
        <div className="wrap">
          <div>
            <div className="hero-eyebrow">
              <span className="eyebrow on-dark">SFLC · TOKENIZED EQUITY INFRASTRUCTURE</span>
            </div>
            <h1 className="h-display h1">
              Private equity,
              <em>operationally programmable.</em>
            </h1>
            <p className="hero-sub">
              SFLC is the tokenized equity management system for private companies. Smart-contract
              ownership records, automated compliance, and instant stablecoin settlement — in one
              platform that your cap table, transfer agent, and CFO can all use.
            </p>
            <div className="hero-actions">
              <Link href="/login" className="btn btn-primary-pub">
                Request access <span className="arr">→</span>
              </Link>
              <Link href="/dashboard" className="btn btn-ghost">Live product demo</Link>
            </div>
            <div className="hero-trust">
              <div className="hero-trust-label">Built for institutional compliance</div>
              <div className="hero-trust-row">
                <span>SEC-registered transfer agent</span>
                <span>SOC 2 Type II</span>
                <span>ATS-licensed venue</span>
                <span>ERC-3643</span>
              </div>
            </div>
          </div>
          <div>
            <div className="demo">
              <div className="demo-header">
                <div className="demo-title">Live transfer · TX #4087</div>
                <div className="demo-live"><span className="demo-dot"></span>SETTLING</div>
              </div>
              <div className="demo-row"><span className="k">From</span><span className="v">a.chen.eth</span></div>
              <div className="demo-row"><span className="k">To</span><span className="v">paradigm-fund.eth</span></div>
              <div className="demo-row"><span className="k">Asset</span><span className="v">HLN-CMN-A · 2,500</span></div>
              <div className="demo-row"><span className="k">Settles in</span><span className="v mint">USDC</span></div>
              <div className="demo-steps" ref={stepsRef}>
                <div className="demo-step">Initiate</div>
                <div className="demo-step">Pre-Clear</div>
                <div className="demo-step">Match</div>
                <div className="demo-step">Settle</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="wrap">
          <div className="features-head reveal">
            <span className="eyebrow">What&apos;s in the platform</span>
            <h2 className="h-display h2">Everything you need to issue, manage, and settle private equity.</h2>
            <p className="lede">
              Each module replaces a tool, a vendor, or a workflow you&apos;re currently running off
              spreadsheets and emails.
            </p>
          </div>
          <div className="features-grid reveal stagger">
            <div className="feature">
              <div className="feature-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" /><path d="M4 7l8 5 8-5M12 22V12" /></svg>
              </div>
              <h3>Tokenized cap table</h3>
              <p>Every share, option, RSU, and SAFE issued as a native token on a permissioned ledger. One source of truth.</p>
              <ul>
                <li>5+ token classes per issuer</li>
                <li>ERC-3643 compliant</li>
                <li>Real-time holder positions</li>
                <li>Cap-table-as-protocol API</li>
              </ul>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2L4 6v6c0 5 3.5 9.3 8 10 4.5-.7 8-5 8-10V6l-8-4z" /><path d="M9 12l2 2 4-4" /></svg>
              </div>
              <h3>Compliance engine</h3>
              <p>KYC, accreditation, ROFR, lockups, and Reg D/S/144 enforcement encoded into every token contract.</p>
              <ul>
                <li>Pre-cleared, not post-checked</li>
                <li>SEC-registered transfer agent</li>
                <li>Court-order key recovery</li>
                <li>Auditable rule history</li>
              </ul>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" /></svg>
              </div>
              <h3>Instant settlement</h3>
              <p>Atomic on-chain swap: shares out, USDC in, same block. No wires, no T+3, no broker queue.</p>
              <ul>
                <li>Pre-funded liquidity pools</li>
                <li>~1.4s avg settlement time</li>
                <li>24/7 secondary market</li>
                <li>Spread + fee transparency</li>
              </ul>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="8.5" cy="8" r="4" /><path d="M2 21c0-3.6 2.9-6.5 6.5-6.5S15 17.4 15 21M16 7a3 3 0 110 6M15 21c0-2.2 1.3-4.1 3.2-5" /></svg>
              </div>
              <h3>Holder portal</h3>
              <p>Employees and investors see their positions, vesting, and distributions — and can initiate transfers in seconds.</p>
              <ul>
                <li>Live vesting schedules</li>
                <li>Self-serve KYC refresh</li>
                <li>Distribution history</li>
                <li>Tax document export</li>
              </ul>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M8 12h8M12 8v8" /></svg>
              </div>
              <h3>Distributions &amp; dividends</h3>
              <p>Pro-rata payouts in USDC, computed on-chain and routed to every eligible holder in one transaction.</p>
              <ul>
                <li>Multi-sig board approval</li>
                <li>Auto pro-rata math</li>
                <li>1099-DIV generation</li>
                <li>Withholding by jurisdiction</li>
              </ul>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>
              </div>
              <h3>Audit &amp; reporting</h3>
              <p>Every state change cryptographically signed. Export-ready for SOC 2, SEC, and your auditors.</p>
              <ul>
                <li>Immutable event log</li>
                <li>SEC Form D auto-fill</li>
                <li>Board-ready dashboards</li>
                <li>409A snapshot support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="how" id="how">
        <div className="wrap">
          <div className="how-head reveal">
            <span className="eyebrow">How a transfer works</span>
            <h2 className="h-display h2">From request to settlement in four programmatic steps.</h2>
          </div>
          <div className="how-grid reveal stagger">
            <div className="step-card">
              <div className="num"><span className="circle">01</span> INITIATE</div>
              <h3>Request</h3>
              <p>Holder initiates a transfer from their wallet — full position, fraction, or block.</p>
            </div>
            <div className="step-card">
              <div className="num"><span className="circle">02</span> PRE-CLEAR</div>
              <h3>Pre-clear</h3>
              <p>Smart contract verifies KYC, accreditation, lockups, and ROFR rules in real time.</p>
            </div>
            <div className="step-card">
              <div className="num"><span className="circle">03</span> MATCH</div>
              <h3>Match</h3>
              <p>Counterparty accepts directly, or pre-funded liquidity pool fills at the mark.</p>
            </div>
            <div className="step-card">
              <div className="num"><span className="circle">04</span> SETTLE</div>
              <h3>Settle</h3>
              <p>Atomic swap: shares to buyer, USDC to seller, ledger updated — same block.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="proof">
        <div className="wrap">
          <div className="proof-head reveal">
            <span className="eyebrow on-dark">By the numbers</span>
            <h2 className="h-display h2" style={{ color: 'var(--white)' }}>What private equity infrastructure looks like when it actually runs in seconds.</h2>
          </div>
          <div className="proof-grid reveal stagger">
            <div className="proof-stat">
              <div className="l">SETTLEMENT</div>
              <div className="v">1.4<em>s</em></div>
              <div className="s">Average time from initiation to atomic settlement on the SFLC venue.</div>
            </div>
            <div className="proof-stat">
              <div className="l">VS LEGACY</div>
              <div className="v">~200,000<em>×</em></div>
              <div className="s">Faster than a T+3 wire — and that&apos;s before broker queue and reconciliation.</div>
            </div>
            <div className="proof-stat">
              <div className="l">COMPLIANCE</div>
              <div className="v">100<em>%</em></div>
              <div className="s">Of transfers pre-cleared on-chain. Zero post-trade exception queue.</div>
            </div>
            <div className="proof-stat">
              <div className="l">UPTIME</div>
              <div className="v">99.99<em>%</em></div>
              <div className="s">Multi-region, multi-validator. The cap table is live 24/7.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-tease" id="pricing">
        <div className="wrap">
          <div className="pricing-head reveal">
            <span className="eyebrow">Pricing</span>
            <h2 className="h-display h2">Free to onboard. Monetized on volume, not seats.</h2>
            <p className="lede">SFLC is free for issuers to set up. Pay only when equity actually moves.</p>
          </div>
          <div className="pricing-grid reveal stagger">
            <div className="plan">
              <div className="plan-tag">STARTER</div>
              <h3>Issuer</h3>
              <div className="plan-price">
                <strong>$500–2k</strong>
                <span>per month, per issuer</span>
              </div>
              <ul>
                <li>Tokenized cap table</li>
                <li>Up to 100 holders</li>
                <li>Compliance engine</li>
                <li>Transfer agent service</li>
                <li>Standard support</li>
              </ul>
              <Link href="/login" className="btn btn-ghost-light plan-btn">Start free trial</Link>
            </div>
            <div className="plan featured">
              <div className="plan-tag">SCALE <span className="popular">MOST CHOSEN</span></div>
              <h3>Growth</h3>
              <div className="plan-price">
                <strong>0.5–1.5%</strong>
                <span>per transfer · split between sides</span>
              </div>
              <ul>
                <li>Everything in Issuer</li>
                <li>Unlimited holders</li>
                <li>Integrated secondary liquidity</li>
                <li>Distribution &amp; dividend tooling</li>
                <li>Priority support · 4hr SLA</li>
                <li>Holder portal &amp; mobile</li>
              </ul>
              <Link href="/login" className="btn btn-primary-pub plan-btn">
                Request access <span className="arr">→</span>
              </Link>
            </div>
            <div className="plan">
              <div className="plan-tag">ENTERPRISE</div>
              <h3>Custom</h3>
              <div className="plan-price">
                <strong>$25k+</strong>
                <span>per year, base · custom volume terms</span>
              </div>
              <ul>
                <li>Everything in Growth</li>
                <li>Custom token classes</li>
                <li>Dedicated settlement pool</li>
                <li>White-glove ops &amp; legal review</li>
                <li>SLA · 1hr response · 99.99%</li>
                <li>SSO, audit log API, SOC reports</li>
              </ul>
              <a href="mailto:enterprise@sflc.xyz" className="btn btn-ghost-light plan-btn">Talk to sales</a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="cta">
        <div className="wrap">
          <span className="eyebrow on-dark">Get started</span>
          <h2 className="h-display h2" style={{ color: 'var(--white)' }}>
            Make private equity <em>programmable.</em>
          </h2>
          <p className="lede">
            Every share of your company — issued as a token, governed by code, transferable in
            seconds, settled on rails you trust.
          </p>
          <div className="cta-actions">
            <Link href="/login" className="btn btn-primary-pub">
              Request access <span className="arr">→</span>
            </Link>
            <Link href="/dashboard" className="btn btn-ghost">Open live demo</Link>
          </div>
        </div>
      </section>

      <PublicFooter />
    </>
  );
}

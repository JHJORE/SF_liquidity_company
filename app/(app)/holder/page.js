'use client';
import { useState } from 'react';

const VIEWS = [
  { key: 'overview', label: 'Overview' },
  { key: 'positions', label: 'Positions' },
  { key: 'vesting', label: 'Vesting' },
  { key: 'sell', label: 'Sell shares' },
  { key: 'distributions', label: 'Distributions' },
  { key: 'documents', label: 'Documents' },
  { key: 'taxes', label: 'Tax center' },
  { key: 'profile', label: 'Profile & KYC' },
];

function Overview({ goView }) {
  return (
    <>
      <div className="page-head">
        <div>
          <div className="page-title">Welcome back, Jamal.</div>
          <div className="page-sub">Your Helion Labs equity · live as of 11:47 UTC</div>
        </div>
      </div>

      <div className="net-worth">
        <div className="net-worth-head">
          <div className="l">YOUR EQUITY · LIVE</div>
          <div className="pick">
            <a className="on">All</a>
            <a>Vested</a>
            <a>Unvested</a>
          </div>
        </div>
        <div className="net-worth-amt">$1,932,400 <em>USD</em></div>
        <div className="net-worth-meta">
          <div className="m"><div className="ml">VESTED</div><div className="mv mint">$524,800</div></div>
          <div className="m"><div className="ml">UNVESTED</div><div className="mv">$1,407,600</div></div>
          <div className="m"><div className="ml">NEXT TRANCHE</div><div className="mv">Jun 1, 2026</div></div>
          <div className="m"><div className="ml">SELLABLE NOW</div><div className="mv mint">22,800 shares</div></div>
          <div className="m"><div className="ml">7d Δ</div><div className="mv amber">↑ 4.2%</div></div>
        </div>
      </div>

      <div className="row r-2-1">
        <div>
          <div className="page-head"><div><div className="page-title" style={{ fontSize: '16px' }}>Your positions</div></div></div>
          <div className="positions">
            <div className="position-card">
              <div className="top">
                <div className="sym">HLN-OPT-24 · STOCK OPTIONS</div>
                <div className="pname">Stock Option Pool 2024</div>
                <div className="shares">84,000</div>
                <div className="shares-label">shares granted · $1.42 strike</div>
                <div className="vesting-bar"><div className="fill" style={{ width: '31%' }}></div></div>
                <div className="vesting-meta">
                  <span><strong>26,250</strong> vested</span>
                  <span>31% · 4yr / 1yr cliff</span>
                </div>
              </div>
              <div className="mid">
                <div className="mid-row"><span className="k">Grant ID</span><span className="v">G-2025-098</span></div>
                <div className="mid-row"><span className="k">Grant date</span><span className="v">Dec 1, 2025</span></div>
                <div className="mid-row"><span className="k">Next vest</span><span className="v">Jun 1, 2026 · 1,750</span></div>
                <div className="mid-row"><span className="k">FMV (409A)</span><span className="v">$22.99</span></div>
              </div>
              <div className="actions">
                <button className="btn-holder ghost">Exercise</button>
                <button className="btn-holder primary" onClick={() => goView('sell')}>Sell vested</button>
              </div>
            </div>

            <div className="position-card">
              <div className="top">
                <div className="sym">HLN-CMN-A · COMMON STOCK</div>
                <div className="pname">Common Stock, Class A</div>
                <div className="shares">2,500</div>
                <div className="shares-label">shares · from prior exercise</div>
                <div className="vesting-bar"><div className="fill" style={{ width: '100%', background: 'var(--mint-deep)' }}></div></div>
                <div className="vesting-meta">
                  <span><strong>2,500</strong> vested</span>
                  <span>100% · Settled</span>
                </div>
              </div>
              <div className="mid">
                <div className="mid-row"><span className="k">Acquired</span><span className="v">Apr 12, 2026 · Exercise</span></div>
                <div className="mid-row"><span className="k">Cost basis</span><span className="v">$1.42 / share</span></div>
                <div className="mid-row"><span className="k">Current value</span><span className="v">$22.99 / share</span></div>
                <div className="mid-row"><span className="k">ROFR window</span><span className="v">30 days</span></div>
              </div>
              <div className="actions">
                <button className="btn-holder ghost">View tax lot</button>
                <button className="btn-holder primary" onClick={() => goView('sell')}>Sell</button>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-head"><div><div className="title">Vesting schedule</div><div className="sub">Next 6 events</div></div></div>
          <div className="timeline">
            {[
              ['1,750 HLN-OPT-24 vests', '~ $40,233 at current 409A', 'Jun 1'],
              ['1,750 HLN-OPT-24 vests', 'Monthly tranche', 'Jul 1'],
              ['1,750 HLN-OPT-24 vests', 'Monthly tranche', 'Aug 1'],
              ['1,750 HLN-OPT-24 vests', 'Monthly tranche', 'Sep 1'],
              ['1,750 HLN-OPT-24 vests', 'Monthly tranche', 'Oct 1'],
              ['1,750 HLN-OPT-24 vests', 'Monthly tranche', 'Nov 1'],
            ].map(([t, s, time], i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-dot"></div>
                <div className="timeline-text">{t}<span className="mono">{s}</span></div>
                <div className="timeline-time">{time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-head"><div><div className="title">Recent activity</div><div className="sub">All transactions on your positions</div></div></div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-text">Vesting tranche cleared · <strong>1,750 HLN-OPT-24</strong><span className="mono">Auto-released by smart contract · TX 0xfa42…9c1b</span></div>
            <div className="timeline-time">May 1</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-text">Exercised options · <strong>2,500 HLN-OPT-24 → HLN-CMN-A</strong><span className="mono">Strike paid: $3,550 · TX 0x9a01…2b54</span></div>
            <div className="timeline-time">Apr 12</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-text">Vesting tranche cleared · <strong>1,750 HLN-OPT-24</strong><span className="mono">Auto-released by smart contract</span></div>
            <div className="timeline-time">Apr 1</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-text">409A valuation updated · <strong>$22.99 / share</strong><span className="mono">Independent appraisal · effective Apr 1, 2026</span></div>
            <div className="timeline-time">Apr 1</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-text">Vesting cliff cleared · <strong>21,000 HLN-OPT-24</strong><span className="mono">1-yr cliff complete · TX 0x71fa…3a89</span></div>
            <div className="timeline-time">Dec 1, 2025</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-text">Grant issued · <strong>84,000 HLN-OPT-24</strong><span className="mono">G-2025-098 · 4yr / 1yr cliff · strike $1.42</span></div>
            <div className="timeline-time">Dec 1, 2025</div>
          </div>
        </div>
      </div>
    </>
  );
}

function Positions() {
  return (
    <>
      <div className="page-head">
        <div>
          <div className="page-title">Your positions</div>
          <div className="page-sub">2 active positions in Helion Labs · $1,932,400 total value</div>
        </div>
      </div>
      <div className="positions">
        <div className="position-card">
          <div className="top">
            <div className="sym">HLN-OPT-24 · STOCK OPTIONS</div>
            <div className="pname">Stock Option Pool 2024</div>
            <div className="shares">84,000</div>
            <div className="shares-label">shares granted · $1.42 strike</div>
            <div className="vesting-bar"><div className="fill" style={{ width: '31%' }}></div></div>
            <div className="vesting-meta">
              <span><strong>26,250</strong> vested</span>
              <span>31% · 4yr / 1yr cliff</span>
            </div>
          </div>
          <div className="mid">
            <div className="mid-row"><span className="k">Grant ID</span><span className="v">G-2025-098</span></div>
            <div className="mid-row"><span className="k">Strike</span><span className="v">$1.42</span></div>
            <div className="mid-row"><span className="k">Current FMV</span><span className="v">$22.99</span></div>
            <div className="mid-row"><span className="k">Spread / share</span><span className="v">$21.57</span></div>
          </div>
          <div className="actions">
            <button className="btn-holder ghost">Exercise</button>
            <button className="btn-holder primary">Sell vested</button>
          </div>
        </div>
        <div className="position-card">
          <div className="top">
            <div className="sym">HLN-CMN-A · COMMON STOCK</div>
            <div className="pname">Common Stock, Class A</div>
            <div className="shares">2,500</div>
            <div className="shares-label">shares · from prior exercise</div>
            <div className="vesting-bar"><div className="fill" style={{ width: '100%', background: 'var(--mint-deep)' }}></div></div>
            <div className="vesting-meta">
              <span><strong>2,500</strong> vested</span>
              <span>100% · Settled</span>
            </div>
          </div>
          <div className="mid">
            <div className="mid-row"><span className="k">Acquired</span><span className="v">Apr 12, 2026 · Exercise</span></div>
            <div className="mid-row"><span className="k">Cost basis</span><span className="v">$1.42 / share</span></div>
            <div className="mid-row"><span className="k">Current value</span><span className="v">$22.99 / share</span></div>
            <div className="mid-row"><span className="k">ROFR window</span><span className="v">30 days</span></div>
          </div>
          <div className="actions">
            <button className="btn-holder ghost">View tax lot</button>
            <button className="btn-holder primary">Sell</button>
          </div>
        </div>
      </div>
    </>
  );
}

function Sell() {
  return (
    <>
      <div className="page-head">
        <div>
          <div className="page-title">Sell shares</div>
          <div className="page-sub">Initiate a transfer of vested shares through the SFLC venue</div>
        </div>
      </div>
      <div className="sell-card">
        <h3>Initiate a sale</h3>
        <p className="lede">Settles in USDC. Compliance checks run pre-trade. ROFR window applies for common stock.</p>
        <div className="sell-field">
          <label>Position</label>
          <select defaultValue="cmn">
            <option value="cmn">HLN-CMN-A · Common Stock (2,500 vested)</option>
            <option value="opt">HLN-OPT-24 · Vested Options (26,250)</option>
          </select>
        </div>
        <div className="sell-field">
          <label>Shares to sell</label>
          <input type="number" placeholder="1,000" />
        </div>
        <div className="sell-field">
          <label>Order type</label>
          <select defaultValue="mkt">
            <option value="mkt">Market · fill at venue mark</option>
            <option value="lmt">Limit · set min price</option>
          </select>
        </div>
        <div className="sell-summary">
          <div className="l">PROCEEDS PREVIEW</div>
          <div className="row"><span className="k">Shares</span><span className="v">1,000</span></div>
          <div className="row"><span className="k">Venue mark</span><span className="v">$22.99</span></div>
          <div className="row"><span className="k">Gross</span><span className="v">$22,990</span></div>
          <div className="row"><span className="k">SFLC fee · 0.75%</span><span className="v">−$172.43</span></div>
          <div className="row total"><span className="k">Net to wallet</span><span className="v">$22,817.57 USDC</span></div>
        </div>
        <button className="btn-holder primary" style={{ width: '100%', padding: '12px', justifyContent: 'center' }}>
          Submit for compliance review →
        </button>
      </div>
    </>
  );
}

function Vesting() {
  return (
    <>
      <div className="page-head">
        <div>
          <div className="page-title">Vesting schedule</div>
          <div className="page-sub">Full vesting calendar across all grants</div>
        </div>
      </div>
      <div className="card">
        <div className="card-body tight">
          <table className="tbl">
            <thead>
              <tr><th>Date</th><th>Grant</th><th className="right">Shares</th><th className="right">Value (409A)</th><th>Type</th></tr>
            </thead>
            <tbody>
              {Array.from({ length: 12 }).map((_, i) => {
                const d = new Date(2026, 5 + i, 1);
                return (
                  <tr key={i}>
                    <td className="mono">{d.toLocaleDateString('en', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                    <td>HLN-OPT-24</td>
                    <td className="num">1,750</td>
                    <td className="num">$40,233</td>
                    <td><span className="h-badge vesting">Monthly tranche</span></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function Distributions() {
  return (
    <>
      <div className="page-head">
        <div>
          <div className="page-title">Distributions</div>
          <div className="page-sub">Dividend and pro-rata payouts to your wallet</div>
        </div>
      </div>
      <div className="card">
        <div className="card-body tight">
          <table className="tbl">
            <thead>
              <tr><th>Date</th><th>Type</th><th className="right">Per share</th><th className="right">Total</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr><td className="mono">Apr 5, 2026</td><td>Q1 Special dividend</td><td className="num">$0.42</td><td className="num">$1,050 USDC</td><td><span className="h-badge settled">Settled</span></td></tr>
              <tr><td className="mono">Jan 8, 2026</td><td>Q4 2025 dividend</td><td className="num">$0.38</td><td className="num">$950 USDC</td><td><span className="h-badge settled">Settled</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function Documents() {
  const docs = [
    ['Grant agreement · G-2025-098', 'PDF · 84KB · Dec 1, 2025'],
    ['Exercise notice · Apr 12, 2026', 'PDF · 22KB · Apr 12, 2026'],
    ['409A valuation report Q2 2026', 'PDF · 1.2MB · Apr 1, 2026'],
    ['Holder packet · 2025', 'PDF · 380KB · Jan 8, 2026'],
    ['1099-DIV · 2025', 'PDF · 18KB · Jan 31, 2026'],
    ['Form 3921 · 2026 exercises', 'PDF · 24KB · Apr 14, 2026'],
    ['Stock plan · Helion Labs ESOP', 'PDF · 210KB · Mar 2024'],
    ['SFLC Holder TOS', 'PDF · 48KB · Jan 2026'],
  ];
  return (
    <>
      <div className="page-head">
        <div>
          <div className="page-title">Documents</div>
          <div className="page-sub">{docs.length} files on record · all cryptographically signed</div>
        </div>
      </div>
      <div className="card">
        {docs.map(([n, s], i) => (
          <div className="doc-row" key={i}>
            <div className="doc-icon">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 1.5H4a1 1 0 00-1 1v11a1 1 0 001 1h8a1 1 0 001-1V5.5z" /><path d="M9 1.5V5.5h4" /></svg>
            </div>
            <div className="doc-meta">
              <div className="dname">{n}</div>
              <div className="dsub">{s}</div>
            </div>
            <button className="doc-action">Download</button>
          </div>
        ))}
      </div>
    </>
  );
}

function Taxes() {
  return (
    <>
      <div className="page-head">
        <div>
          <div className="page-title">Tax center</div>
          <div className="page-sub">AMT estimator and tax-lot tracking</div>
        </div>
      </div>
      <div className="row r-1-1">
        <div className="card">
          <div className="card-head"><div><div className="title">AMT estimator</div><div className="sub">Current-year exercise spread</div></div></div>
          <div className="card-body">
            <div className="net-worth-meta" style={{ gap: '24px' }}>
              <div className="m"><div className="ml">EXERCISES YTD</div><div className="mv">2,500 sh</div></div>
              <div className="m"><div className="ml">BARGAIN ELEMENT</div><div className="mv">$53,925</div></div>
              <div className="m"><div className="ml">EST. AMT EXPOSURE</div><div className="mv amber">$14,560</div></div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-head"><div><div className="title">Open tax lots</div><div className="sub">Held positions</div></div></div>
          <div className="card-body tight">
            <table className="tbl">
              <thead>
                <tr><th>Lot</th><th>Acquired</th><th className="right">Cost basis</th><th className="right">FMV</th></tr>
              </thead>
              <tbody>
                <tr><td>HLN-CMN-A · 2,500</td><td className="mono">Apr 12, 2026</td><td className="num">$1.42</td><td className="num">$22.99</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

function Profile() {
  return (
    <>
      <div className="page-head">
        <div>
          <div className="page-title">Profile &amp; KYC</div>
          <div className="page-sub">Your identity, wallet, and accreditation status</div>
        </div>
      </div>
      <div className="row r-1-1">
        <div className="card">
          <div className="card-head"><div><div className="title">Identity</div><div className="sub">Verified by SFLC</div></div></div>
          <div className="card-body">
            <div className="mid-row"><span style={{ color: 'var(--text-mute)' }}>Full name</span><span style={{ fontFamily: 'var(--mono)', fontWeight: 500 }}>Jamal Okonkwo</span></div>
            <div className="mid-row" style={{ marginTop: '6px' }}><span style={{ color: 'var(--text-mute)' }}>Jurisdiction</span><span style={{ fontFamily: 'var(--mono)', fontWeight: 500 }}>United States · CA</span></div>
            <div className="mid-row" style={{ marginTop: '6px' }}><span style={{ color: 'var(--text-mute)' }}>KYC status</span><span className="h-badge settled">Approved · 2027</span></div>
            <div className="mid-row" style={{ marginTop: '6px' }}><span style={{ color: 'var(--text-mute)' }}>Accreditation</span><span className="h-badge settled">Qualified</span></div>
          </div>
        </div>
        <div className="card">
          <div className="card-head"><div><div className="title">Wallets</div><div className="sub">Holder-controlled addresses</div></div></div>
          <div className="card-body">
            <div style={{ fontFamily: 'var(--mono)', fontSize: '12.5px' }}>0xfa42…9c1b<span className="h-badge holding" style={{ marginLeft: 12 }}>Primary</span></div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '12.5px', marginTop: 10 }}>0x71fa…3a89<span className="h-badge holding" style={{ marginLeft: 12 }}>Backup</span></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function HolderPage() {
  const [view, setView] = useState('overview');

  return (
    <>
      <div className="holder-tabs">
        {VIEWS.map((v) => (
          <button
            key={v.key}
            className={`holder-tab${view === v.key ? ' on' : ''}`}
            onClick={() => setView(v.key)}
          >
            {v.label}
          </button>
        ))}
      </div>

      {view === 'overview' && <Overview goView={setView} />}
      {view === 'positions' && <Positions />}
      {view === 'vesting' && <Vesting />}
      {view === 'sell' && <Sell />}
      {view === 'distributions' && <Distributions />}
      {view === 'documents' && <Documents />}
      {view === 'taxes' && <Taxes />}
      {view === 'profile' && <Profile />}
    </>
  );
}

'use client';
import { useState } from 'react';

export default function CompanyMarket() {
  const [haltOpen, setHaltOpen] = useState(false);
  return (
    <>

{haltOpen && (<div className="halt-banner">
  <div className="ico">!</div>
  <div className="body">
    <div className="t">Trading halted · NVR · External spot and NVR-PERP</div>
    <div className="s">Halt requested by issuer. Reason: Material event pending disclosure. Estimated resume 15:30 UTC.</div>
  </div>
  <div className="halt-actions">
    <button className="btn-secondary" onClick={() => setHaltOpen(false)}>Dismiss demo</button>
  </div>
</div>)}

<div style={{display: 'flex', gap: '10px', marginBottom: '14px', fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--silver-3)', letterSpacing: '0.08em', textTransform: 'uppercase'}}>
  <span style={{color: 'var(--silver-4)'}}>STATE DEMO ·</span>
  <button className="chip" onClick={() => setHaltOpen(true)}>Show halt state</button>
</div>

<div className="co-header">
  <div className="co-id">
    <div className="co-logo">NV</div>
    <div className="co-meta">
      <div className="name">
        <h1>Nova Robotics</h1>
        <span className="sym mono">NVR</span>
        <span className="badge int">INT</span>
        <span className="badge ext">EXT</span>
      </div>
      <div className="tags mono">Humanoid robotics<span className="sep">·</span>Bay Area<span className="sep">·</span>Founded 2019<span className="sep">·</span>Series D<span className="sep">·</span>214 employees</div>
    </div>
  </div>
  <div></div>
  <div className="co-prices">
    <div className="co-price int">
      <div className="lbl"><span className="dot int"></span>Internal Mark · 409d</div>
      <div className="val">$138.10</div>
      <div className="sub"><span>FDV $6.8B</span><span className="t4">·</span><span>Series D</span></div>
    </div>
    <div className="co-price ext">
      <div className="lbl"><span className="dot live"></span>External Spot · 62ms</div>
      <div className="val">$142.80 <span className="up mono" style={{fontSize: '13px'}}>+3.14%</span></div>
      <div className="sub"><span>FDV $7.04B</span><span className="t4">·</span><span>+3.4% vs mark</span></div>
    </div>
    <div className="co-price ext">
      <div className="lbl"><span className="dot live"></span>Perp · 62ms</div>
      <div className="val">$142.92 <span className="funding-pill pos" style={{marginLeft: '4px', fontSize: '10px'}}>+0.0112% / 8h</span></div>
      <div className="sub"><span>OI $48.2M</span><span className="t4">·</span><span>Basis +0.08%</span></div>
    </div>
  </div>
</div>

<div className="co-grid">

  <div className="panel">
    <div className="chart-tabs">
      <button className="chart-tab on">Spot</button>
      <button className="chart-tab">Perp</button>
      <button className="chart-tab">Basis</button>
      <button className="chart-tab">Funding</button>
      <button className="chart-tab">Depth</button>
      <button className="chart-tab">vs Mark</button>
      <div className="chart-controls">
        <button className="chip">1H</button>
        <button className="chip">1D</button>
        <button className="chip on">1W</button>
        <button className="chip">1M</button>
        <button className="chip">3M</button>
        <button className="chip">ALL</button>
      </div>
    </div>

    <div className="chart-area">
      <div className="chart-label">
        <div className="px">$142.80</div>
        <div className="chg up">+4.34 <span className="t3">(+3.14%) · 1W</span></div>
      </div>
      <svg className="chart-svg" viewBox="0 0 800 340" preserveAspectRatio="none">
        <defs>
          <linearGradient id="priceFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#A8C8F7" stopOpacity="0.22"/>
            <stop offset="100%" stopColor="#A8C8F7" stopOpacity="0"/>
          </linearGradient>
          <pattern id="grid" width="80" height="42.5" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 42.5" fill="none" stroke="#2A3040" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="800" height="340" fill="url(#grid)"/>

        {/* internal mark reference */}
        <line x1="0" y1="148" x2="800" y2="148" stroke="#F4B8D0" strokeWidth="1" strokeDasharray="3,5" opacity="0.8"/>
        <text x="790" y="144" fill="#F4B8D0" fontFamily="Geist Mono" fontSize="10" textAnchor="end" letterSpacing="0.05em">MARK · $138.10</text>

        {/* area */}
        <path d="M0,200 L40,195 L80,186 L120,190 L160,176 L200,180 L240,162 L280,166 L320,150 L360,154 L400,138 L440,142 L480,122 L520,126 L560,106 L600,110 L640,96 L680,100 L720,86 L760,90 L800,76 L800,340 L0,340 Z" fill="url(#priceFill)"/>
        <path d="M0,200 L40,195 L80,186 L120,190 L160,176 L200,180 L240,162 L280,166 L320,150 L360,154 L400,138 L440,142 L480,122 L520,126 L560,106 L600,110 L640,96 L680,100 L720,86 L760,90 L800,76" fill="none" stroke="#A8C8F7" strokeWidth="1.5"/>

        <g fontFamily="Geist Mono" font-size="10" fill="#7A7F8B">
          <text x="4" y="18">$150</text>
          <text x="4" y="88">$140</text>
          <text x="4" y="170">$130</text>
          <text x="4" y="252">$120</text>
          <text x="4" y="332">$110</text>
          <text x="100" y="332" textAnchor="middle">Mon</text>
          <text x="240" y="332" textAnchor="middle">Tue</text>
          <text x="380" y="332" textAnchor="middle">Wed</text>
          <text x="520" y="332" textAnchor="middle">Thu</text>
          <text x="660" y="332" textAnchor="middle">Fri</text>
          <text x="780" y="332" textAnchor="end">Now</text>
        </g>

        <g>
          <circle cx="180" cy="148" r="4" fill="#F4B8D0" stroke="#171B25" strokeWidth="2"/>
          <circle cx="500" cy="148" r="4" fill="#F4B8D0" stroke="#171B25" strokeWidth="2"/>
        </g>

        <circle cx="800" cy="76" r="5" fill="#A8C8F7"/>
        <circle cx="800" cy="76" r="10" fill="#A8C8F7" opacity="0.3"/>
      </svg>
    </div>

    <div className="info-tabs">
      <button className="info-tab on">Overview</button>
      <button className="info-tab">Trading<span className="count">24H</span></button>
      <button className="info-tab">Derivatives<span className="count">3</span></button>
      <button className="info-tab">Holders<span className="count">1,842</span></button>
      <button className="info-tab">Activity</button>
      <button className="info-tab">Updates<span className="count">12</span></button>
      <button className="info-tab">Documents</button>
    </div>

    <div className="overview-grid">
      <div className="ov-col">
        <h4>Company Metrics</h4>
        <div className="metric-grid">
          <div className="metric"><div className="lbl">Revenue (ARR)</div><div className="val">$142M</div><div className="sub up">+84% YoY</div></div>
          <div className="metric"><div className="lbl">Gross Margin</div><div className="val">64.2%</div><div className="sub t3">LTM</div></div>
          <div className="metric"><div className="lbl">Burn</div><div className="val">$8.4M/mo</div><div className="sub t3">Q3 2026</div></div>
          <div className="metric"><div className="lbl">Runway</div><div className="val">38 mo</div><div className="sub t3">$320M cash</div></div>
        </div>
        <h4 style={{marginTop: '26px'}}>Supply</h4>
        <div className="metric-grid">
          <div className="metric"><div className="lbl">Internal Shares</div><div className="val">49.2M</div><div className="sub int">Restricted</div></div>
          <div className="metric"><div className="lbl">External Shares</div><div className="val">2.80M</div><div className="sub ext">Free float 5.7%</div></div>
          <div className="metric"><div className="lbl">FDV · Internal</div><div className="val">$6.80B</div><div className="sub t3">Series D</div></div>
          <div className="metric"><div className="lbl">FDV · External</div><div className="val">$7.04B</div><div className="sub up">+3.4% premium</div></div>
        </div>
      </div>

      <div className="ov-col">
        <h4>Cap Table</h4>
        <div className="cap-bar">
          <div className="cap-seg" style={{width: '32%', background: '#E8EBF0'}}></div>
          <div className="cap-seg" style={{width: '24%', background: '#B4B9C4'}}></div>
          <div className="cap-seg" style={{width: '18%', background: '#F4B8D0'}}></div>
          <div className="cap-seg" style={{width: '12%', background: '#A8C8F7'}}></div>
          <div className="cap-seg" style={{width: '8%', background: '#7A7F8B'}}></div>
          <div className="cap-seg" style={{width: '6%', background: '#4E535E'}}></div>
        </div>
        <div className="cap-legend">
          <div className="cap-row"><div className="cap-swatch" style={{background: '#E8EBF0'}}></div><div className="h">Founders &amp; team</div><div className="pct">32.0%</div><div className="sh">15.7M</div></div>
          <div className="cap-row"><div className="cap-swatch" style={{background: '#B4B9C4'}}></div><div className="h">Seed &amp; Series A</div><div className="pct">24.0%</div><div className="sh">11.8M</div></div>
          <div className="cap-row"><div className="cap-swatch" style={{background: '#F4B8D0'}}></div><div className="h">Series B / C lead</div><div className="pct">18.0%</div><div className="sh">8.9M</div></div>
          <div className="cap-row"><div className="cap-swatch" style={{background: '#A8C8F7'}}></div><div className="h">Series D investors</div><div className="pct">12.0%</div><div className="sh">5.9M</div></div>
          <div className="cap-row"><div className="cap-swatch" style={{background: '#7A7F8B'}}></div><div className="h">Employee pool</div><div className="pct">8.0%</div><div className="sh">3.9M</div></div>
          <div className="cap-row"><div className="cap-swatch" style={{background: '#4E535E'}}></div><div className="h">External float<span className="badge ext">EXT</span></div><div className="pct">6.0%</div><div className="sh">2.8M</div></div>
        </div>
      </div>
    </div>
  </div>

  {/* TRADE COL */}
  <div className="trade-col">

    <div className="panel">
      <div className="trade-toggle">
        <button className="buy-on" id="buyBtn">Buy</button>
        <button id="sellBtn">Sell</button>
      </div>
      <div className="trade-body">
        <div className="deriv-selector">
          <button>Spot</button>
          <button className="on">Perp <span className="cnt">5×</span></button>
          <button>Options</button>
          <button>Futures</button>
        </div>

        <div className="order-types">
          <button className="on">Market</button>
          <button>Limit</button>
          <button>Stop</button>
        </div>

        <div className="leverage-row">
          <span className="lab">Leverage</span>
          <div className="leverage-slider"><div className="leverage-fill" style={{width: '25%'}}></div><div className="leverage-thumb" style={{left: '25%'}}></div></div>
          <span className="leverage-val">5.0×</span>
        </div>
        <div className="leverage-marks"><span>1×</span><span>5×</span><span>10×</span><span>15×</span><span>20×</span></div>

        <div className="field" style={{marginTop: '14px'}}>
          <div className="lbl"><span>Price</span><span className="aside">MARKET</span></div>
          <div className="input-wrap">
            <input defaultValue="142.92"/>
            <span className="unit">USDC</span>
          </div>
        </div>

        <div className="field">
          <div className="lbl"><span>Size</span><span className="aside">Max 387 NVR · 5×</span></div>
          <div className="input-wrap">
            <input defaultValue="240"/>
            <span className="unit">NVR</span>
          </div>
        </div>

        <div className="size-presets">
          <button>25%</button><button>50%</button><button>75%</button><button>Max</button>
        </div>

        <div className="perp-stats">
          <div className="perp-stat"><div className="lbl">Mark</div><div className="val">$142.92</div><div className="sub">Index $142.86</div></div>
          <div className="perp-stat"><div className="lbl">Funding 8h</div><div className="val up">+0.0112%</div><div className="sub">Next in 3h 42m</div></div>
          <div className="perp-stat"><div className="lbl">Liq. Price</div><div className="val" style={{color: 'var(--down)'}}>$116.58</div><div className="sub">−18.4% from mark</div></div>
          <div className="perp-stat"><div className="lbl">Margin Required</div><div className="val">6,862.08 USDC</div><div className="sub">20% initial</div></div>
        </div>

        <div className="order-summary">
          <div className="sum-row"><span className="lbl">Notional</span><span className="val">34,300.80 USDC</span></div>
          <div className="sum-row"><span className="lbl">Fee · 0.02%</span><span className="val">6.86 USDC</span></div>
          <div className="sum-row"><span className="lbl">Funding rate · 24h</span><span className="val up">+0.0336%</span></div>
          <div className="sum-row tot"><span className="lbl">Margin required</span><span className="val">6,862.08 USDC</span></div>
        </div>

        <button className="submit-btn buy">Long 240 NVR-PERP · 5×</button>

        <div className="hstack" style={{justifyContent: 'space-between', marginTop: '12px', fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--silver-3)', letterSpacing: '0.08em', textTransform: 'uppercase'}}>
          <span>⏵ Reduce-only</span><span>⏵ Post-only</span><span>⏵ TIF: IOC</span>
        </div>
      </div>

      <div className="position-mini">
        <div className="row"><span className="lbl">PERP POSITION</span><span className="val"><span className="perp-row-side long">LONG</span> 820 NVR-PERP · 5×</span></div>
        <div className="row"><span className="lbl">ENTRY</span><span className="val">$138.44</span></div>
        <div className="row"><span className="lbl">MARK</span><span className="val">$142.92</span></div>
        <div className="row"><span className="lbl">LIQ PRICE</span><span className="val" style={{color: 'var(--down)'}}>$112.80</span></div>
        <div className="row"><span className="lbl">MARGIN RATIO</span><span className="val up">82.4%</span></div>
        <div className="margin-bar"><div className="fill" style={{width: '82.4%'}}></div></div>
        <div className="row" style={{marginTop: '6px'}}><span className="lbl">UNREALIZED</span><span className="val up">+$18,366 · +15.8%</span></div>
      </div>
    </div>

    <div className="panel">
      <div className="panel-head">
        <h3>Order Book</h3>
        <div className="controls">
          <button className="chip on">0.01</button>
          <button className="chip">0.10</button>
          <button className="chip">1.00</button>
        </div>
      </div>
      <div className="book-head"><span>Price</span><span className="r">Size</span><span className="r">Total</span></div>

      <div className="book-row ask"><span className="depth" style={{width: '28%'}}></span><span className="px">143.12</span><span className="sz">628</span><span className="tot">2,430</span></div>
      <div className="book-row ask"><span className="depth" style={{width: '35%'}}></span><span className="px">143.04</span><span className="sz">820</span><span className="tot">1,802</span></div>
      <div className="book-row ask"><span className="depth" style={{width: '22%'}}></span><span className="px">142.96</span><span className="sz">482</span><span className="tot">982</span></div>
      <div className="book-row ask"><span className="depth" style={{width: '18%'}}></span><span className="px">142.88</span><span className="sz">280</span><span className="tot">500</span></div>
      <div className="book-row ask"><span className="depth" style={{width: '10%'}}></span><span className="px">142.84</span><span className="sz">220</span><span className="tot">220</span></div>

      <div className="book-spread">
        <span><span className="lbl">LAST</span> <span className="val up mono">142.80 ↑</span></span>
        <span><span className="lbl">SPREAD</span> <span className="val">$0.04 · 0.03%</span></span>
      </div>

      <div className="book-row bid"><span className="depth" style={{width: '14%'}}></span><span className="px">142.80</span><span className="sz">340</span><span className="tot">340</span></div>
      <div className="book-row bid"><span className="depth" style={{width: '22%'}}></span><span className="px">142.72</span><span className="sz">560</span><span className="tot">900</span></div>
      <div className="book-row bid"><span className="depth" style={{width: '32%'}}></span><span className="px">142.64</span><span className="sz">780</span><span className="tot">1,680</span></div>
      <div className="book-row bid"><span className="depth" style={{width: '40%'}}></span><span className="px">142.56</span><span className="sz">920</span><span className="tot">2,600</span></div>
      <div className="book-row bid"><span className="depth" style={{width: '28%'}}></span><span className="px">142.48</span><span className="sz">640</span><span className="tot">3,240</span></div>
    </div>

    <div className="panel">
      <div className="panel-head">
        <h3>Recent Trades</h3>
        <span className="mono t3" style={{fontSize: '10px', letterSpacing: '0.1em'}}>LIVE · 62MS</span>
      </div>
      <div className="book-head"><span>Price</span><span className="r">Size</span><span className="r">Total</span><span className="r">Time</span></div>
      <div className="trades-feed">
        <div className="trade-row"><span className="px buy">142.80</span><span className="sz">240</span><span className="tot">34,272</span><span className="t">14:32:04</span></div>
        <div className="trade-row"><span className="px buy">142.78</span><span className="sz">120</span><span className="tot">17,133</span><span className="t">14:32:02</span></div>
        <div className="trade-row"><span className="px sell">142.72</span><span className="sz">340</span><span className="tot">48,524</span><span className="t">14:31:58</span></div>
        <div className="trade-row"><span className="px buy">142.80</span><span className="sz">80</span><span className="tot">11,424</span><span className="t">14:31:52</span></div>
        <div className="trade-row"><span className="px buy">142.82</span><span className="sz">460</span><span className="tot">65,697</span><span className="t">14:31:44</span></div>
        <div className="trade-row"><span className="px sell">142.74</span><span className="sz">220</span><span className="tot">31,402</span><span className="t">14:31:30</span></div>
        <div className="trade-row"><span className="px buy">142.78</span><span className="sz">160</span><span className="tot">22,844</span><span className="t">14:31:18</span></div>
        <div className="trade-row"><span className="px sell">142.70</span><span className="sz">540</span><span className="tot">77,058</span><span className="t">14:30:52</span></div>
        <div className="trade-row"><span className="px buy">142.74</span><span className="sz">300</span><span className="tot">42,822</span><span className="t">14:30:40</span></div>
        <div className="trade-row"><span className="px sell">142.66</span><span className="sz">180</span><span className="tot">25,678</span><span className="t">14:30:28</span></div>
      </div>
    </div>

  </div>
</div>
    </>
  );
}

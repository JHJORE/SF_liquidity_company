export default function IssuerAdmin() {
  return (
    <>

<div className="issuer-header">
  <div className="hstack sp-lg">
    <div className="co-logo" style={{width: '48px', height: '48px', fontSize: '16px'}}>NV</div>
    <div>
      <div className="hstack sp-md">
        <span style={{fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '22px', color: 'var(--white)', letterSpacing: '-0.01em'}}>Nova Robotics</span>
        <span className="issuer-mode">Issuer Console</span>
      </div>
      <div className="mono t3" style={{fontSize: '11px', marginTop: '4px', letterSpacing: '0.04em'}}>NVR · Series D · FDV $6.8B · 49.2M INT · 2.80M EXT</div>
    </div>
  </div>
  <div className="hstack sp-md">
    <button className="btn-secondary">Export Cap Table</button>
    <button className="btn-pink">+ New Issuance</button>
  </div>
</div>

<div className="issuer-tabs">
  <button className="issuer-tab on">Overview</button>
  <button className="issuer-tab">Issuance</button>
  <button className="issuer-tab">Market</button>
  <button className="issuer-tab">Investors</button>
  <button className="issuer-tab">Updates</button>
  <button className="issuer-tab">Treasury</button>
</div>

<div className="kpi-row">
  <div className="kpi">
    <div className="lbl">Internal Mark<span className="market-tag int">INT</span></div>
    <div className="val">$138.10</div>
    <div className="sub"><span className="t3">Series D · 409d old</span></div>
  </div>
  <div className="kpi">
    <div className="lbl">External Price<span className="market-tag ext">EXT</span></div>
    <div className="val">$142.80</div>
    <div className="sub"><span className="up">+3.14%</span><span className="t3">+3.4% vs mark</span></div>
  </div>
  <div className="kpi">
    <div className="lbl">Free Float</div>
    <div className="val">2.80M</div>
    <div className="sub"><span className="t3">5.7% of FD · 1,842 holders</span></div>
  </div>
  <div className="kpi">
    <div className="lbl">24H Volume</div>
    <div className="val">$4.82M</div>
    <div className="sub"><span className="t3">3.4% of float</span></div>
  </div>
</div>

<div className="issuer-grid">
  <div className="panel">
    <div className="panel-head">
      <h3>Market Activity · 30D</h3>
      <div className="controls">
        <button className="chip on">External</button>
        <button className="chip">Internal</button>
        <button className="chip">Both</button>
      </div>
    </div>
    <div style={{padding: '28px'}}>
      <svg viewBox="0 0 800 240" preserveAspectRatio="none" style={{width: '100%', height: '240px'}}>
        <defs>
          <linearGradient id="issuerFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#A8C8F7" stopOpacity="0.2"/>
            <stop offset="100%" stopColor="#A8C8F7" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <g stroke="#2A3040" strokeWidth="1">
          <line x1="0" y1="60" x2="800" y2="60"/>
          <line x1="0" y1="120" x2="800" y2="120"/>
          <line x1="0" y1="180" x2="800" y2="180"/>
        </g>
        <g fill="#A8C8F7" opacity="0.4">
          <rect x="10" y="195" width="20" height="25"/>
          <rect x="38" y="185" width="20" height="35"/>
          <rect x="66" y="175" width="20" height="45"/>
          <rect x="94" y="180" width="20" height="40"/>
          <rect x="122" y="170" width="20" height="50"/>
          <rect x="150" y="160" width="20" height="60"/>
          <rect x="178" y="175" width="20" height="45"/>
          <rect x="206" y="155" width="20" height="65"/>
          <rect x="234" y="142" width="20" height="78"/>
          <rect x="262" y="160" width="20" height="60"/>
          <rect x="290" y="140" width="20" height="80"/>
          <rect x="318" y="128" width="20" height="92"/>
          <rect x="346" y="148" width="20" height="72"/>
          <rect x="374" y="134" width="20" height="86"/>
          <rect x="402" y="118" width="20" height="102"/>
          <rect x="430" y="128" width="20" height="92"/>
          <rect x="458" y="112" width="20" height="108"/>
          <rect x="486" y="124" width="20" height="96"/>
          <rect x="514" y="104" width="20" height="116"/>
          <rect x="542" y="92" width="20" height="128"/>
          <rect x="570" y="108" width="20" height="112"/>
          <rect x="598" y="96" width="20" height="124"/>
          <rect x="626" y="84" width="20" height="136"/>
          <rect x="654" y="92" width="20" height="128"/>
          <rect x="682" y="80" width="20" height="140"/>
          <rect x="710" y="72" width="20" height="148"/>
          <rect x="738" y="84" width="20" height="136"/>
          <rect x="766" y="66" width="20" height="154"/>
        </g>
        <path d="M20,172 L48,162 L76,156 L104,152 L132,148 L160,140 L188,144 L216,126 L244,122 L272,132 L300,114 L328,106 L356,118 L384,100 L412,90 L440,96 L468,82 L496,90 L524,74 L552,64 L580,78 L608,66 L636,54 L664,62 L692,48 L720,42 L748,54 L776,36" fill="none" stroke="#F4B8D0" strokeWidth="1.8"/>

        <g fontFamily="Geist Mono" font-size="9" fill="#7A7F8B">
          <text x="4" y="14">$148</text>
          <text x="4" y="64">$140</text>
          <text x="4" y="124">$132</text>
          <text x="4" y="184">$124</text>
        </g>
      </svg>
      <div className="hstack" style={{justifyContent: 'space-around', padding: '22px 0 4px', borderTop: '1px solid var(--silver-6)', marginTop: '14px', fontFamily: 'var(--mono)'}}>
        <div><div className="t3" style={{fontSize: '9.5px', letterSpacing: '0.2em', textTransform: 'uppercase'}}>30D Volume</div><div style={{fontSize: '16px', marginTop: '5px', color: 'var(--white)'}}>$114.2M</div></div>
        <div><div className="t3" style={{fontSize: '9.5px', letterSpacing: '0.2em', textTransform: 'uppercase'}}>Avg Daily</div><div style={{fontSize: '16px', marginTop: '5px', color: 'var(--white)'}}>$3.81M</div></div>
        <div><div className="t3" style={{fontSize: '9.5px', letterSpacing: '0.2em', textTransform: 'uppercase'}}>Unique Traders</div><div style={{fontSize: '16px', marginTop: '5px', color: 'var(--white)'}}>822</div></div>
        <div><div className="t3" style={{fontSize: '9.5px', letterSpacing: '0.2em', textTransform: 'uppercase'}}>Largest Trade</div><div style={{fontSize: '16px', marginTop: '5px', color: 'var(--white)'}}>$1.84M</div></div>
        <div><div className="t3" style={{fontSize: '9.5px', letterSpacing: '0.2em', textTransform: 'uppercase'}}>Volatility 30D</div><div style={{fontSize: '16px', marginTop: '5px', color: 'var(--white)'}}>22.4%</div></div>
      </div>
    </div>
  </div>

  <div className="panel">
    <div className="panel-head">
      <h3>Supply &amp; Issuance</h3>
    </div>

    <div className="supply-viz">
      <div className="supply-bar">
        <div className="supply-seg out" style={{width: '94.3%'}}></div>
        <div className="supply-seg treasury" style={{width: '3.4%'}}></div>
        <div className="supply-seg reserved" style={{width: '1.8%'}}></div>
        <div className="supply-seg unissued" style={{width: '0.5%'}}></div>
      </div>
      <div className="supply-legend">
        <div className="item"><span className="sw" style={{background: 'var(--up)'}}></span><div><div className="mono" style={{fontSize: '11.5px', color: 'var(--white)'}}>Circulating</div><div className="t3 mono" style={{fontSize: '10px', marginTop: '2px'}}>49.0M · 94.3%</div></div></div>
        <div className="item"><span className="sw" style={{background: 'var(--int)'}}></span><div><div className="mono" style={{fontSize: '11.5px', color: 'var(--white)'}}>Treasury</div><div className="t3 mono" style={{fontSize: '10px', marginTop: '2px'}}>1.8M · 3.4%</div></div></div>
        <div className="item"><span className="sw" style={{background: 'var(--ext)'}}></span><div><div className="mono" style={{fontSize: '11.5px', color: 'var(--white)'}}>Reserved</div><div className="t3 mono" style={{fontSize: '10px', marginTop: '2px'}}>0.94M · 1.8%</div></div></div>
        <div className="item"><span className="sw" style={{background: 'var(--silver-5)'}}></span><div><div className="mono" style={{fontSize: '11.5px', color: 'var(--white)'}}>Unissued</div><div className="t3 mono" style={{fontSize: '10px', marginTop: '2px'}}>0.26M · 0.5%</div></div></div>
      </div>
    </div>

    <div className="control-row">
      <div className="info">
        <div className="lbl">External Listing</div>
        <div className="sub">2.80M shares · 5.7% of FD</div>
      </div>
      <div className="hstack sp-sm"><span className="val up">LIVE</span><span className="dot live"></span></div>
    </div>
    <div className="control-row">
      <div className="info">
        <div className="lbl">Add to External Float</div>
        <div className="sub">Move internal → external</div>
      </div>
      <button className="btn-secondary">Propose</button>
    </div>
    <div className="control-row">
      <div className="info">
        <div className="lbl">Update Internal Mark</div>
        <div className="sub">Series D · $138.10 current</div>
      </div>
      <button className="btn-secondary">Open Round</button>
    </div>
    <div className="control-row">
      <div className="info">
        <div className="lbl">Trading Halt</div>
        <div className="sub">Pause external market</div>
      </div>
      <button className="btn-secondary">Halt</button>
    </div>
  </div>
</div>

<div className="issuer-grid">
  <div className="panel">
    <div className="panel-head">
      <h3>Top Holders</h3>
      <div className="controls">
        <button className="chip on">All</button>
        <button className="chip">Internal</button>
        <button className="chip">External</button>
      </div>
    </div>
    <div className="inv-row">
      <div className="inv-avatar">SQ</div>
      <div className="inv-info"><div className="name">Sequoia Capital</div><div className="sub">Lead · Series D</div></div>
      <div className="hold">$812M<div className="sub">5.88M sh</div></div>
      <div className="class"><span className="badge int">INT</span></div>
    </div>
    <div className="inv-row">
      <div className="inv-avatar">FF</div>
      <div className="inv-info"><div className="name">Founders Fund</div><div className="sub">Series C</div></div>
      <div className="hold">$494M<div className="sub">3.58M sh</div></div>
      <div className="class"><span className="badge int">INT</span></div>
    </div>
    <div className="inv-row">
      <div className="inv-avatar">KV</div>
      <div className="inv-info"><div className="name">Khosla Ventures</div><div className="sub">Series B</div></div>
      <div className="hold">$342M<div className="sub">2.48M sh</div></div>
      <div className="class"><span className="badge int">INT</span></div>
    </div>
    <div className="inv-row">
      <div className="inv-avatar">0x</div>
      <div className="inv-info"><div className="name mono">0x42a8…fec9</div><div className="sub">Anon · joined 14d ago</div></div>
      <div className="hold">$1.84M<div className="sub">12.9K sh</div></div>
      <div className="class"><span className="badge ext">EXT</span></div>
    </div>
    <div className="inv-row">
      <div className="inv-avatar">PT</div>
      <div className="inv-info"><div className="name">Pantera Capital</div><div className="sub">Public wallet · ext</div></div>
      <div className="hold">$1.12M<div className="sub">7.8K sh</div></div>
      <div className="class"><span className="badge ext">EXT</span></div>
    </div>
  </div>

  <div className="panel">
    <div className="panel-head">
      <h3>Publish Update</h3>
    </div>
    <div className="publish-box">
      <textarea placeholder="Share an update with your holders…" defaultValue="Q3 2026: Revenue reached $142M (+84% YoY), gross margin 64.2%. Fleet deployed doubled to 1,240 units across 42 customers. Closing discussions with two automotive OEMs for 2027 integration pilots."></textarea>
      <div className="publish-foot">
        <div className="publish-tags">
          <button className="tag-select on">Results</button>
          <button className="tag-select">Material</button>
          <button className="tag-select">Product</button>
        </div>
        <button className="btn-primary">Publish</button>
      </div>
    </div>
    <div className="panel-head" style={{borderTop: '1px solid var(--silver-6)'}}>
      <h3>Recent</h3>
    </div>
    <div className="feed-row">
      <div className="feed-ico">Q</div>
      <div className="feed-body">
        <div className="top">Q3 2026 pre-read shared</div>
        <div className="sub">1,482 opens · 214 replies</div>
      </div>
      <div className="feed-time">2d</div>
    </div>
    <div className="feed-row">
      <div className="feed-ico int">R</div>
      <div className="feed-body">
        <div className="top">Series D closed · $240M at $6.8B post</div>
        <div className="sub">Lead · Sequoia Capital</div>
      </div>
      <div className="feed-time">14mo</div>
    </div>
  </div>
</div>

    </>
  );
}

export default function Dashboard() {
  return (
    <>

{/* KPI row: 4 cells, generous */}
<div className="kpi-row">
  <div className="kpi">
    <div className="lbl">Portfolio NAV</div>
    <div className="val">$4,218,905</div>
    <div className="sub"><span className="up chg">+$84,122 · +2.04%</span><span className="t3">24H</span></div>
  </div>
  <div className="kpi">
    <div className="lbl">Internal Holdings<span className="market-tag int">INT</span></div>
    <div className="val">$2,817,440</div>
    <div className="sub"><span className="t3">66.8% · 8 positions</span></div>
  </div>
  <div className="kpi">
    <div className="lbl">External Holdings<span className="market-tag ext">EXT</span></div>
    <div className="val">$1,291,085</div>
    <div className="sub"><span className="up chg">+4.6%</span><span className="t3">14 positions</span></div>
  </div>
  <div className="kpi">
    <div className="lbl">Unrealized P&amp;L</div>
    <div className="val up">+$682,417</div>
    <div className="sub"><span className="up chg">+19.3%</span><span className="t3">lifetime</span></div>
  </div>
</div>

{/* Main dashboard grid */}
<div className="dash-grid">

  {/* EXTERNAL MARKET */}
  <section className="panel">
    <div className="panel-head">
      <h3><span className="dot ext"></span>External Market <span className="market-tag ext">LIVE</span></h3>
      <div className="controls">
        <button className="chip on">Movers</button>
        <button className="chip">Volume</button>
        <button className="chip">New</button>
      </div>
    </div>
    <table className="mkt-tbl">
      <thead>
        <tr><th>Issuer</th><th className="r">Last</th><th className="r">24H</th><th className="r">Vol 24H</th><th className="r">7D</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><div className="ticker"><div className="logo">CA</div><div className="name"><div className="n">Cascade AI</div><div className="s">CAS · Series C</div></div></div></td>
          <td className="r">$412.08</td>
          <td className="r up">+8.42%</td>
          <td className="r">$12.14M</td>
          <td className="r"><svg className="spark" width="80" height="22"><polyline points="0,18 10,17 20,15 30,13 40,12 50,9 60,10 70,6 80,3" fill="none" stroke="#00A684" strokeWidth="1.6"/></svg></td>
        </tr>
        <tr>
          <td><div className="ticker"><div className="logo">OB</div><div className="name"><div className="n">Obsidian Labs</div><div className="s">OBS · Series B</div></div></div></td>
          <td className="r">$228.19</td>
          <td className="r up">+5.71%</td>
          <td className="r">$2.91M</td>
          <td className="r"><svg className="spark" width="80" height="22"><polyline points="0,16 10,18 20,13 30,15 40,10 50,12 60,8 70,6 80,4" fill="none" stroke="#00A684" strokeWidth="1.6"/></svg></td>
        </tr>
        <tr>
          <td><div className="ticker"><div className="logo">NV</div><div className="name"><div className="n">Nova Robotics</div><div className="s">NVR · Series D</div></div></div></td>
          <td className="r">$142.80</td>
          <td className="r up">+3.14%</td>
          <td className="r">$4.82M</td>
          <td className="r"><svg className="spark" width="80" height="22"><polyline points="0,15 10,13 20,11 30,12 40,9 50,10 60,6 70,7 80,3" fill="none" stroke="#00A684" strokeWidth="1.6"/></svg></td>
        </tr>
        <tr>
          <td><div className="ticker"><div className="logo">HL</div><div className="name"><div className="n">Helios Compute</div><div className="s">HLO · Series C</div></div></div></td>
          <td className="r">$86.14</td>
          <td className="r down">-1.82%</td>
          <td className="r">$1.62M</td>
          <td className="r"><svg className="spark" width="80" height="22"><polyline points="0,6 10,8 20,7 30,10 40,9 50,11 60,10 70,13 80,14" fill="none" stroke="#EF4444" strokeWidth="1.6"/></svg></td>
        </tr>
        <tr>
          <td><div className="ticker"><div className="logo">PR</div><div className="name"><div className="n">Prism Networks</div><div className="s">PRX · Series B</div></div></div></td>
          <td className="r">$31.60</td>
          <td className="r down">-2.31%</td>
          <td className="r">$0.64M</td>
          <td className="r"><svg className="spark" width="80" height="22"><polyline points="0,5 10,7 20,6 30,9 40,8 50,10 60,9 70,12 80,14" fill="none" stroke="#EF4444" strokeWidth="1.6"/></svg></td>
        </tr>
      </tbody>
    </table>
  </section>

  {/* INTERNAL MARKET */}
  <section className="panel">
    <div className="panel-head">
      <h3><span className="dot int"></span>Internal Market <span className="market-tag int">VENTURE-PRICED</span></h3>
      <div className="controls">
        <button className="chip on">Rounds</button>
        <button className="chip">Marks</button>
        <button className="chip">Issuances</button>
      </div>
    </div>
    <table className="mkt-tbl">
      <thead>
        <tr><th>Issuer</th><th className="r">Valuation</th><th className="r">Round</th><th className="r">Δ Last</th><th className="r">Dated</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><div className="ticker"><div className="logo">FN</div><div className="name"><div className="n">Foundry Nuclear</div><div className="s">FND · Pre-IPO</div></div></div></td>
          <td className="r">$8.4B</td>
          <td className="r int">Series F</td>
          <td className="r up">+140%</td>
          <td className="r t3">11d</td>
        </tr>
        <tr>
          <td><div className="ticker"><div className="logo">AP</div><div className="name"><div className="n">Aperture Bio</div><div className="s">APT · Series C</div></div></div></td>
          <td className="r">$1.2B</td>
          <td className="r int">Series C</td>
          <td className="r up">+67%</td>
          <td className="r t3">22d</td>
        </tr>
        <tr>
          <td><div className="ticker"><div className="logo">VR</div><div className="name"><div className="n">Verdant Climate</div><div className="s">VRD · Series B</div></div></div></td>
          <td className="r">$640M</td>
          <td className="r int">Series B</td>
          <td className="r up">+45%</td>
          <td className="r t3">1mo</td>
        </tr>
        <tr>
          <td><div className="ticker"><div className="logo">LC</div><div className="name"><div className="n">Lucid Materials</div><div className="s">LCD · Series A</div></div></div></td>
          <td className="r">$180M</td>
          <td className="r int">Series A</td>
          <td className="r up">+22%</td>
          <td className="r t3">2mo</td>
        </tr>
        <tr>
          <td><div className="ticker"><div className="logo">MR</div><div className="name"><div className="n">Meridian Health</div><div className="s">MRH · Series D</div></div></div></td>
          <td className="r">$3.1B</td>
          <td className="r int">Series D</td>
          <td className="r down">-8%</td>
          <td className="r t3">2mo</td>
        </tr>
      </tbody>
    </table>
  </section>

  {/* SIDEBAR */}
  <aside className="vstack" style={{gap: '28px'}}>
    <section className="panel">
      <div className="panel-head">
        <h3>Watchlist</h3>
        <button className="chip">+ Add</button>
      </div>
      <div className="watch-row">
        <div className="left"><div className="mini-logo">CA</div>
          <div><div className="mono" style={{fontSize: '12.5px', color: 'var(--white)'}}>CAS <span className="badge ext">EXT</span></div><div className="t3 mono" style={{fontSize: '10.5px', marginTop: '2px'}}>Cascade AI</div></div>
        </div>
        <div className="right"><div className="px">$412.08</div><div className="chg up">+8.42%</div></div>
      </div>
      <div className="watch-row">
        <div className="left"><div className="mini-logo">FN</div>
          <div><div className="mono" style={{fontSize: '12.5px', color: 'var(--white)'}}>FND <span className="badge int">INT</span></div><div className="t3 mono" style={{fontSize: '10.5px', marginTop: '2px'}}>Foundry Nuclear</div></div>
        </div>
        <div className="right"><div className="px">$94.20</div><div className="chg t3">mark</div></div>
      </div>
      <div className="watch-row">
        <div className="left"><div className="mini-logo">NV</div>
          <div><div className="mono" style={{fontSize: '12.5px', color: 'var(--white)'}}>NVR <span className="badge ext">EXT</span></div><div className="t3 mono" style={{fontSize: '10.5px', marginTop: '2px'}}>Nova Robotics</div></div>
        </div>
        <div className="right"><div className="px">$142.80</div><div className="chg up">+3.14%</div></div>
      </div>
      <div className="watch-row">
        <div className="left"><div className="mini-logo">OB</div>
          <div><div className="mono" style={{fontSize: '12.5px', color: 'var(--white)'}}>OBS <span className="badge ext">EXT</span></div><div className="t3 mono" style={{fontSize: '10.5px', marginTop: '2px'}}>Obsidian Labs</div></div>
        </div>
        <div className="right"><div className="px">$228.19</div><div className="chg up">+5.71%</div></div>
      </div>
      <div className="watch-row">
        <div className="left"><div className="mini-logo">AP</div>
          <div><div className="mono" style={{fontSize: '12.5px', color: 'var(--white)'}}>APT <span className="badge int">INT</span></div><div className="t3 mono" style={{fontSize: '10.5px', marginTop: '2px'}}>Aperture Bio</div></div>
        </div>
        <div className="right"><div className="px">$54.22</div><div className="chg t3">mark</div></div>
      </div>
    </section>

    <section className="panel">
      <div className="panel-head">
        <h3>Feed</h3>
        <button className="chip">All</button>
      </div>
      <div className="feed-row">
        <div className="feed-ico int">R</div>
        <div className="feed-body">
          <div className="top"><span className="int">Foundry Nuclear</span> closed Series F at $8.4B</div>
          <div className="sub">$2.1B raised · mark updated</div>
        </div>
        <div className="feed-time">2h</div>
      </div>
      <div className="feed-row">
        <div className="feed-ico ext">L</div>
        <div className="feed-body">
          <div className="top"><span className="ext">Cascade AI</span> listed external shares</div>
          <div className="sub">Opening mark $298 · 2.1M sh</div>
        </div>
        <div className="feed-time">4h</div>
      </div>
      <div className="feed-row">
        <div className="feed-ico">T</div>
        <div className="feed-body">
          <div className="top">You bought 240 NVR at $141.22</div>
          <div className="sub">Filled in 42ms · $33,892.80</div>
        </div>
        <div className="feed-time">6h</div>
      </div>
      <div className="feed-row">
        <div className="feed-ico">U</div>
        <div className="feed-body">
          <div className="top">Nova Robotics posted Q3 results</div>
          <div className="sub">Revenue $142M · +84% YoY</div>
        </div>
        <div className="feed-time">1d</div>
      </div>
    </section>

    <section className="panel">
      <div className="panel-head">
        <h3>Perp Funding</h3>
        <span className="mono t3" style={{fontSize: '10px', letterSpacing: '0.1em'}}>8H · LIVE</span>
      </div>
      <div className="watch-row">
        <div className="left"><div className="mini-logo">NV</div>
          <div><div className="mono" style={{fontSize: '12.5px', color: 'var(--white)'}}>NVR-PERP</div><div className="t3 mono" style={{fontSize: '10.5px', marginTop: '2px'}}>OI $48.2M</div></div>
        </div>
        <div className="right"><div className="px up">+0.0112%</div><div className="chg t3">24h +0.034%</div></div>
      </div>
      <div className="watch-row">
        <div className="left"><div className="mini-logo">CA</div>
          <div><div className="mono" style={{fontSize: '12.5px', color: 'var(--white)'}}>CAS-PERP</div><div className="t3 mono" style={{fontSize: '10.5px', marginTop: '2px'}}>OI $92.4M</div></div>
        </div>
        <div className="right"><div className="px up">+0.0284%</div><div className="chg t3">24h +0.085%</div></div>
      </div>
      <div className="watch-row">
        <div className="left"><div className="mini-logo">HL</div>
          <div><div className="mono" style={{fontSize: '12.5px', color: 'var(--white)'}}>HLO-PERP</div><div className="t3 mono" style={{fontSize: '10.5px', marginTop: '2px'}}>OI $14.8M</div></div>
        </div>
        <div className="right"><div className="px down">-0.0088%</div><div className="chg t3">24h -0.026%</div></div>
      </div>
      <div className="watch-row">
        <div className="left"><div className="mini-logo">OB</div>
          <div><div className="mono" style={{fontSize: '12.5px', color: 'var(--white)'}}>OBS-PERP</div><div className="t3 mono" style={{fontSize: '10.5px', marginTop: '2px'}}>OI $22.1M</div></div>
        </div>
        <div className="right"><div className="px up">+0.0156%</div><div className="chg t3">24h +0.048%</div></div>
      </div>
    </section>
  </aside>
</div>

{/* Recent activity */}
<section className="panel activity-strip">
  <div className="panel-head">
    <h3>Recent Market Activity</h3>
    <div className="controls">
      <button className="chip on">All</button>
      <button className="chip">Trades</button>
      <button className="chip">Issuances</button>
      <button className="chip">Rounds</button>
    </div>
  </div>
  <table className="activity-table">
    <thead><tr><th>Time</th><th>Event</th><th>Issuer</th><th>Market</th><th className="r">Size</th><th className="r">Price</th><th className="r">Total</th><th className="r">Counterparty</th></tr></thead>
    <tbody>
      <tr><td className="mono t3">14:31:52</td><td><span className="tag buy">BUY</span></td><td>Cascade AI · CAS</td><td><span className="badge ext">EXT</span></td><td className="r">1,240</td><td className="r">$412.08</td><td className="r">$511,179</td><td className="r t3">0x42a…ec9</td></tr>
      <tr><td className="mono t3">14:31:44</td><td><span className="tag sell">SELL</span></td><td>Helios Compute · HLO</td><td><span className="badge ext">EXT</span></td><td className="r">820</td><td className="r">$86.14</td><td className="r">$70,634</td><td className="r t3">0x18b…c42</td></tr>
      <tr><td className="mono t3">14:31:30</td><td><span className="tag round">ROUND</span></td><td>Foundry Nuclear · FND</td><td><span className="badge int">INT</span></td><td className="r">—</td><td className="r">$94.20</td><td className="r">$2.1B raise</td><td className="r t3">Sequoia, GC, ARK</td></tr>
      <tr><td className="mono t3">14:31:18</td><td><span className="tag buy">BUY</span></td><td>Nova Robotics · NVR</td><td><span className="badge ext">EXT</span></td><td className="r">240</td><td className="r">$142.80</td><td className="r">$34,272</td><td className="r t3">0x82c…a01</td></tr>
      <tr><td className="mono t3">14:30:40</td><td><span className="tag issue">ISSUE</span></td><td>Aperture Bio · APT</td><td><span className="badge int">INT</span></td><td className="r">180,000</td><td className="r">$54.22</td><td className="r">$9.76M</td><td className="r t3">Issuer</td></tr>
    </tbody>
  </table>
</section>

    </>
  );
}

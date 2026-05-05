export default function Derivatives() {
  return (
    <>

<div className="kpi-row">
  <div className="kpi">
    <div className="lbl">Open Interest · All</div>
    <div className="val">$284.2M</div>
    <div className="sub"><span className="up chg">+$18.4M · +6.9%</span><span className="t3">24H</span></div>
  </div>
  <div className="kpi">
    <div className="lbl">Perps OI</div>
    <div className="val">$212.6M</div>
    <div className="sub"><span className="t3">17 contracts · 24 × max leverage</span></div>
  </div>
  <div className="kpi">
    <div className="lbl">Options OI</div>
    <div className="val">$71.6M</div>
    <div className="sub"><span className="t3">184 strikes · 8 expiries</span></div>
  </div>
  <div className="kpi">
    <div className="lbl">24H Volume</div>
    <div className="val">$68.4M</div>
    <div className="sub"><span className="up chg">+14.2%</span><span className="t3">perps + options</span></div>
  </div>
</div>

<div className="dash-grid">

  {/* PERPS TABLE */}
  <section className="panel" style={{gridColumn: 'span 2'}}>
    <div className="panel-head">
      <h3><span className="dot ext"></span>Perpetual Futures <span className="market-tag ext">LIVE</span></h3>
      <div className="controls">
        <button className="chip on">Funding</button>
        <button className="chip">Volume</button>
        <button className="chip">OI</button>
        <button className="chip">Basis</button>
      </div>
    </div>
    <table className="mkt-tbl">
      <thead>
        <tr><th>Contract</th><th className="r">Mark</th><th className="r">Spot</th><th className="r">Basis</th><th className="r">Funding 8H</th><th className="r">24H Vol</th><th className="r">OI</th><th className="r">Max Lev.</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><div className="ticker"><div className="logo">CA</div><div className="name"><div className="n">CAS-PERP</div><div className="s">Cascade AI · Perpetual</div></div></div></td>
          <td className="r">$412.94</td><td className="r">$412.08</td>
          <td className="r up">+0.21%</td>
          <td className="r"><span className="funding-pill pos">+0.0284%</span></td>
          <td className="r">$18.42M</td><td className="r">$92.4M</td>
          <td className="r t3">10×</td>
        </tr>
        <tr>
          <td><div className="ticker"><div className="logo">NV</div><div className="name"><div className="n">NVR-PERP</div><div className="s">Nova Robotics · Perpetual</div></div></div></td>
          <td className="r">$142.92</td><td className="r">$142.80</td>
          <td className="r up">+0.08%</td>
          <td className="r"><span className="funding-pill pos">+0.0112%</span></td>
          <td className="r">$7.84M</td><td className="r">$48.2M</td>
          <td className="r t3">5×</td>
        </tr>
        <tr>
          <td><div className="ticker"><div className="logo">OB</div><div className="name"><div className="n">OBS-PERP</div><div className="s">Obsidian Labs · Perpetual</div></div></div></td>
          <td className="r">$228.62</td><td className="r">$228.19</td>
          <td className="r up">+0.19%</td>
          <td className="r"><span className="funding-pill pos">+0.0156%</span></td>
          <td className="r">$4.12M</td><td className="r">$22.1M</td>
          <td className="r t3">5×</td>
        </tr>
        <tr>
          <td><div className="ticker"><div className="logo">HL</div><div className="name"><div className="n">HLO-PERP</div><div className="s">Helios Compute · Perpetual</div></div></div></td>
          <td className="r">$86.02</td><td className="r">$86.14</td>
          <td className="r down">−0.14%</td>
          <td className="r"><span className="funding-pill neg">−0.0088%</span></td>
          <td className="r">$2.84M</td><td className="r">$14.8M</td>
          <td className="r t3">5×</td>
        </tr>
        <tr>
          <td><div className="ticker"><div className="logo">KE</div><div className="name"><div className="n">KEP-PERP</div><div className="s">Kepler Space · Perpetual</div></div></div></td>
          <td className="r">$64.98</td><td className="r">$64.92</td>
          <td className="r up">+0.09%</td>
          <td className="r"><span className="funding-pill pos">+0.0068%</span></td>
          <td className="r">$1.62M</td><td className="r">$8.9M</td>
          <td className="r t3">3×</td>
        </tr>
        <tr>
          <td><div className="ticker"><div className="logo">PR</div><div className="name"><div className="n">PRX-PERP</div><div className="s">Prism Networks · Perpetual</div></div></div></td>
          <td className="r">$31.54</td><td className="r">$31.60</td>
          <td className="r down">−0.19%</td>
          <td className="r"><span className="funding-pill neg">−0.0042%</span></td>
          <td className="r">$0.94M</td><td className="r">$4.2M</td>
          <td className="r t3">3×</td>
        </tr>
        <tr>
          <td><div className="ticker"><div className="logo">VT</div><div className="name"><div className="n">VTG-PERP</div><div className="s">Vantage Defense · Perpetual</div></div></div></td>
          <td className="r">$208.82</td><td className="r">$208.44</td>
          <td className="r up">+0.18%</td>
          <td className="r"><span className="funding-pill pos">+0.0094%</span></td>
          <td className="r">$2.18M</td><td className="r">$11.4M</td>
          <td className="r t3">5×</td>
        </tr>
      </tbody>
    </table>
  </section>

  {/* SIDEBAR — OPTIONS SUMMARY */}
  <aside className="vstack" style={{gap: '28px'}}>
    <section className="panel">
      <div className="panel-head">
        <h3>Options Expiries</h3>
        <button className="chip">View All</button>
      </div>
      <div className="watch-row">
        <div className="left">
          <div className="mini-logo" style={{background: 'linear-gradient(135deg,var(--up-bg),var(--down-bg))', color: 'var(--silver-1)'}}>F1</div>
          <div><div className="mono" style={{fontSize: '12.5px', color: 'var(--white)'}}>Feb 26 · Q1</div><div className="t3 mono" style={{fontSize: '10.5px', marginTop: '2px'}}>42 strikes · 8 issuers</div></div>
        </div>
        <div className="right"><div className="px">$28.4M</div><div className="chg t3">OI</div></div>
      </div>
      <div className="watch-row">
        <div className="left">
          <div className="mini-logo" style={{background: 'linear-gradient(135deg,var(--up-bg),var(--down-bg))', color: 'var(--silver-1)'}}>M1</div>
          <div><div className="mono" style={{fontSize: '12.5px', color: 'var(--white)'}}>Mar 26 · Q1</div><div className="t3 mono" style={{fontSize: '10.5px', marginTop: '2px'}}>56 strikes · 12 issuers</div></div>
        </div>
        <div className="right"><div className="px">$18.2M</div><div className="chg t3">OI</div></div>
      </div>
      <div className="watch-row">
        <div className="left">
          <div className="mini-logo" style={{background: 'linear-gradient(135deg,var(--up-bg),var(--down-bg))', color: 'var(--silver-1)'}}>J2</div>
          <div><div className="mono" style={{fontSize: '12.5px', color: 'var(--white)'}}>Jun 26 · Q2</div><div className="t3 mono" style={{fontSize: '10.5px', marginTop: '2px'}}>48 strikes · 9 issuers</div></div>
        </div>
        <div className="right"><div className="px">$14.8M</div><div className="chg t3">OI</div></div>
      </div>
      <div className="watch-row">
        <div className="left">
          <div className="mini-logo" style={{background: 'linear-gradient(135deg,var(--up-bg),var(--down-bg))', color: 'var(--silver-1)'}}>S2</div>
          <div><div className="mono" style={{fontSize: '12.5px', color: 'var(--white)'}}>Sep 26 · Q3</div><div className="t3 mono" style={{fontSize: '10.5px', marginTop: '2px'}}>24 strikes · 6 issuers</div></div>
        </div>
        <div className="right"><div className="px">$6.4M</div><div className="chg t3">OI</div></div>
      </div>
      <div className="watch-row">
        <div className="left">
          <div className="mini-logo" style={{background: 'linear-gradient(135deg,var(--up-bg),var(--down-bg))', color: 'var(--silver-1)'}}>D2</div>
          <div><div className="mono" style={{fontSize: '12.5px', color: 'var(--white)'}}>Dec 26 · Q4</div><div className="t3 mono" style={{fontSize: '10.5px', marginTop: '2px'}}>14 strikes · 4 issuers</div></div>
        </div>
        <div className="right"><div className="px">$3.8M</div><div className="chg t3">OI</div></div>
      </div>
    </section>

    <section className="panel">
      <div className="panel-head">
        <h3>IV · 30D Surface</h3>
        <span className="mono t3" style={{fontSize: '10px', letterSpacing: '0.1em'}}>CAS · ATM</span>
      </div>
      <div className="iv-grid">
        <div className="iv-cell" style={{background: 'rgba(127,220,174,0.08)'}}>38</div>
        <div className="iv-cell" style={{background: 'rgba(127,220,174,0.14)'}}>42</div>
        <div className="iv-cell" style={{background: 'rgba(127,220,174,0.22)'}}>48</div>
        <div className="iv-cell" style={{background: 'rgba(244,184,208,0.30)'}}>58</div>
        <div className="iv-cell" style={{background: 'rgba(244,184,208,0.24)'}}>54</div>
        <div className="iv-cell" style={{background: 'rgba(244,184,208,0.18)'}}>49</div>
        <div className="iv-cell" style={{background: 'rgba(244,184,208,0.12)'}}>44</div>

        <div className="iv-cell" style={{background: 'rgba(127,220,174,0.12)'}}>44</div>
        <div className="iv-cell" style={{background: 'rgba(127,220,174,0.20)'}}>49</div>
        <div className="iv-cell" style={{background: 'rgba(127,220,174,0.28)'}}>56</div>
        <div className="iv-cell" style={{background: 'rgba(244,184,208,0.38)'}}>68</div>
        <div className="iv-cell" style={{background: 'rgba(244,184,208,0.30)'}}>62</div>
        <div className="iv-cell" style={{background: 'rgba(244,184,208,0.22)'}}>55</div>
        <div className="iv-cell" style={{background: 'rgba(244,184,208,0.14)'}}>50</div>

        <div className="iv-cell" style={{background: 'rgba(127,220,174,0.18)'}}>52</div>
        <div className="iv-cell" style={{background: 'rgba(127,220,174,0.26)'}}>58</div>
        <div className="iv-cell" style={{background: 'rgba(127,220,174,0.34)'}}>64</div>
        <div className="iv-cell" style={{background: 'rgba(244,184,208,0.46)'}}>78</div>
        <div className="iv-cell" style={{background: 'rgba(244,184,208,0.36)'}}>70</div>
        <div className="iv-cell" style={{background: 'rgba(244,184,208,0.26)'}}>62</div>
        <div className="iv-cell" style={{background: 'rgba(244,184,208,0.16)'}}>56</div>

        <div className="iv-cell" style={{background: 'rgba(127,220,174,0.14)'}}>48</div>
        <div className="iv-cell" style={{background: 'rgba(127,220,174,0.22)'}}>54</div>
        <div className="iv-cell" style={{background: 'rgba(127,220,174,0.30)'}}>60</div>
        <div className="iv-cell" style={{background: 'rgba(244,184,208,0.40)'}}>70</div>
        <div className="iv-cell" style={{background: 'rgba(244,184,208,0.32)'}}>64</div>
        <div className="iv-cell" style={{background: 'rgba(244,184,208,0.24)'}}>57</div>
        <div className="iv-cell" style={{background: 'rgba(244,184,208,0.14)'}}>52</div>
      </div>
      <div className="hstack" style={{justifyContent: 'space-between', padding: '12px 18px', borderTop: '1px solid var(--silver-6)', fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--silver-3)', letterSpacing: '0.1em', textTransform: 'uppercase'}}>
        <span>−20% · STRIKE</span><span>ATM</span><span>+20% · STRIKE</span>
      </div>
    </section>
  </aside>
</div>

{/* OPTIONS CHAIN */}
<section className="panel" style={{marginTop: '28px'}}>
  <div className="panel-head">
    <h3>Options Chain · Cascade AI · CAS <span className="badge ext">EXT</span></h3>
    <div className="controls">
      <button className="chip">Feb 26</button>
      <button className="chip on">Mar 26</button>
      <button className="chip">Jun 26</button>
      <button className="chip">Sep 26</button>
      <button className="chip">Dec 26</button>
    </div>
  </div>
  <div style={{padding: '4px 16px 16px'}}>
    <table className="opt-chain">
      <thead>
        <tr>
          <th colSpan="5" className="call">CALLS</th>
          <th className="strike">STRIKE</th>
          <th colSpan="5" className="put">PUTS</th>
        </tr>
        <tr>
          <th className="call">IV</th><th className="call">Δ</th><th className="call">BID</th><th className="call">ASK</th><th className="call">OI</th>
          <th className="strike">PRICE</th>
          <th className="put">BID</th><th className="put">ASK</th><th className="put">OI</th><th className="put">Δ</th><th className="put">IV</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="call-data itm">44.2%</td><td className="call-data itm">0.82</td><td className="call-data itm">82.40</td><td className="call-data itm">83.20</td><td className="call-data itm">1,420</td>
          <td className="strike">$340</td>
          <td className="put-data">4.20</td><td className="put-data">4.80</td><td className="put-data">2,240</td><td className="put-data">−0.18</td><td className="put-data">48.4%</td>
        </tr>
        <tr>
          <td className="call-data itm">46.8%</td><td className="call-data itm">0.74</td><td className="call-data itm">54.80</td><td className="call-data itm">55.80</td><td className="call-data itm">2,120</td>
          <td className="strike">$380</td>
          <td className="put-data">8.40</td><td className="put-data">9.20</td><td className="put-data">3,840</td><td className="put-data">−0.26</td><td className="put-data">52.2%</td>
        </tr>
        <tr>
          <td className="call-data itm">52.4%</td><td className="call-data itm">0.58</td><td className="call-data itm">34.20</td><td className="call-data itm">34.80</td><td className="call-data itm">4,280</td>
          <td className="strike">$400</td>
          <td className="put-data">14.40</td><td className="put-data">15.20</td><td className="put-data">5,120</td><td className="put-data">−0.42</td><td className="put-data">56.8%</td>
        </tr>
        <tr style={{background: 'rgba(168,200,247,0.04)'}}>
          <td className="call-data">58.2%</td><td className="call-data">0.48</td><td className="call-data">24.80</td><td className="call-data">25.60</td><td className="call-data">6,840</td>
          <td className="strike" style={{color: 'var(--ext)'}}>$412 ATM</td>
          <td className="put-data">22.40</td><td className="put-data">23.20</td><td className="put-data">4,620</td><td className="put-data">−0.52</td><td className="put-data">58.4%</td>
        </tr>
        <tr>
          <td className="call-data">64.8%</td><td className="call-data">0.38</td><td className="call-data">18.20</td><td className="call-data">18.80</td><td className="call-data">5,420</td>
          <td className="strike">$440</td>
          <td className="put-data">34.60</td><td className="put-data">35.40</td><td className="put-data">2,820</td><td className="put-data">−0.62</td><td className="put-data">62.2%</td>
        </tr>
        <tr>
          <td className="call-data">70.4%</td><td className="call-data">0.26</td><td className="call-data">10.80</td><td className="call-data">11.40</td><td className="call-data">3,840</td>
          <td className="strike">$480</td>
          <td className="put-data">60.20</td><td className="put-data">61.40</td><td className="put-data">1,240</td><td className="put-data">−0.78</td><td className="put-data">68.4%</td>
        </tr>
        <tr>
          <td className="call-data">76.2%</td><td className="call-data">0.18</td><td className="call-data">6.40</td><td className="call-data">6.80</td><td className="call-data">2,240</td>
          <td className="strike">$520</td>
          <td className="put-data">92.40</td><td className="put-data">94.20</td><td className="put-data">620</td><td className="put-data">−0.88</td><td className="put-data">74.2%</td>
        </tr>
        <tr>
          <td className="call-data">82.8%</td><td className="call-data">0.12</td><td className="call-data">3.80</td><td className="call-data">4.20</td><td className="call-data">1,420</td>
          <td className="strike">$560</td>
          <td className="put-data">128.20</td><td className="put-data">130.40</td><td className="put-data">320</td><td className="put-data">−0.94</td><td className="put-data">80.6%</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

{/* FUTURES STRIP */}
<section className="panel" style={{marginTop: '28px'}}>
  <div className="panel-head">
    <h3>Dated Futures · Term Structure</h3>
    <div className="controls">
      <button className="chip on">CAS</button>
      <button className="chip">NVR</button>
      <button className="chip">OBS</button>
      <button className="chip">HLO</button>
    </div>
  </div>
  <table className="mkt-tbl">
    <thead>
      <tr><th>Contract</th><th className="r">Mark</th><th className="r">Spot</th><th className="r">Premium</th><th className="r">Annualized</th><th className="r">Days to Exp.</th><th className="r">24H Vol</th><th className="r">OI</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><div className="ticker"><div className="logo">CA</div><div className="name"><div className="n">CAS-F-MAR26</div><div className="s">March 27, 2026</div></div></div></td>
        <td className="r">$418.40</td><td className="r">$412.08</td>
        <td className="r up">+1.53%</td><td className="r up">+16.8%</td>
        <td className="r t3">34d</td><td className="r">$1.84M</td><td className="r">$8.4M</td>
      </tr>
      <tr>
        <td><div className="ticker"><div className="logo">CA</div><div className="name"><div className="n">CAS-F-JUN26</div><div className="s">June 26, 2026</div></div></div></td>
        <td className="r">$432.80</td><td className="r">$412.08</td>
        <td className="r up">+5.03%</td><td className="r up">+18.4%</td>
        <td className="r t3">125d</td><td className="r">$3.42M</td><td className="r">$14.2M</td>
      </tr>
      <tr>
        <td><div className="ticker"><div className="logo">CA</div><div className="name"><div className="n">CAS-F-SEP26</div><div className="s">September 25, 2026</div></div></div></td>
        <td className="r">$452.40</td><td className="r">$412.08</td>
        <td className="r up">+9.78%</td><td className="r up">+19.2%</td>
        <td className="r t3">216d</td><td className="r">$1.92M</td><td className="r">$6.8M</td>
      </tr>
      <tr>
        <td><div className="ticker"><div className="logo">CA</div><div className="name"><div className="n">CAS-F-DEC26</div><div className="s">December 25, 2026</div></div></div></td>
        <td className="r">$478.60</td><td className="r">$412.08</td>
        <td className="r up">+16.14%</td><td className="r up">+20.4%</td>
        <td className="r t3">307d</td><td className="r">$0.82M</td><td className="r">$3.2M</td>
      </tr>
    </tbody>
  </table>
</section>

    </>
  );
}

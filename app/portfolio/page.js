export default function Portfolio() {
  return (
    <>

<div className="port-hero">
  <div className="port-summary">
    <div className="lbl">Total Portfolio Value · All Markets</div>
    <div className="big">$4,218,905<span className="decimals">.22</span></div>
    <div className="chg-row">
      <span className="up">+$84,122 (+2.04%)</span><span className="t3">24H</span>
      <span className="up">+$682,417 (+19.3%)</span><span className="t3">LIFETIME</span>
      <span className="t3">COST BASIS $3,536,488</span>
    </div>

    <div className="port-chart-strip">
      <svg viewBox="0 0 1200 110" preserveAspectRatio="none" style={{width: '100%', height: '110px'}}>
        <defs>
          <linearGradient id="portFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#A8C8F7" stopOpacity="0.22"/>
            <stop offset="100%" stopColor="#A8C8F7" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path d="M0,78 L60,74 L120,82 L180,68 L240,64 L300,70 L360,52 L420,58 L480,46 L540,50 L600,42 L660,32 L720,44 L780,28 L840,24 L900,34 L960,20 L1020,24 L1080,14 L1140,18 L1200,10 L1200,110 L0,110 Z" fill="url(#portFill)"/>
        <path d="M0,78 L60,74 L120,82 L180,68 L240,64 L300,70 L360,52 L420,58 L480,46 L540,50 L600,42 L660,32 L720,44 L780,28 L840,24 L900,34 L960,20 L1020,24 L1080,14 L1140,18 L1200,10" fill="none" stroke="#A8C8F7" strokeWidth="1.5"/>
      </svg>
    </div>
    <div className="hstack" style={{justifyContent: 'space-between', marginTop: '10px', fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--silver-3)', letterSpacing: '0.14em'}}>
      <span>1Y AGO · $1.42M</span>
      <span className="t4">━━━━━</span>
      <span>NOW · $4.22M</span>
    </div>
  </div>

  <div className="port-alloc">
    <div className="section-label">Allocation</div>
    <div className="alloc-bar">
      <div className="alloc-seg int" style={{width: '66.8%'}}></div>
      <div className="alloc-seg ext" style={{width: '30.6%'}}></div>
      <div className="alloc-seg cash" style={{width: '2.6%'}}></div>
    </div>
    <div className="alloc-legend">
      <div className="alloc-row"><div className="alloc-sw" style={{background: 'var(--int)'}}></div><div className="name">Internal · Venture-priced</div><div className="pct">66.8%</div><div className="val">$2.82M</div></div>
      <div className="alloc-row"><div className="alloc-sw" style={{background: 'var(--ext)'}}></div><div className="name">External · Liquid</div><div className="pct">30.6%</div><div className="val">$1.29M</div></div>
      <div className="alloc-row"><div className="alloc-sw" style={{background: 'var(--silver-3)'}}></div><div className="name">Cash · USDC</div><div className="pct">2.6%</div><div className="val">$110K</div></div>
    </div>
    <div style={{borderTop: '1px solid var(--silver-6)', paddingTop: '14px', marginTop: '4px', fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--silver-3)', display: 'flex', justifyContent: 'space-between', letterSpacing: '0.08em'}}>
      <span>LIQUIDITY RATIO</span><span className="ext" style={{fontSize: '13px'}}>33.2%</span>
    </div>
  </div>
</div>

{/* PERP POSITIONS */}
<div className="holdings-section">
  <div className="holdings-head">
    <h3><span className="dot ext"></span>Perp Positions <span className="market-tag ext">DERIVATIVES</span></h3>
    <div className="summary">
      <span><span className="lbl">POSITIONS</span> <span className="w">4</span></span>
      <span><span className="lbl">NOTIONAL</span> <span className="w">$284,620</span></span>
      <span><span className="lbl">MARGIN USED</span> <span className="w">$56,924</span></span>
      <span className="up">+$34,180 · +13.6% 24H</span>
    </div>
  </div>
  <table className="holdings-tbl">
    <thead><tr><th>Contract</th><th className="r">Side</th><th className="r">Size</th><th className="r">Entry</th><th className="r">Mark</th><th className="r">Liq. Price</th><th className="r">Funding 8H</th><th className="r">Margin</th><th className="r">Unreal P&amp;L</th></tr></thead>
    <tbody>
      <tr>
        <td><div className="ticker"><div className="logo">NV</div><div className="name"><div className="n">NVR-PERP</div><div className="s">Nova Robotics · 5×</div></div></div></td>
        <td className="r"><span className="perp-row-side long">LONG</span></td>
        <td className="r">820</td><td className="r">$138.44</td><td className="r">$142.92</td>
        <td className="r" style={{color: 'var(--down)'}}>$112.80</td>
        <td className="r"><span className="funding-pill pos">+0.011%</span></td>
        <td className="r">$23,441</td>
        <td className="r up">+$18,366 · +15.8%</td>
      </tr>
      <tr>
        <td><div className="ticker"><div className="logo">CA</div><div className="name"><div className="n">CAS-PERP</div><div className="s">Cascade AI · 3×</div></div></div></td>
        <td className="r"><span className="perp-row-side long">LONG</span></td>
        <td className="r">180</td><td className="r">$374.20</td><td className="r">$412.08</td>
        <td className="r" style={{color: 'var(--down)'}}>$282.60</td>
        <td className="r"><span className="funding-pill pos">+0.028%</span></td>
        <td className="r">$24,725</td>
        <td className="r up">+$6,818 · +27.6%</td>
      </tr>
      <tr>
        <td><div className="ticker"><div className="logo">HL</div><div className="name"><div className="n">HLO-PERP</div><div className="s">Helios Compute · 4×</div></div></div></td>
        <td className="r"><span className="perp-row-side short">SHORT</span></td>
        <td className="r">960</td><td className="r">$91.40</td><td className="r">$86.14</td>
        <td className="r" style={{color: 'var(--down)'}}>$108.20</td>
        <td className="r"><span className="funding-pill neg">-0.009%</span></td>
        <td className="r">$20,674</td>
        <td className="r up">+$5,050 · +24.4%</td>
      </tr>
      <tr>
        <td><div className="ticker"><div className="logo">PR</div><div className="name"><div className="n">PRX-PERP</div><div className="s">Prism Networks · 2×</div></div></div></td>
        <td className="r"><span className="perp-row-side short">SHORT</span></td>
        <td className="r">3,200</td><td className="r">$32.40</td><td className="r">$31.60</td>
        <td className="r" style={{color: 'var(--down)'}}>$47.80</td>
        <td className="r"><span className="funding-pill neg">-0.004%</span></td>
        <td className="r">$50,560</td>
        <td className="r up">+$2,560 · +5.1%</td>
      </tr>
    </tbody>
  </table>
</div>

{/* OPTIONS POSITIONS */}
<div className="holdings-section">
  <div className="holdings-head">
    <h3><span className="dot ext"></span>Options Positions <span className="market-tag ext">DERIVATIVES</span></h3>
    <div className="summary">
      <span><span className="lbl">POSITIONS</span> <span className="w">3</span></span>
      <span><span className="lbl">PREMIUM PAID</span> <span className="w">$18,440</span></span>
      <span><span className="lbl">NET DELTA</span> <span className="w">+0.62</span></span>
      <span className="up">+$4,820 · +26.1% 24H</span>
    </div>
  </div>
  <table className="holdings-tbl">
    <thead><tr><th>Contract</th><th className="r">Side</th><th className="r">Size</th><th className="r">Mark</th><th className="r">IV</th><th className="r">Δ</th><th className="r">Θ / day</th><th className="r">Expiry</th><th className="r">Unreal P&amp;L</th></tr></thead>
    <tbody>
      <tr>
        <td><div className="ticker"><div className="logo">CA</div><div className="name"><div className="n">CAS-C-450-Q1</div><div className="s">Cascade AI · $450 CALL</div></div></div></td>
        <td className="r"><span className="perp-row-side long">BUY</span></td>
        <td className="r">20</td><td className="r">$38.40</td><td className="r">68.4%</td>
        <td className="r up">+0.54</td><td className="r down">−$42</td>
        <td className="r t3">Mar 2026</td>
        <td className="r up">+$3,420 · +24.8%</td>
      </tr>
      <tr>
        <td><div className="ticker"><div className="logo">NV</div><div className="name"><div className="n">NVR-P-130-Q1</div><div className="s">Nova Robotics · $130 PUT</div></div></div></td>
        <td className="r"><span className="perp-row-side long">BUY</span></td>
        <td className="r">40</td><td className="r">$4.80</td><td className="r">52.2%</td>
        <td className="r down">−0.28</td><td className="r down">−$18</td>
        <td className="r t3">Feb 2026</td>
        <td className="r down">−$320 · −1.6%</td>
      </tr>
      <tr>
        <td><div className="ticker"><div className="logo">OB</div><div className="name"><div className="n">OBS-C-240-Q2</div><div className="s">Obsidian Labs · $240 CALL</div></div></div></td>
        <td className="r"><span className="perp-row-side short">SELL</span></td>
        <td className="r">12</td><td className="r">$18.40</td><td className="r">44.8%</td>
        <td className="r up">+0.36</td><td className="r up">+$22</td>
        <td className="r t3">Jun 2026</td>
        <td className="r up">+$1,720 · +13.3%</td>
      </tr>
    </tbody>
  </table>
</div>

<div className="holdings-section">
  <div className="holdings-head">
    <h3><span className="dot ext"></span>External Spot Holdings <span className="market-tag ext">LIQUID</span></h3>
    <div className="summary">
      <span><span className="lbl">POSITIONS</span> <span className="w">14</span></span>
      <span><span className="lbl">VALUE</span> <span className="w">$1,291,085</span></span>
      <span className="up">+$59,428 · +4.8% 24H</span>
    </div>
  </div>
  <table className="holdings-tbl">
    <thead><tr><th>Issuer</th><th className="r">Size</th><th className="r">Avg Cost</th><th className="r">Last</th><th className="r">Market Value</th><th className="r">Unreal P&amp;L</th><th className="r">24H</th><th className="r">Liquidity</th></tr></thead>
    <tbody>
      <tr>
        <td><div className="ticker"><div className="logo">CA</div><div className="name"><div className="n">Cascade AI</div><div className="s">CAS</div></div></div></td>
        <td className="r">820</td><td className="r">$310.80</td><td className="r">$412.08</td><td className="r">$337,906</td>
        <td className="r up">+$83,050 · +32.6%</td><td className="r up">+8.42%</td>
        <td className="r"><span className="liq-pill high">HIGH</span></td>
      </tr>
      <tr>
        <td><div className="ticker"><div className="logo">NV</div><div className="name"><div className="n">Nova Robotics</div><div className="s">NVR</div></div></div></td>
        <td className="r">1,420</td><td className="r">$128.40</td><td className="r">$142.80</td><td className="r">$202,776</td>
        <td className="r up">+$20,448 · +11.2%</td><td className="r up">+3.14%</td>
        <td className="r"><span className="liq-pill high">HIGH</span></td>
      </tr>
      <tr>
        <td><div className="ticker"><div className="logo">OB</div><div className="name"><div className="n">Obsidian Labs</div><div className="s">OBS</div></div></div></td>
        <td className="r">640</td><td className="r">$180.22</td><td className="r">$228.19</td><td className="r">$146,041</td>
        <td className="r up">+$30,701 · +26.6%</td><td className="r up">+5.71%</td>
        <td className="r"><span className="liq-pill med">MED</span></td>
      </tr>
      <tr>
        <td><div className="ticker"><div className="logo">HL</div><div className="name"><div className="n">Helios Compute</div><div className="s">HLO</div></div></div></td>
        <td className="r">1,840</td><td className="r">$92.14</td><td className="r">$86.14</td><td className="r">$158,498</td>
        <td className="r down">-$11,040 · -6.5%</td><td className="r down">-1.82%</td>
        <td className="r"><span className="liq-pill high">HIGH</span></td>
      </tr>
      <tr>
        <td><div className="ticker"><div className="logo">PR</div><div className="name"><div className="n">Prism Networks</div><div className="s">PRX</div></div></div></td>
        <td className="r">6,800</td><td className="r">$32.80</td><td className="r">$31.60</td><td className="r">$214,880</td>
        <td className="r down">-$8,160 · -3.7%</td><td className="r down">-2.31%</td>
        <td className="r"><span className="liq-pill med">MED</span></td>
      </tr>
    </tbody>
  </table>
</div>

<div className="holdings-section">
  <div className="holdings-head">
    <h3><span className="dot int"></span>Internal Holdings <span className="market-tag int">VENTURE-PRICED</span></h3>
    <div className="summary">
      <span><span className="lbl">POSITIONS</span> <span className="w">8</span></span>
      <span><span className="lbl">VALUE</span> <span className="w">$2,817,440</span></span>
      <span><span className="lbl">LAST MARK</span> <span className="w">11d ago</span></span>
    </div>
  </div>
  <table className="holdings-tbl">
    <thead><tr><th>Issuer</th><th className="r">Size</th><th className="r">Cost Basis</th><th className="r">Current Mark</th><th className="r">Mark Value</th><th className="r">Unreal P&amp;L</th><th className="r">Last Round</th><th className="r">Liquidity</th></tr></thead>
    <tbody>
      <tr>
        <td><div className="ticker"><div className="logo">CA</div><div className="name"><div className="n">Cascade AI</div><div className="s">CAS</div></div></div></td>
        <td className="r">1,800</td><td className="r">$94.60</td><td className="r">$381.00</td><td className="r">$685,800</td>
        <td className="r up">+$515,520 · +303%</td><td className="r int">Series C · 3mo</td>
        <td className="r"><span className="liq-pill low">LOW</span></td>
      </tr>
      <tr>
        <td><div className="ticker"><div className="logo">AP</div><div className="name"><div className="n">Aperture Bio</div><div className="s">APT</div></div></div></td>
        <td className="r">10,800</td><td className="r">$32.80</td><td className="r">$54.22</td><td className="r">$585,576</td>
        <td className="r up">+$231,336 · +65.3%</td><td className="r int">Series C · 22d</td>
        <td className="r"><span className="liq-pill low">LOW</span></td>
      </tr>
      <tr>
        <td><div className="ticker"><div className="logo">FN</div><div className="name"><div className="n">Foundry Nuclear</div><div className="s">FND</div></div></div></td>
        <td className="r">6,200</td><td className="r">$38.40</td><td className="r">$94.20</td><td className="r">$584,040</td>
        <td className="r up">+$346,160 · +145%</td><td className="r int">Series F · 11d</td>
        <td className="r"><span className="liq-pill low">LOW</span></td>
      </tr>
      <tr>
        <td><div className="ticker"><div className="logo">LC</div><div className="name"><div className="n">Lucid Materials</div><div className="s">LCD</div></div></div></td>
        <td className="r">48,400</td><td className="r">$6.70</td><td className="r">$8.14</td><td className="r">$393,976</td>
        <td className="r up">+$69,696 · +21.5%</td><td className="r int">Series A · 2mo</td>
        <td className="r"><span className="liq-pill low">LOW</span></td>
      </tr>
      <tr>
        <td><div className="ticker"><div className="logo">VR</div><div className="name"><div className="n">Verdant Climate</div><div className="s">VRD</div></div></div></td>
        <td className="r">12,400</td><td className="r">$15.70</td><td className="r">$22.80</td><td className="r">$282,720</td>
        <td className="r up">+$87,940 · +45.2%</td><td className="r int">Series B · 1mo</td>
        <td className="r"><span className="liq-pill low">LOW</span></td>
      </tr>
    </tbody>
  </table>
</div>

    </>
  );
}

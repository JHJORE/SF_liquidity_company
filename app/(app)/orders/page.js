'use client';
import { useState } from 'react';

export default function Orders() {
  const [state, setState] = useState('normal');
  return (
    <>

<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px'}}>
  <div>
    <h2 style={{fontFamily: 'var(--serif)', fontSize: '28px', color: 'var(--white)', fontWeight: '400', letterSpacing: '-0.01em'}}>Orders</h2>
    <div style={{fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--silver-3)', letterSpacing: '0.04em', marginTop: '4px'}}>Place · amend · cancel. Review fills and rejections.</div>
  </div>
  <div className="state-switcher">
    {[['normal','Normal'],['loading','Loading'],['empty','Empty'],['error','Error'],['denied','Permission']].map(([s,l]) => (
      <button key={s} className={state === s ? 'on' : ''} onClick={() => setState(s)}>{l}</button>
    ))}
  </div>
</div>

{state === "normal" && (<div className="orders-status-bar">
  <div className="orders-status"><div className="lbl">Open</div><div className="val">7</div><div className="sub">$284,620 notional</div></div>
  <div className="orders-status"><div className="lbl">Filled · Today</div><div className="val">14</div><div className="sub">$428,940 gross</div></div>
  <div className="orders-status"><div className="lbl">Canceled · Today</div><div className="val">3</div><div className="sub">user-initiated</div></div>
  <div className="orders-status"><div className="lbl">Rejected · Today</div><div className="val down" style={{color: 'var(--down)'}}>1</div><div className="sub">insufficient_margin</div></div>
</div>)}

{state === "normal" && (<div className="panel">
  <div className="panel-head">
    <h3>All Orders</h3>
    <div className="controls">
      <button className="chip on">All</button>
      <button className="chip">Open</button>
      <button className="chip">Filled</button>
      <button className="chip">Canceled</button>
      <button className="chip">Rejected</button>
    </div>
  </div>
  <table className="mkt-tbl">
    <thead>
      <tr><th>Placed</th><th>Instrument</th><th>Side</th><th>Type</th><th className="r">Size</th><th className="r">Price</th><th className="r">Filled</th><th className="r">Status</th></tr>
    </thead>
    <tbody>
      <tr>
        <td className="mono t3">14:32:04</td>
        <td><div className="ticker"><div className="logo">NV</div><div className="name"><div className="n">NVR-PERP</div><div className="s">Nova Robotics · 5×</div></div></div></td>
        <td><span className="perp-row-side long">LONG</span></td>
        <td className="t2">Market · IOC</td>
        <td className="r">240</td><td className="r">$142.92</td>
        <td className="r up">240 / 240</td>
        <td className="r"><span className="order-status-pill filled">Filled</span></td>
      </tr>
      <tr>
        <td className="mono t3">14:28:42</td>
        <td><div className="ticker"><div className="logo">CA</div><div className="name"><div className="n">CAS</div><div className="s">Cascade AI · Spot</div></div></div></td>
        <td><span className="tag buy">BUY</span></td>
        <td className="t2">Limit · GTC</td>
        <td className="r">480</td><td className="r">$408.00</td>
        <td className="r">0 / 480</td>
        <td className="r"><span className="order-status-pill open">Open</span></td>
      </tr>
      <tr>
        <td className="mono t3">14:22:18</td>
        <td><div className="ticker"><div className="logo">OB</div><div className="name"><div className="n">OBS-C-240-Q2</div><div className="s">Obsidian $240 CALL · Jun 26</div></div></div></td>
        <td><span className="tag sell">SELL</span></td>
        <td className="t2">Limit · GTC</td>
        <td className="r">12</td><td className="r">$18.40</td>
        <td className="r up">12 / 12</td>
        <td className="r"><span className="order-status-pill filled">Filled</span></td>
      </tr>
      <tr>
        <td className="mono t3">14:14:32</td>
        <td><div className="ticker"><div className="logo">HL</div><div className="name"><div className="n">HLO-PERP</div><div className="s">Helios Compute · 4×</div></div></div></td>
        <td><span className="perp-row-side short">SHORT</span></td>
        <td className="t2">Limit · Post-only</td>
        <td className="r">960</td><td className="r">$86.40</td>
        <td className="r">420 / 960</td>
        <td className="r"><span className="order-status-pill partial">Partial</span></td>
      </tr>
      <tr>
        <td className="mono t3">14:08:54</td>
        <td><div className="ticker"><div className="logo">FN</div><div className="name"><div className="n">FND-PERP</div><div className="s">Foundry Nuclear · 10×</div></div></div></td>
        <td><span className="perp-row-side long">LONG</span></td>
        <td className="t2">Market · IOC</td>
        <td className="r">800</td><td className="r">—</td>
        <td className="r t3">0 / 800</td>
        <td className="r"><span className="order-status-pill rejected">Rejected</span></td>
      </tr>
      <tr>
        <td className="mono t3">13:52:20</td>
        <td><div className="ticker"><div className="logo">PR</div><div className="name"><div className="n">PRX</div><div className="s">Prism Networks · Spot</div></div></div></td>
        <td><span className="tag sell">SELL</span></td>
        <td className="t2">Stop · $30.00</td>
        <td className="r">2,400</td><td className="r">$30.00</td>
        <td className="r">0 / 2,400</td>
        <td className="r"><span className="order-status-pill canceled">Canceled</span></td>
      </tr>
    </tbody>
  </table>
</div>)}

{/* LOADING STATE */}
{state === "loading" && (<div className="panel">
  <div className="panel-head"><h3>All Orders</h3></div>
  <div style={{padding: '16px 22px'}}>
    <div style={{display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px'}}>
      <div className="skeleton-bar" style={{width: '28px', height: '28px'}}></div>
      <div style={{flex: '1'}}><div className="skeleton-bar" style={{width: '40%', marginBottom: '6px'}}></div><div className="skeleton-bar" style={{width: '25%', height: '9px'}}></div></div>
      <div className="skeleton-bar" style={{width: '80px', height: '11px'}}></div>
      <div className="skeleton-bar" style={{width: '60px', height: '11px'}}></div>
    </div>
    <div style={{display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px'}}>
      <div className="skeleton-bar" style={{width: '28px', height: '28px'}}></div>
      <div style={{flex: '1'}}><div className="skeleton-bar" style={{width: '35%', marginBottom: '6px'}}></div><div className="skeleton-bar" style={{width: '20%', height: '9px'}}></div></div>
      <div className="skeleton-bar" style={{width: '80px', height: '11px'}}></div>
      <div className="skeleton-bar" style={{width: '60px', height: '11px'}}></div>
    </div>
    <div style={{display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px'}}>
      <div className="skeleton-bar" style={{width: '28px', height: '28px'}}></div>
      <div style={{flex: '1'}}><div className="skeleton-bar" style={{width: '45%', marginBottom: '6px'}}></div><div className="skeleton-bar" style={{width: '22%', height: '9px'}}></div></div>
      <div className="skeleton-bar" style={{width: '80px', height: '11px'}}></div>
      <div className="skeleton-bar" style={{width: '60px', height: '11px'}}></div>
    </div>
    <div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
      <div className="skeleton-bar" style={{width: '28px', height: '28px'}}></div>
      <div style={{flex: '1'}}><div className="skeleton-bar" style={{width: '30%', marginBottom: '6px'}}></div><div className="skeleton-bar" style={{width: '18%', height: '9px'}}></div></div>
      <div className="skeleton-bar" style={{width: '80px', height: '11px'}}></div>
      <div className="skeleton-bar" style={{width: '60px', height: '11px'}}></div>
    </div>
  </div>
</div>)}

{/* EMPTY STATE */}
{state === "empty" && (<div className="panel">
  <div className="panel-head"><h3>All Orders</h3></div>
  <div className="empty-state">
    <div className="ico">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6h18M7 12h10M11 18h2"/></svg>
    </div>
    <div className="t">No orders yet</div>
    <div className="s">Place your first order from any issuer page. Open orders, fills, and rejections will appear here.</div>
    <button className="btn-secondary cta">Browse markets →</button>
  </div>
</div>)}

{/* ERROR STATE */}
{state === "error" && (<div>
  <div className="error-state">
    <div className="ico">⊘</div>
    <div className="body">
      <div className="t">Could not load your orders</div>
      <div className="s">The order service is temporarily unavailable. Your orders are safe — we're just having trouble displaying them.</div>
      <span className="code">ERR_ORDERS_503</span>
    </div>
    <button className="btn-secondary">Retry</button>
  </div>
  <div className="panel" style={{marginTop: '20px', opacity: '0.4', pointerEvents: 'none'}}>
    <div className="panel-head"><h3>All Orders</h3></div>
    <div style={{padding: '40px 22px', textAlign: 'center', color: 'var(--silver-4)', fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.08em'}}>DATA UNAVAILABLE</div>
  </div>
</div>)}

{/* PERMISSION DENIED STATE */}
{state === "denied" && (<div>
  <div className="permission-denied">
    <div className="ico">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="5" y="11" width="14" height="10"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>
    </div>
    <h3>Access Restricted</h3>
    <p>Order history requires the Investor role. Your current role (Operator) does not have access to this screen. Switch roles via the account menu, or contact your administrator.</p>
    <button className="btn-secondary">Request Access</button>
  </div>
</div>)}
    </>
  );
}

'use client';
import { useState, useEffect } from 'react';

function pad(n) {
  return String(n).padStart(2, '0');
}

export default function Statusbar() {
  const [utc, setUtc] = useState('--:--:--');

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setUtc(`${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="statusbar">
      <div className="stat-cell"><span className="dot int"></span><span className="lbl">INTERNAL</span><span className="val">OPEN</span><span className="t3">142 ISSUERS</span></div>
      <div className="stat-cell"><span className="dot ext"></span><span className="lbl">EXTERNAL</span><span className="val">OPEN</span><span className="t3">$42.18M · 24H</span></div>
      <div className="stat-cell"><span className="lbl">UTC</span><span className="val">{utc}</span></div>
      <div className="spacer"></div>
      <div className="stat-cell"><span className="lbl">SESSION</span><span className="val">Q4 · DAY 46</span></div>
      <div className="stat-cell"><span className="lbl">USDC</span><span className="val">1.0001</span></div>
    </div>
  );
}

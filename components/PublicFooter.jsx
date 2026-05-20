import Link from 'next/link';

export default function PublicFooter() {
  return (
    <footer className="public-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div><span className="mark"></span><span className="name">SAN FRANCISCO LIQUIDITY COMPANY</span></div>
            <p>Tokenized equity infrastructure for private companies. SEC-registered transfer agent · ATS-licensed venue.</p>
          </div>
          <div className="foot-col">
            <h4>Product</h4>
            <a href="/#features">Platform</a>
            <a href="/#how">How it works</a>
            <a href="/#pricing">Pricing</a>
            <Link href="/dashboard">Live demo</Link>
            <Link href="/docs">Documentation</Link>
          </div>
          <div className="foot-col">
            <h4>For</h4>
            <Link href="/admin/issuer">Issuers</Link>
            <Link href="/holder">Employees &amp; investors</Link>
            <a href="#">Funds</a>
            <a href="#">Law firms</a>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
            <a href="#">Contact</a>
          </div>
          <div className="foot-col">
            <h4>Legal</h4>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
            <a href="#">Compliance</a>
          </div>
        </div>
        <div className="foot-base">
          <div>© 2026 San Francisco Liquidity Company. All rights reserved.</div>
          <div>v2.4.1 · status: <span style={{ color: 'var(--mint)' }}>● operational</span></div>
        </div>
      </div>
    </footer>
  );
}

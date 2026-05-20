import Link from 'next/link';

export const metadata = {
  title: 'Docs · SFLC',
  description: 'API reference, smart contract documentation, and SDK guides for SFLC.',
};

export default function DocsPage() {
  return (
    <>
      <nav className="docs-nav">
        <Link href="/" className="brand">
          <span className="mark"></span>
          <span>SFLC</span>
        </Link>
        <span className="docs-tag">DOCS</span>
        <div className="docs-search">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="7" cy="7" r="5" />
            <path d="M11 11l3 3" />
          </svg>
          <input placeholder="Search docs, API, guides…" />
          <span className="kbd">⌘K</span>
        </div>
        <div className="docs-nav-links">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Demo</Link>
          <Link href="/login" className="cta">Sign in →</Link>
        </div>
      </nav>

      <div className="docs">
        <aside className="docs-sidebar">
          <div className="nav-group">
            <div className="nav-group-label">Get started</div>
            <a href="#overview" className="docs-nav-item active">Overview</a>
            <a href="#quickstart" className="docs-nav-item">Quickstart</a>
            <a href="#authentication" className="docs-nav-item">Authentication</a>
            <a href="#sandbox" className="docs-nav-item">Sandbox environment</a>
          </div>
          <div className="nav-group">
            <div className="nav-group-label">Core concepts</div>
            <a className="docs-nav-item">Token classes</a>
            <a className="docs-nav-item">Holders &amp; KYC</a>
            <a className="docs-nav-item">Programmable rules</a>
            <a className="docs-nav-item">Settlement</a>
            <a className="docs-nav-item">Transfer agent</a>
          </div>
          <div className="nav-group">
            <div className="nav-group-label">API reference</div>
            <a href="#api-transfers" className="docs-nav-item">Transfers</a>
            <a className="docs-nav-item">Issuances</a>
            <a className="docs-nav-item">Holders</a>
            <a className="docs-nav-item">Token classes</a>
            <a className="docs-nav-item">Compliance rules</a>
            <a className="docs-nav-item">Distributions</a>
            <a className="docs-nav-item">Audit log</a>
            <a className="docs-nav-item">Webhooks</a>
          </div>
          <div className="nav-group">
            <div className="nav-group-label">Smart contracts</div>
            <a className="docs-nav-item">ERC-3643</a>
            <a className="docs-nav-item">Compliance modules</a>
            <a className="docs-nav-item">Token recovery</a>
            <a className="docs-nav-item">Upgrade paths</a>
          </div>
          <div className="nav-group">
            <div className="nav-group-label">Compliance</div>
            <a className="docs-nav-item">Reg D 506(c)</a>
            <a className="docs-nav-item">Reg S</a>
            <a className="docs-nav-item">Rule 144A</a>
            <a className="docs-nav-item">Section 4(a)(7)</a>
            <a className="docs-nav-item">Reg A+ Tier 2</a>
          </div>
          <div className="nav-group">
            <div className="nav-group-label">SDKs</div>
            <a className="docs-nav-item">TypeScript</a>
            <a className="docs-nav-item">Python</a>
            <a className="docs-nav-item">Solidity (read-only)</a>
          </div>
        </aside>

        <main className="docs-main">
          <div className="docs-eyebrow">GET STARTED · OVERVIEW</div>
          <h1 id="overview">SFLC documentation</h1>
          <p className="lede">
            SFLC is the tokenized equity management system and ledger for private companies. This
            documentation covers the API, smart contracts, compliance architecture, and SDKs you&apos;ll
            use to integrate with the platform.
          </p>

          <div className="callout">
            <div className="label">PROD READY</div>
            <p>
              SFLC is in private beta with select issuers and is SOC 2 Type II certified.{' '}
              <strong>Request access</strong> via your account team or <code>sales@sflc.xyz</code>.
            </p>
          </div>

          <h2 id="quickstart">Quickstart</h2>
          <p>
            The SFLC API is REST-based and uses JSON for request and response bodies. Every request
            is authenticated with an API key passed via a bearer token.
          </p>
          <p>Set your API key:</p>
          <pre className="code" data-lang="bash">
            <span className="c"># sandbox</span>
            {'\n'}
            <span className="k">export</span> SFLC_API_KEY=<span className="s">&quot;sk_sandbox_4b71...8f3c&quot;</span>
            {'\n\n'}
            <span className="c"># production</span>
            {'\n'}
            <span className="k">export</span> SFLC_API_KEY=<span className="s">&quot;sk_live_4b71...8f3c&quot;</span>
          </pre>

          <p>Hit your first endpoint to verify connectivity:</p>
          <pre className="code" data-lang="bash">
            curl https://api.sflc.xyz/v1/organization \{'\n'}  -H <span className="s">&quot;Authorization: Bearer </span>$SFLC_API_KEY<span className="s">&quot;</span>
          </pre>

          <h2 id="authentication">Authentication</h2>
          <p>API keys are scoped to an organization and a permission set. The platform supports two key types:</p>
          <table className="params">
            <thead>
              <tr><th>Type</th><th>Prefix</th><th>Use</th></tr>
            </thead>
            <tbody>
              <tr><td>Sandbox</td><td>sk_sandbox_</td><td>Testing, no real settlement</td></tr>
              <tr><td>Live</td><td>sk_live_</td><td>Production · billable transfers</td></tr>
              <tr><td>Read-only</td><td>rk_live_</td><td>Reporting · cannot mutate state</td></tr>
              <tr><td>Webhook signing</td><td>whsec_</td><td>Verify webhook signatures</td></tr>
            </tbody>
          </table>

          <div className="callout warn">
            <div className="label">SECURITY</div>
            <p>
              Never expose live keys in client code. Rotate keys quarterly and immediately if
              compromised. Multi-sig admin actions are required for grants, issuances, and rule
              changes.
            </p>
          </div>

          <h2 id="api-transfers">Transfers API</h2>
          <p>Initiate, monitor, and settle programmatic equity transfers between holders.</p>

          <h3>Create a transfer</h3>
          <div className="endpoint-pill"><span className="method">POST</span><span>/v1/transfers</span></div>
          <pre className="code" data-lang="typescript">
            <span className="k">import</span> {'{ SFLC }'} <span className="k">from</span> <span className="s">&quot;@sflc/sdk&quot;</span>;
            {'\n\n'}
            <span className="k">const</span> <span className="v">sflc</span> = <span className="k">new</span> SFLC({'{ apiKey: process.env.SFLC_API_KEY }'});
            {'\n\n'}
            <span className="k">const</span> <span className="v">transfer</span> = <span className="k">await</span> sflc.transfers.create({'{'}
            {'\n  from: '}<span className="s">&quot;a.chen.eth&quot;</span>,
            {'\n  to:   '}<span className="s">&quot;paradigm-fund.eth&quot;</span>,
            {'\n  asset:    '}<span className="s">&quot;HLN-CMN-A&quot;</span>,
            {'\n  shares:   '}<span className="n">2500</span>,
            {'\n  exemption: '}<span className="s">&quot;144A&quot;</span>,
            {'\n}});'}
          </pre>

          <p>Parameters:</p>
          <table className="params">
            <thead>
              <tr><th>Field</th><th>Type</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td>from</td><td>address</td><td>Source wallet or ENS</td></tr>
              <tr><td>to</td><td>address</td><td>Destination wallet · must be on whitelist</td></tr>
              <tr><td>asset</td><td>string</td><td>Token class symbol (e.g. <code>HLN-CMN-A</code>)</td></tr>
              <tr><td>shares</td><td>number</td><td>Number of tokens to transfer</td></tr>
              <tr><td>exemption</td><td>enum</td><td>One of <code>144A</code>, <code>4(a)(7)</code>, <code>506(c)</code>, <code>Reg-S</code></td></tr>
              <tr><td>settlement</td><td>object</td><td>Settlement asset + chain (defaults to USDC/ethereum)</td></tr>
            </tbody>
          </table>

          <h3>Lifecycle webhooks</h3>
          <p>
            Subscribe to lifecycle events to keep your systems in sync with on-chain state. Events
            fire at every state transition:
          </p>
          <ul>
            <li><code>transfer.created</code> — request accepted</li>
            <li><code>transfer.preclear_pending</code> — compliance running</li>
            <li><code>transfer.precleared</code> — checks passed, awaiting match</li>
            <li><code>transfer.matched</code> — counterparty or pool fill</li>
            <li><code>transfer.settled</code> — atomic swap complete</li>
            <li><code>transfer.blocked</code> — rule violation, with reason code</li>
          </ul>

          <h2 id="sandbox">Sandbox environment</h2>
          <p>
            The sandbox mirrors production but uses synthetic stablecoin and a parallel ledger.
            Sandbox keys never trigger real settlement and never bill.
          </p>
          <ul>
            <li>Sandbox base URL: <code>https://api-sandbox.sflc.xyz</code></li>
            <li>Sandbox UI: <code>https://app-sandbox.sflc.xyz</code></li>
            <li>Test wallets pre-funded with synthetic USDC</li>
            <li>Pre-seeded organization with sample cap table</li>
          </ul>

          <div className="callout">
            <div className="label">NEXT</div>
            <p>
              Move to the <strong>Core concepts → Token classes</strong> section to learn how SFLC
              models equity instruments as programmable smart contracts.
            </p>
          </div>
        </main>

        <aside className="docs-toc">
          <div className="toc-label">ON THIS PAGE</div>
          <a href="#overview" className="active">Overview</a>
          <a href="#quickstart">Quickstart</a>
          <a href="#authentication">Authentication</a>
          <a href="#api-transfers">Transfers API</a>
          <a href="#api-transfers" className="h3">Create a transfer</a>
          <a href="#api-transfers" className="h3">Lifecycle webhooks</a>
          <a href="#sandbox">Sandbox environment</a>
        </aside>
      </div>
    </>
  );
}

import ScrollSpy from './scroll-spy';

const HERO_VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260228_065522_522e2295-ba22-457e-8fdb-fbcd68109c73.mp4';

export default function Home() {
  return (
    <>
      <section className="hero" id="top" data-screen-label="01 Hero">
        <video
          className="hero__bg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="hero__vignette" />

        <div className="nav-wrap">
          <nav className="nav" aria-label="Primary">
            <a className="logo" href="#top" aria-label="SoulSync home">
              <span className="logo__mark" aria-hidden="true" />
              <span className="logo__name">
                SoulSync
                <small>IT • DEVELOPMENT</small>
              </span>
            </a>
            <div className="menu" role="navigation">
              <a href="#services" data-nav="services" className="is-active">
                <span className="dot" />
                Services
              </a>
              <a href="#process" data-nav="process">
                Process
              </a>
              <a href="#contact" data-nav="contact">
                Contact
              </a>
            </div>
            <a className="nav__cta" href="#contact">
              Start a Project
              <span className="arrow" aria-hidden="true">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M13 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </nav>
        </div>

        <div className="corner tl">
          <span className="tick" />
          SOULSYNC / 026
        </div>
        <div className="corner tr">
          SYNC v4.2 · 99.99% UPTIME
          <span className="tick" />
        </div>

        <div className="hero__content">
          <span className="eyebrow">
            <span className="pulse" />
            Now shipping · Q2 cohort open
          </span>

          <h1 className="headline">
            Software that thinks
            <span className="l2">
              <em>in sync with your team.</em>
            </span>
          </h1>

          <p className="sub">
            Custom platforms, AI workflows, and cloud infrastructure —
            engineered end-to-end for ambitious product teams and operators.
          </p>
        </div>

      </section>

      <section className="deck" id="services" data-screen-label="02 Services">
        <div className="deck__inner">
          <div className="deck__head">
            <h2>
              What we <em>build</em>, end-to-end.
            </h2>
            <p className="lede">
              From first prototype to production at scale — a single team across
              product, design, and engineering. No handoffs, no
              agencies-of-agencies.
            </p>
          </div>
          <div className="services">
            <article className="svc">
              <div className="svc__num">01 / PLATFORM</div>
              <div className="svc__title">
                Custom <em>web platforms</em>
              </div>
              <p className="svc__body">
                SaaS dashboards, internal tools, marketplaces. TypeScript,
                React, Postgres, edge-rendered.
              </p>
              <span className="svc__chip">Next.js · Go · AWS</span>
            </article>
            <article className="svc">
              <div className="svc__num">02 / AI</div>
              <div className="svc__title">
                <em>AI</em> workflows &amp; agents
              </div>
              <p className="svc__body">
                RAG pipelines, evaluation harnesses, and agentic tools embedded
                into the products your team already uses.
              </p>
              <span className="svc__chip">LLMs · Vector DBs · Evals</span>
            </article>
            <article className="svc">
              <div className="svc__num">03 / CLOUD</div>
              <div className="svc__title">
                Cloud &amp; <em>infrastructure</em>
              </div>
              <p className="svc__body">
                Migrations, observability, and SOC 2-ready setups — designed to
                run quietly and scale on demand.
              </p>
              <span className="svc__chip">Terraform · K8s · Datadog</span>
            </article>
          </div>
        </div>
      </section>

      <section className="process" id="process" data-screen-label="03 Process">
        <div className="process__inner">
          <div className="process__head">
            <h2>
              How we <em>ship</em> together.
            </h2>
            <p className="lede">
              A four-phase loop. Tight feedback, weekly demos, and a single team
              accountable from kickoff to scale-up.
            </p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step__num">
                01<small>WK 1–2</small>
              </div>
              <div className="step__title">Discover</div>
              <p className="step__body">
                Map the problem, the constraints, and the riskiest unknowns.
                Define what done looks like.
              </p>
              <ul className="step__list">
                <li>Stakeholder calls</li>
                <li>Tech audit</li>
                <li>Scope &amp; budget</li>
              </ul>
            </div>
            <div className="step">
              <div className="step__num">
                02<small>WK 3–4</small>
              </div>
              <div className="step__title">Architect</div>
              <p className="step__body">
                Stack decisions, data model, and a clickable prototype before
                any production code is written.
              </p>
              <ul className="step__list">
                <li>System design</li>
                <li>Hi-fi prototype</li>
                <li>Spike &amp; eval</li>
              </ul>
            </div>
            <div className="step">
              <div className="step__num">
                03<small>WK 5–14</small>
              </div>
              <div className="step__title">Build</div>
              <p className="step__body">
                Two-week sprints, weekly demos, staging from day one. Your team
                in our standups, ours in yours.
              </p>
              <ul className="step__list">
                <li>CI/CD pipeline</li>
                <li>Weekly demos</li>
                <li>Pair on review</li>
              </ul>
            </div>
            <div className="step">
              <div className="step__num">
                04<small>WK 15+</small>
              </div>
              <div className="step__title">Operate</div>
              <p className="step__body">
                Observability, on-call, and a hand-off plan. We stay until your
                team can confidently take it over.
              </p>
              <ul className="step__list">
                <li>SLOs &amp; alerts</li>
                <li>Runbook</li>
                <li>Knowledge transfer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="banner" id="contact" data-screen-label="05 CTA">
        <div className="banner__inner">
          <h2>
            Have a hard problem?
            <br />
            <em>Let&apos;s build it.</em>
          </h2>
          <p>
            30-minute scoping call, free. We&apos;ll tell you whether we&apos;re
            the right team — and if not, who is.
          </p>
          <a className="banner__cta" href="mailto:hello@soulsync.today">
            Start a project
            <span className="arrow" aria-hidden="true">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M13 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
      </section>

      <footer className="foot" data-screen-label="06 Footer">
        <div className="foot__inner">
          <div className="foot__top">
            <div className="foot__brand">
              <h3>
                Software, in <em>sync</em> with your team.
              </h3>
              <p>
                SoulSync is a software studio building custom platforms, AI
                workflows, and cloud infrastructure for ambitious teams.
              </p>
              <a className="mini-cta" href="mailto:hello@soulsync.today">
                hello@soulsync.today
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </a>
            </div>
            <div className="foot__col">
              <h4>Studio</h4>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Engineering notes</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="foot__col">
              <h4>Practice</h4>
              <ul>
                <li>
                  <a href="#services">Platforms</a>
                </li>
                <li>
                  <a href="#services">AI workflows</a>
                </li>
                <li>
                  <a href="#services">Cloud &amp; infra</a>
                </li>
                <li>
                  <a href="#">Audits</a>
                </li>
              </ul>
            </div>
            <div className="foot__col">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
                <li>
                  <a href="#">GitHub</a>
                </li>
                <li>
                  <a href="#">X / Twitter</a>
                </li>
                <li>
                  <a href="#">Read.cv</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="foot__bottom">
            <span>© 2026 SoulSync Labs Ltd.</span>
            <div className="links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Security</a>
            </div>
            <span>BERLIN · LISBON · REMOTE</span>
          </div>
        </div>
      </footer>

      <ScrollSpy />
    </>
  );
}

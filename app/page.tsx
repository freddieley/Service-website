"use client";

import { useState } from "react";

const email = "freddie.ley@icloud.com";

const deliverables = [
  "Up to 4 pages",
  "Mobile-first design",
  "Contact / enquiry form",
  "Social links",
  "Basic SEO setup",
  "Fast deployment",
  "Domain connection",
  "1 revision round",
  "7 days of post-launch fixes",
];

const process = [
  {
    number: "01",
    title: "Tell me what you need",
    body: "Send a short brief by email. I’ll use it to understand your business, audience, goals and the scope of the site.",
  },
  {
    number: "02",
    title: "I shape the direction",
    body: "You’ll get a clear proposal and a visual direction before the build starts. No vague agency process.",
  },
  {
    number: "03",
    title: "We build it",
    body: "I design and develop the site around your business, with mobile use and the customer journey at the centre.",
  },
  {
    number: "04",
    title: "It goes live",
    body: "Once approved, I launch it, connect the domain and stay available for seven days for launch fixes.",
  },
];

const concepts = [
  {
    type: "BARBER",
    title: "Sharp cuts. Simple booking.",
    description:
      "A bold, appointment-focused concept for an independent barber. Built around work, availability and getting in the chair.",
    accent: "lime",
  },
  {
    type: "RESTAURANT",
    title: "Good food. Easy decisions.",
    description:
      "A visual concept for an independent restaurant, putting the menu, atmosphere, location and reservation path first.",
    accent: "orange",
  },
  {
    type: "TRADES",
    title: "Turn searches into enquiries.",
    description:
      "A conversion-focused concept for a local trade business. Clear services, trust signals and one obvious route to request a quote.",
    accent: "blue",
  },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function ScopeForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const business = String(form.get("business") ?? "").trim();
    const website = String(form.get("website") ?? "").trim();
    const emailAddress = String(form.get("email") ?? "").trim();
    const brief = String(form.get("brief") ?? "").trim();

    const subject = encodeURIComponent(
      `Website enquiry — ${business || "new project"}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Business: ${business}`,
        `Email: ${emailAddress}`,
        `Current website: ${website || "None"}`,
        "",
        "Project brief:",
        brief,
      ].join("\n"),
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form className="scope-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Your name
          <input name="name" required placeholder="Jane Smith" />
        </label>
        <label>
          Business
          <input name="business" required placeholder="Example Barbers" />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            required
            placeholder="you@business.com"
          />
        </label>
        <label>
          Current website
          <input name="website" placeholder="https://..." />
        </label>
      </div>

      <label>
        What do you need?
        <textarea
          name="brief"
          required
          rows={6}
          placeholder="Tell me about your business, what you want the website to do, and anything you already know you need."
        />
      </label>

      <input
        name="website_url"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="form-honeypot"
      />

      <button className="button button-dark" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending enquiry…" : "Send my enquiry"} <span>↗</span>
      </button>

      <p className="form-note">
        No calls. No pressure. I’ll reply by email with any questions, a scope
        and the next step.
      </p>

      {status === "success" ? (
        <p className="form-success" role="status">
          Enquiry sent. I’ll review it and reply by email as soon as I can.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="form-error" role="alert">
          {errorMessage}{" "}
          <a href={`mailto:${email}`}>Email me directly ↗</a>
        </p>
      ) : null}
    </form>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Bluo home">
          <span className="brand-mark">B</span>
          <span>BLUO</span>
        </a>

        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <button onClick={() => scrollTo("work")}>Work</button>
          <button onClick={() => scrollTo("offer")}>Offer</button>
          <button onClick={() => scrollTo("process")}>Process</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

        <button
          className="header-cta"
          onClick={() => scrollTo("contact")}
        >
          Start a project <span>↗</span>
        </button>
      </header>

      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />

        <div className="hero-copy">
          <p className="eyebrow"><span /> Independent web design & development</p>
          <h1>
            Your business
            <br />
            deserves a <em>better</em>
            <br />
            website.
          </h1>
          <p className="hero-lede">
            Modern, mobile-first websites for local businesses. Designed,
            built and launched by Freddie Ley.
          </p>
          <div className="hero-actions">
            <button className="button button-light" onClick={() => scrollTo("contact")}>
              Get your website <span>↗</span>
            </button>
            <button className="text-button" onClick={() => scrollTo("work")}>
              See what I build <span>↓</span>
            </button>
          </div>
        </div>

        <div className="hero-price-card">
          <div className="price-kicker">FOUNDING CLIENT PRICE</div>
          <div className="price">
            <span>£</span>199
          </div>
          <p>Complete website. Clear scope. No agency runaround.</p>
          <div className="price-line" />
          <div className="price-meta">
            <span>Up to 4 pages</span>
            <span>Mobile-first</span>
            <span>Built to launch</span>
          </div>
        </div>

        <div className="hero-bottom">
          <span>01 / 04</span>
          <span>Scroll to explore</span>
          <span>Southampton · UK</span>
        </div>
      </section>

      <section className="intro section">
        <div className="section-label">01 — The idea</div>
        <div className="intro-content">
          <h2>
            No agency
            <br />
            <span>nonsense.</span>
          </h2>
          <div>
            <p className="large-copy">
              Your website should make it easier for the right person to
              choose your business. That’s the job.
            </p>
            <p>
              I keep the process direct, the scope clear and the technology
              modern. You work with me from first email to launch — not a
              rotating account team.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="work section">
        <div className="section-topline">
          <div className="section-label">02 — Selected work</div>
          <span className="section-note">Concepts & client work</span>
        </div>

        <div className="work-intro">
          <h2>Built around<br /><span>the business.</span></h2>
          <p>
            Every site starts with what the customer needs to know and do.
            Here are a few directions Bluo can take.
          </p>
        </div>

        <div className="concept-grid">
          {concepts.map((concept, index) => (
            <article className={`concept-card concept-${concept.accent}`} key={concept.type}>
              <div className="browser">
                <div className="browser-top">
                  <span /><span /><span />
                  <small>bluo / concept-{index + 1}</small>
                </div>
                <div className="browser-screen">
                  <div className="mock-nav">
                    <strong>{concept.type === "BARBER" ? "NORTH /" : concept.type === "RESTAURANT" ? "COMMON" : "FIELD"}</strong>
                    <span>Menu&nbsp;&nbsp; About&nbsp;&nbsp; Contact</span>
                  </div>
                  <div className="mock-content">
                    <p>{concept.type}</p>
                    <h3>{concept.title}</h3>
                    <span className="mock-arrow">↗</span>
                  </div>
                  <div className="mock-footer">
                    <span>01</span><span>SCROLL</span><span>2026</span>
                  </div>
                </div>
              </div>
              <div className="concept-copy">
                <div>
                  <span className="mini-tag">{concept.type} / CONCEPT</span>
                  <h3>{concept.title}</h3>
                </div>
                <p>{concept.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="portfolio-gateway">
          <div>
            <span className="mini-tag">THE PORTFOLIO</span>
            <h3>Want to see more?</h3>
          </div>
          <p>
            The full portfolio will grow as real businesses launch with Bluo.
            Ask about any example and I’ll show you what’s behind it.
          </p>
          <a
            className="button button-outline"
            href="https://bluo.co.uk/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            Explore the portfolio <span>↗</span>
          </a>
        </div>
      </section>

      <section id="offer" className="offer section">
        <div className="section-label">03 — The offer</div>
        <div className="offer-grid">
          <div className="offer-copy">
            <p className="eyebrow"><span /> Launch package</p>
            <h2>
              Everything you need
              <br />
              to <em>get online.</em>
            </h2>
            <p className="large-copy">
              A focused, professional website for businesses that need a
              stronger online presence without a drawn-out agency project.
            </p>
          </div>

          <div className="offer-card">
            <div className="offer-card-head">
              <span>LAUNCH</span>
              <strong>£199</strong>
            </div>
            <p className="offer-card-sub">
              Founding-client price · one focused website
            </p>
            <ul>
              {deliverables.map((item) => (
                <li key={item}><span>✓</span>{item}</li>
              ))}
            </ul>
            <button className="button button-dark full" onClick={() => scrollTo("contact")}>
              Start with £199 <span>↗</span>
            </button>
            <p className="offer-footnote">
              Larger sites and additional functionality are scoped separately.
            </p>
          </div>
        </div>

        <div className="custom-strip">
          <span className="strip-number">+</span>
          <div>
            <strong>Need more?</strong>
            <p>For larger sites, booking systems, e-commerce or additional pages, I’ll scope a custom package by email.</p>
          </div>
          <span className="strip-arrow">→</span>
        </div>
      </section>

      <section id="process" className="process section">
        <div className="section-topline">
          <div className="section-label">04 — The process</div>
          <span className="section-note">Email-first. Always.</span>
        </div>
        <div className="process-heading">
          <h2>Simple from<br /><span>start to launch.</span></h2>
          <p>
            No calls required. Tell me what you need by email and we’ll work
            through the project in writing.
          </p>
        </div>
        <div className="process-grid">
          {process.map((item) => (
            <article className="process-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about section">
        <div className="about-mark">F</div>
        <div className="about-copy">
          <div className="section-label">05 — The person behind it</div>
          <h2>Built by<br /><span>Freddie Ley.</span></h2>
          <p className="large-copy">
            Independent developer. Direct communication. Modern technology.
          </p>
          <p>
            Bluo is deliberately small. You won’t be passed between an account
            manager, designer and developer. I handle the project directly,
            from the first brief through to launch.
          </p>
        </div>
      </section>

      <section id="contact" className="contact section">
        <div className="contact-heading">
          <div className="section-label">06 — Start a project</div>
          <h2>
            Have a website
            <br />
            <span>in mind?</span>
          </h2>
          <p>
            Send me the basics. I’ll review the scope and reply by email.
          </p>
          <a className="direct-email" href={`mailto:${email}`}>
            {email} <span>↗</span>
          </a>
        </div>
        <ScopeForm />
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <span className="brand-mark">B</span>
          <strong>BLUO</strong>
          <span>Web Design & Development</span>
        </div>
        <div className="footer-links">
          <a href="mailto:freddie.ley@icloud.com">Email</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a>
          <button onClick={() => scrollTo("work")}>Work</button>
          <a href="https://bluo.co.uk/portfolio" target="_blank" rel="noreferrer">Portfolio</a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Bluo / Freddie Ley</span>
          <span>Independent developer · UK</span>
        </div>
      </footer>
    </main>
  );
}

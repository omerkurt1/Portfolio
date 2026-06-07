import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from "@/components/icons";
import { ProjectVisual } from "@/components/project-visuals";

const loopStack = [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Socket.IO",
  "Leaflet",
  "JWT",
  "Docker",
];

const urbanPulseStack = [
  "Next.js",
  "React",
  "JavaScript",
  "Go",
  "Leaflet",
  "REST API",
  "Vercel",
  "Render",
];

const skillGroups = [
  {
    index: "01",
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Modern CSS"],
  },
  {
    index: "02",
    title: "Backend & Data",
    skills: ["Node.js", "Express.js", "Go", "MongoDB", "REST APIs", "JWT"],
  },
  {
    index: "03",
    title: "Systems & Delivery",
    skills: ["Docker", "Socket.IO", "Leaflet", "Vercel", "Render", "Git"],
  },
];

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      className={`external-link ${className}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      <ArrowUpRight />
    </a>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Ömer Faruk Kurt, home">
          ÖFK<span>/26</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#leadership">Leadership</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-availability" href="mailto:omerfk011@gmail.com">
          <span aria-hidden="true" />
          Open to opportunities
        </a>
      </header>

      <main id="main">
        <section className="hero section-shell" id="top">
          <div className="hero-kicker reveal">
            <span>Portfolio / 2026</span>
            <span>Computer Engineering</span>
          </div>

          <div className="hero-title reveal reveal-delay-1">
            <p>Ömer Faruk</p>
            <h1>
              Kurt<span className="hero-dot">.</span>
            </h1>
          </div>

          <div className="hero-lower reveal reveal-delay-2">
            <div className="hero-intro">
              <p className="overline">Frontend / Full-Stack Developer</p>
              <p className="hero-summary">
                I design and build digital systems that turn complex operations
                into clear, dependable products.
              </p>
            </div>
            <div className="hero-actions" aria-label="Profile links">
              <ExternalLink href="https://github.com/omerkurt1">
                <Github />
                GitHub
              </ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/%C3%B6mer-faruk-kurt-030104217">
                <Linkedin />
                LinkedIn
              </ExternalLink>
              <a
                className="external-link"
                href="/omer-faruk-kurt-resume.pdf"
                download
              >
                <Download />
                Download CV
              </a>
            </div>
          </div>

          <div className="hero-scroll" aria-hidden="true">
            <span>Selected work below</span>
            <span className="scroll-line" />
          </div>
        </section>

        <section className="about section-shell" id="about">
          <div className="section-label">
            <span>01</span>
            <p>About</p>
          </div>
          <div className="about-copy">
            <p className="about-lead">
              An engineer focused on the point where{" "}
              <em>product thinking</em>, interface craft, and robust system
              architecture meet.
            </p>
            <div className="about-detail">
              <p>
                As a Computer Engineering student, I work across the stack to
                create products that are useful in the real world, not just
                impressive in a demo. My work spans live logistics operations,
                municipal intelligence, API integration, and scalable frontend
                architecture.
              </p>
              <p>
                I am especially drawn to systems with meaningful operational
                constraints: real-time data, protected workflows, human
                decision-making, and the details that make software trustworthy.
              </p>
            </div>
          </div>
          <div className="about-aside">
            <span>Current focus</span>
            <strong>Production-ready web systems</strong>
            <span>Approach</span>
            <strong>Clarity over complexity</strong>
          </div>
        </section>

        <section className="work section-shell" id="work">
          <div className="section-heading">
            <div className="section-label">
              <span>02</span>
              <p>Featured Projects</p>
            </div>
            <p className="section-intro">
              Selected work shaped around consequential problems, from the
              movement of goods to the maintenance of cities.
            </p>
          </div>

          <article className="project project-loop">
            <div className="project-topline">
              <div>
                <span className="project-number">01 / Flagship</span>
                <span className="project-status">TÜBİTAK BiGG consideration</span>
              </div>
              <span className="project-year">2025—26</span>
            </div>

            <div className="project-main">
              <div className="project-copy">
                <div>
                  <p className="project-type">B2B SaaS / Logistics</p>
                  <h2>LOOP</h2>
                  <p className="project-role">
                    Frontend Developer &amp; System Architect
                  </p>
                </div>
                <p className="project-description">
                  A production-ready logistics platform that unifies courier
                  visibility, operational workflows, and financial control in
                  one scalable system.
                </p>
                <ul className="project-features">
                  <li>Real-time courier tracking and live operations</li>
                  <li>Protected administrative and financial workflows</li>
                  <li>Multilingual preferences and Dockerized deployment</li>
                </ul>
                <div className="project-links">
                  <ExternalLink href="https://lojistikweb-vitrin.vercel.app">
                    Live demo
                  </ExternalLink>
                  <ExternalLink href="https://github.com/omerkurt1/lojistikweb">
                    Source code
                  </ExternalLink>
                </div>
              </div>
              <ProjectVisual project="loop" />
            </div>

            <div className="stack-list" aria-label="LOOP technology stack">
              {loopStack.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </article>

          <article className="project project-urban">
            <div className="project-topline">
              <div>
                <span className="project-number">02 / Civic technology</span>
                <span className="project-status">Privacy-first</span>
              </div>
              <span className="project-year">2026</span>
            </div>

            <div className="project-main">
              <div className="project-copy">
                <div>
                  <p className="project-type">Municipal Intelligence</p>
                  <h2>UrbanPulse</h2>
                  <p className="project-role">
                    Co-Developer / Frontend &amp; API Integration
                  </p>
                </div>
                <p className="project-description">
                  A privacy-first platform that turns anonymized municipal
                  vehicle detections into a city-wide maintenance map and a
                  prioritized action queue.
                </p>
                <ul className="project-features">
                  <li>Municipal KPIs and district-level scans</li>
                  <li>Issue-management workflows and printable reports</li>
                  <li>Purpose-built data-minimization safeguards</li>
                </ul>
                <div className="project-links">
                  <ExternalLink href="https://city-intelligence-dashboard.vercel.app">
                    Live demo
                  </ExternalLink>
                  <ExternalLink href="https://github.com/omerkurt1/cursor">
                    Source code
                  </ExternalLink>
                </div>
              </div>
              <ProjectVisual project="urbanpulse" />
            </div>

            <div className="stack-list" aria-label="UrbanPulse technology stack">
              {urbanPulseStack.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </article>
        </section>

        <section className="leadership section-shell" id="leadership">
          <div className="section-label section-label-light">
            <span>03</span>
            <p>Leadership</p>
          </div>
          <div className="leadership-content">
            <p className="leadership-kicker">Beyond the codebase</p>
            <h2>
              Building spaces where technical curiosity becomes{" "}
              <em>shared momentum.</em>
            </h2>
            <div className="leadership-grid">
              <div className="leadership-title">
                <span>IEEE İSTÜN CyberSec</span>
                <strong>Founding Member</strong>
              </div>
              <div className="leadership-copy">
                <p>
                  Organized and hosted a cybersecurity and software architecture
                  panel featuring three senior engineering leaders from
                  Coca-Cola İçecek.
                </p>
                <p>
                  Helped shape workshops, CTF sessions, and industry networking
                  initiatives that connected students with practical security
                  and engineering experience.
                </p>
              </div>
            </div>
          </div>
          <div className="leadership-mark" aria-hidden="true">
            IEEE
            <span>CYBERSEC</span>
          </div>
        </section>

        <section className="skills section-shell" id="skills">
          <div className="section-heading">
            <div className="section-label">
              <span>04</span>
              <p>Capabilities</p>
            </div>
            <p className="section-intro">
              A practical toolkit for taking products from interface decisions
              to deployed systems.
            </p>
          </div>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <span>{group.index}</span>
                <h3>{group.title}</h3>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-shell" id="contact">
          <div className="contact-topline">
            <span>05 / Contact</span>
            <span>Let&apos;s build something useful.</span>
          </div>
          <div className="contact-main">
            <p>Have a role, project, or ambitious idea in mind?</p>
            <a href="mailto:omerfk011@gmail.com">
              Let&apos;s talk<span>.</span>
              <Mail />
            </a>
          </div>
          <div className="contact-footer">
            <p>Ömer Faruk Kurt / Portfolio 2026</p>
            <div>
              <ExternalLink href="https://github.com/omerkurt1">
                GitHub
              </ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/%C3%B6mer-faruk-kurt-030104217">
                LinkedIn
              </ExternalLink>
              <a href="/omer-faruk-kurt-resume.pdf" download>
                Résumé
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

import { useState } from 'react';
import { FEATURES, STEPS, TEAM_MEMBERS } from './data/disciplineData';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [downloadNotice, setDownloadNotice] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleDownload = () => {
    setDownloadNotice(true);
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="nav">
        <a className="brand" href="#home">
          <img src="/discipline-logo.png" alt="Discipline Logo" className="brand-icon" />
          DISCIPLINE
        </a>
        <nav className={menuOpen ? 'open' : ''}>
          <a href="#features" onClick={handleNavClick}>
            Features
          </a>
          <a href="#how" onClick={handleNavClick}>
            How it works
          </a>
          <a href="#team" onClick={handleNavClick}>
            Our team
          </a>
        </nav>
        <a className="nav-cta" href="#download">
          Get the app ↗
        </a>
        <button
          className="menu"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="dot"></span> YOUR DAY. YOUR RULES.
            </div>
            <h1>
              Build discipline.<br />
              <span>Own your time.</span>
            </h1>
            <p className="lead">
              Meet Discipline — a personal routine companion designed to help you wake up, focus on study, enjoy gaming with boundaries, and keep moving toward your goals.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#download">
                ↓ Download Discipline
              </a>
              <a className="button secondary" href="#features">
                Explore features <span>→</span>
              </a>
            </div>
            <div className="hero-note">
              <span>✦</span> Wake → Focus → Play → Recover → Repeat
            </div>
          </div>

          <div className="app-preview">
            <div className="preview-top">
              <span className="tiny-brand">
                <img src="/discipline-logo.png" alt="" className="tiny-brand-icon" />
                D / DISCIPLINE
              </span>
              <span className="live-pill">● DAILY FLOW</span>
            </div>
            <p className="muted">YOUR NEXT MOVE</p>
            <h2>Make today count.</h2>

            <div className="preview-card alarm">
              <div className="preview-icon">◷</div>
              <div>
                <b>Wake up with purpose</b>
                <small>Challenge-based alarms</small>
              </div>
              <span>↗</span>
            </div>

            <div className="preview-card study">
              <div className="preview-icon">⌁</div>
              <div>
                <b>Deep focus</b>
                <small>Study sessions &amp; timers</small>
              </div>
              <span>↗</span>
            </div>

            <div className="preview-card game">
              <div className="preview-icon">◇</div>
              <div>
                <b>Play with boundaries</b>
                <small>Controlled gaming sessions</small>
              </div>
              <span>↗</span>
            </div>

            <div className="preview-footer">
              <span>DAILY CONSISTENCY</span>
              <b>One step at a time.</b>
            </div>
          </div>
        </section>

        {/* Ticker Banner */}
        <section className="ticker">
          <span>FOCUS WITH INTENTION</span>
          <span>✳</span>
          <span>BUILD BETTER ROUTINES</span>
          <span>✳</span>
          <span>TRACK YOUR PROGRESS</span>
          <span>✳</span>
        </section>

        {/* Features Section */}
        <section className="section" id="features">
          <div className="section-head">
            <div>
              <div className="eyebrow">WHAT'S INSIDE</div>
              <h2>One app. A more intentional day.</h2>
            </div>
            <p>Tools that bring your wake-up routine, focus time, recreation, and progress into one place.</p>
          </div>

          <div className="feature-grid">
            {FEATURES.map((item) => (
              <article key={item.id} className="feature-card">
                <div className={`feature-symbol ${item.colorClass}`}>{item.symbol}</div>
                <span className="number">{item.number}</span>
                <h3>{item.title}</h3>
                {item.description && <p>{item.description}</p>}
              </article>
            ))}
          </div>
        </section>

        {/* How it works Section */}
        <section className="how-section" id="how">
          <div className="how-intro">
            <div className="eyebrow">THE DISCIPLINE LOOP</div>
            <h2>
              Small actions.<br />
              <span>Repeated daily.</span>
            </h2>
            <p>
              Discipline is built around a simple cycle: prepare your day, focus on what matters, take planned breaks, and learn from your progress.
            </p>
          </div>

          <div className="steps">
            {STEPS.map((step) => (
              <div key={step.number} className="step">
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <b>↗</b>
              </div>
            ))}
          </div>
        </section>

        {/* Download Section */}
        <section className="download-section" id="download">
          <div className="download-box">
            <div className="eyebrow">READY WHEN YOU ARE</div>
            <h2>
              Your next chapter<br />
              starts with a routine.
            </h2>
            <p>Get Discipline for Android and start building a day with more intention.</p>

            <a
              className="button primary download-btn"
              href="/Discipline.apk"
              download="Discipline.apk"
              onClick={handleDownload}
            >
              ↓ Download Discipline
            </a>

            <p className="download-hint" id="downloadHint">
              {downloadNotice
                ? 'Your Discipline.apk download should begin shortly.'
                : 'Download the official Discipline app to install it on your Android device.'}
            </p>

            <div className="requirements">
              ANDROID APP <span>•</span> PERMISSIONS MAY BE REQUIRED <span>•</span> DEVICE SUPPORT VARIES
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section" id="team">
          <div className="section-head">
            <div>
              <div className="eyebrow">THE PEOPLE BEHIND IT</div>
              <h2>Meet the team.</h2>
            </div>
            <p>A student project built around a simple idea: make it easier to follow through on your plans.</p>
          </div>

          <div className="team-grid">
            {TEAM_MEMBERS.map((member) => (
              <article key={member.name} className="team-card">
                <div className="avatar" aria-hidden="true">
                  {member.image ? (
                    <img src={member.image} alt={member.name} />
                  ) : (
                    member.initials
                  )}
                </div>
                <h3>{member.name}</h3>
                {(member.tags || member.tag) && (
                  <div className="team-tags">
                    {member.tags ? (
                      member.tags.map((t) => (
                        <span key={t} className="team-tag">
                          {t}
                        </span>
                      ))
                    ) : (
                      <span className="team-tag">{member.tag}</span>
                    )}
                  </div>
                )}
                {member.link && (
                  <a
                    href={member.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-link-btn"
                  >
                    {member.link.label}
                  </a>
                )}
              </article>
            ))}
          </div>

          <div className="team-featured-card">
            <div className="team-featured-info">
              <h3>Powered by AJ Studio</h3>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="disclaimer">
          <b>A note about Android capabilities</b>
          <p>
            Some alarm, app-restriction, scheduling, and notification features depend on Android permissions, device settings, and manufacturer behavior. The website describes the app's intended features; it does not guarantee that every feature works on every device.
          </p>
        </section>
      </main>

      <footer>
        <a className="brand" href="#home">
          <img src="/discipline-logo.png" alt="Discipline Logo" className="brand-icon" />
          DISCIPLINE
        </a>
        <span>Wake. Focus. Play. Repeat.</span>
        <a href="#home">Back to top ↑</a>
        <small>© <span id="year">{currentYear}</span> Discipline Project Team</small>
      </footer>
    </>
  );
}

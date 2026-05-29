import Contact from "../components/Contact";
import Reveal from "../components/Reveal";
import Navbar from "../components/Navbar";

export default function ContactPage(): JSX.Element {
  return (
    <main>
      <Navbar />
      <section
        className="section contact-hero-section"
        style={{ paddingTop: 96 }}
      >
        <div className="container">
          {/* <Reveal>
            <h1 style={{ margin: 0, fontSize: "3.5rem", textAlign: "center" }}>
              🚀 Get in Touch
            </h1>
          </Reveal> */}
          <Reveal delayMs={120}>
            <p
              className="muted"
              style={{
                maxWidth: 820,
                margin: "0 auto 40px auto",
                textAlign: "center",
                fontSize: "1.2rem",
              }}
            >
              Ready to build something amazing? Let's make it happen together!
              🌟
            </p>
          </Reveal>

          {/* Fun Stats & Social Proof */}
          <Reveal delayMs={360}>
            <div className="fun-stats">
              <div className="stat-item">
                <div className="stat-number">Strategic</div>
                <div className="stat-label">Partnership Approach</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Founder Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Proven Track Record</div>
                <div className="stat-label">Excellence</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Growing Network</div>
                <div className="stat-label">Companies Supported</div>
              </div>
            </div>
          </Reveal>

          {/* Interactive Elements */}
          <Reveal delayMs={480}>
            <div className="interactive-elements">
              <div className="trust-badges">
                <div className="badge">
                  <span className="badge-icon">🔒</span>
                  <span>100% Confidential</span>
                </div>
                <div className="badge">
                  <span className="badge-icon">⚡</span>
                  <span>Lightning Fast</span>
                </div>
                <div className="badge">
                  <span className="badge-icon">🎯</span>
                  <span>Strategic Focus</span>
                </div>
                <div className="badge">
                  <span className="badge-icon">🌍</span>
                  <span>Africa-First</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Fun Call to Action */}
          <Reveal delayMs={600}>
            <div className="fun-cta">
              <h2 style={{ textAlign: "center", marginBottom: "16px" }}>
                🎉 Ready to Start Your Journey?
              </h2>
              <p
                style={{
                  textAlign: "center",
                  color: "var(--muted)",
                  marginBottom: "32px",
                }}
              >
                Scroll down to fill out the form and let's build Africa's future
                together!
              </p>
              <div className="scroll-indicator">
                <span className="scroll-text">Scroll Down</span>
                <div className="scroll-arrow">↓</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div id="contact-form">
        <Contact />
      </div>
    </main>
  );
}

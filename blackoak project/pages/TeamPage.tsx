import Team from "../components/Team";
import Reveal from "../components/Reveal";
import Navbar from "../components/Navbar";

export default function TeamPage(): JSX.Element {
  return (
    <main>
      <Navbar />
      <section className="section" style={{ paddingTop: 96 }}>
        <div className="container">
          <Reveal>
            <h1 style={{ margin: 0 }}>Our Team</h1>
          </Reveal>
          <Reveal delayMs={120}>
            <p className="muted" style={{ maxWidth: 820 }}>
              Operators-turned-investors with deep experience building and
              scaling in Africa.
            </p>
          </Reveal>
        </div>
      </section>
      <Team />
    </main>
  );
}

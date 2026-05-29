import fintechImage from "../assets/fintech.jpg";
import educationImage from "../assets/education.jpg";
import energyImage from "../assets/energy.jpg";

export default function Thesis() {
  return (
    <section id="thesis" className="section thesis-section">
      <div className="container">
        {/* Header Section */}
        <div
          className="work-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "80px",
            gap: "40px",
          }}
        >
          <div
            className="header-content"
            style={{ flex: 1, maxWidth: "600px" }}
          >
            <div
              className="work-label"
              style={{
                display: "inline-block",
                background: "#f5f5f5",
                color: "#666",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "0.9rem",
                fontWeight: 500,
                marginBottom: "20px",
              }}
            >
              Our Investment Thesis
            </div>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: 700,
                color: "var(--text)",
                margin: "0 0 20px 0",
                lineHeight: 1.2,
                background: "none",
              }}
            >
              Building Africa's digital infrastructure, one investment at a
              time.
            </h2>
            <p
              className="work-description"
              style={{
                color: "var(--muted)",
                fontSize: "1.1rem",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              We back foundational software and infrastructure for Africa's
              digital economy, investing early with high conviction and
              supporting operators with distribution, talent and regulatory
              navigation.
            </p>
          </div>
          <div
            className="header-icon"
            style={{
              fontSize: "3rem",
              filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))",
            }}
          >
            🚀
          </div>
        </div>

        {/* Investment Stages Section */}
        <div
          className="investment-stages"
          style={{
            margin: "80px 0",
            padding: "40px 0",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: 700,
              color: "var(--text)",
              marginBottom: "60px",
            }}
          >
            Investment Stages
          </h3>

          <div
            className="stages-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "40px",
              maxWidth: "1200px",
              margin: "0 auto",
              borderRadius: "24px",
              overflow: "hidden",
            }}
          >
            {/* Stage 1 - Define */}
            <div
              className="stage-card"
              style={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                transition: "all 0.4s ease",
                cursor: "pointer",
                height: "auto",
                minHeight: "450px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 30px 60px rgba(0, 0, 0, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0, 0, 0, 0.15)";
              }}
            >
              {/* Background Image */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${fintechImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(0.7)",
                }}
              />

              {/* Gradient Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(135deg, rgba(43, 212, 167, 0.9), rgba(34, 197, 94, 0.8))",
                  mixBlendMode: "multiply",
                }}
              />

              {/* Content */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "40px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  gap: "20px",
                }}
              >
                <div>
                  <div
                    className="stage-number"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "50px",
                      height: "50px",
                      background: "rgba(255, 255, 255, 0.2)",
                      borderRadius: "50%",
                      color: "white",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      marginBottom: "20px",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    01
                  </div>
                  <h4
                    style={{
                      color: "white",
                      fontSize: "1.8rem",
                      fontWeight: 700,
                      margin: "0 0 20px 0",
                      textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    Define
                  </h4>
                  <p
                    style={{
                      color: "white",
                      fontSize: "1rem",
                      lineHeight: 1.6,
                      margin: "0 0 20px 0",
                      textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    A young, mobile-first population and under-penetrated
                    infrastructure create outsized opportunities for software.
                    We help founders define their vision, validate concepts, and
                    build the foundation for scalable solutions.
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "white",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                >
                  <span>Fintech & Infrastructure</span>
                  <div
                    style={{
                      width: "20px",
                      height: "2px",
                      background: "white",
                      borderRadius: "1px",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Stage 2 - Build */}
            <div
              className="stage-card"
              style={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                transition: "all 0.4s ease",
                cursor: "pointer",
                height: "auto",
                minHeight: "450px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 30px 60px rgba(0, 0, 0, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0, 0, 0, 0.15)";
              }}
            >
              {/* Background Image */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${educationImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(0.7)",
                }}
              />

              {/* Gradient Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(99, 102, 241, 0.8))",
                  mixBlendMode: "multiply",
                }}
              />

              {/* Content */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "40px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    className="stage-number"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "50px",
                      height: "50px",
                      background: "rgba(255, 255, 255, 0.2)",
                      borderRadius: "50%",
                      color: "white",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      marginBottom: "20px",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    02
                  </div>
                  <h4
                    style={{
                      color: "white",
                      fontSize: "1.8rem",
                      fontWeight: 700,
                      margin: "0 0 20px 0",
                      textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    Build
                  </h4>
                  <p
                    style={{
                      color: "white",
                      fontSize: "1rem",
                      lineHeight: "1.6",
                      margin: "0 0 20px 0",
                      textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    We target foundational layers: payments, credit, core
                    banking, education enablement, energy generation. Building
                    the digital backbone that powers Africa's growth.
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "white",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                >
                  <span>Education & Banking</span>
                  <div
                    style={{
                      width: "20px",
                      height: "2px",
                      background: "white",
                      borderRadius: "1px",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Stage 3 - Launch */}
            <div
              className="stage-card"
              style={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                transition: "all 0.4s ease",
                cursor: "pointer",
                height: "auto",
                minHeight: "450px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 30px 60px rgba(0, 0, 0, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0, 0, 0, 0.15)";
              }}
            >
              {/* Background Image */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${energyImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(0.7)",
                }}
              />

              {/* Gradient Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(135deg, rgba(245, 158, 11, 0.9), rgba(239, 68, 68, 0.8))",
                  mixBlendMode: "multiply",
                }}
              />

              {/* Content */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "40px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    className="stage-number"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "50px",
                      height: "50px",
                      background: "rgba(255, 255, 255, 0.2)",
                      borderRadius: "50%",
                      color: "white",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      marginBottom: "20px",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    03
                  </div>
                  <h4
                    style={{
                      color: "white",
                      fontSize: "1.8rem",
                      fontWeight: "700",
                      margin: "0 0 20px 0",
                      textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    Launch
                  </h4>
                  <p
                    style={{
                      color: "white",
                      fontSize: "1rem",
                      lineHeight: "1.6",
                      margin: "0 0 20px 0",
                      textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    Beyond capital, we provide hands-on support with
                    go-to-market strategy, talent acquisition, and regulatory
                    navigation. Launching Africa's next generation of digital
                    leaders.
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "white",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                >
                  <span>Energy & Growth</span>
                  <div
                    style={{
                      width: "20px",
                      height: "2px",
                      background: "white",
                      borderRadius: "1px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div
            style={{
              textAlign: "center",
              marginTop: "60px",
            }}
          >
            <div
              className="ready-text"
              style={{
                color: "#2bd4a7",
                fontWeight: 600,
                fontSize: "1.1rem",
                fontStyle: "italic",
                marginBottom: "25px",
              }}
            >
              "Ready to transform Africa's digital landscape?"
            </div>

            <a
              href="/thesis"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                background: "linear-gradient(135deg, #2bd4a7, #22c55e)",
                color: "white",
                padding: "16px 32px",
                borderRadius: "30px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1rem",
                boxShadow: "0 8px 25px rgba(43, 212, 167, 0.3)",
                transition: "all 0.3s ease",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(43, 212, 167, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(43, 212, 167, 0.3)";
              }}
            >
              Read Full Thesis
              <span style={{ fontSize: "1.2rem" }}>→</span>
            </a>
          </div>
        </div>

        {/* Responsive Styles */}
        <style>{`
          @media (max-width: 900px) {
            .stages-grid {
              grid-template-columns: 1fr !important;
              max-width: 500px !important;
            }
            
            .stage-card {
              min-height: 400px !important;
            }
          }

          @media (max-width: 600px) {
            .stages-grid {
              max-width: 100% !important;
              padding: 0 20px !important;
            }
            
            .stage-card {
              min-height: 380px !important;
            }
            
            .stage-card .stage-number {
              width: 40px !important;
              height: 40px !important;
              font-size: 1rem !important;
            }
            
            .stage-card h4 {
              font-size: 1.5rem !important;
            }
            
            .stage-card p {
              font-size: 0.9rem !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

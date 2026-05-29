"use client";

import AffIcon from "./AffIcon";
import MobileSwipeCarousel from "./ui/MobileSwipeCarousel";
import {
  InvestmentStageCard,
  investmentStages,
} from "./thesis/InvestmentStageCard";
import { AFF_ICONS } from "../lib/assets";
import { AFF_ABOUT_PARAGRAPHS } from "../lib/aff-copy";

export default function Thesis() {
  return (
    <section id="thesis" className="section thesis-section">
      <div className="container">
        {/* Header Section */}
        <div className="work-header flex flex-col items-center text-center gap-8 mb-12 lg:mb-20 lg:flex-row lg:items-start lg:justify-between lg:text-left lg:gap-10">
          <div className="header-content w-full lg:flex-1 lg:max-w-[600px]">
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
              className="text-2xl sm:text-3xl lg:text-[2.5rem]"
              style={{
                fontWeight: 700,
                color: "var(--text)",
                margin: "0 0 20px 0",
                lineHeight: 1.2,
                background: "none",
              }}
            >
              Building Africa&apos;s digital infrastructure, one investment at a
              time.
            </h2>
            <div className="flex flex-col gap-4 w-full">
              {AFF_ABOUT_PARAGRAPHS.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="work-description text-base sm:text-lg w-full"
                  style={{
                    color: "var(--muted)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div
            className="header-icon hidden lg:flex shrink-0"
            style={{
              fontSize: "3rem",
              filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))",
            }}
          >
            <AffIcon src={AFF_ICONS.ventureCapital} alt="" size={48} />
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

          <div className="hidden lg:grid lg:grid-cols-3 stages-grid max-w-[1200px] mx-auto gap-10 rounded-3xl overflow-hidden">
            {investmentStages.map((stage) => (
              <InvestmentStageCard key={stage.title} stage={stage} />
            ))}
          </div>

          <MobileSwipeCarousel
            className="lg:hidden max-w-[500px] mx-auto px-5"
            aria-label="Investment stages"
          >
            {investmentStages.map((stage) => (
              <InvestmentStageCard key={stage.title} stage={stage} />
            ))}
          </MobileSwipeCarousel>

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
            .investment-stages {
              margin: 48px 0 !important;
              padding: 24px 0 !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

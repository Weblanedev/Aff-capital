"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import "./Contact.css";
import AffIcon from "./AffIcon";
import { AFF_ICONS } from "../lib/assets";

const CURRENT_YEAR = new Date().getFullYear();
const MIN_FOUNDED_YEAR = 1990;

const FOUNDED_YEAR_OPTIONS = Array.from(
  { length: CURRENT_YEAR - MIN_FOUNDED_YEAR + 1 },
  (_, i) => String(CURRENT_YEAR - i)
);

export default function Contact(): JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    sector: "",
    deck: "",
    notes: "",
    founded: "",
    teamSize: "",
    fundingStage: "",
    fundingAmount: "",
    useOfFunds: "",
    traction: "",
    revenue: "",
    growth: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        "Form details submitted successfully. We would be in touch."
      );
      setFormData({
        name: "",
        email: "",
        company: "",
        sector: "",
        deck: "",
        notes: "",
        founded: "",
        teamSize: "",
        fundingStage: "",
        fundingAmount: "",
        useOfFunds: "",
        traction: "",
        revenue: "",
        growth: "",
      });
    }, 800);
  };

  const getProgressPercentage = () => {
    const filledFields = Object.values(formData).filter(
      (value) => value.trim() !== ""
    ).length;
    return (filledFields / Object.keys(formData).length) * 100;
  };

  const progressPercentage = getProgressPercentage();

  const steps = [
    {
      id: "basic",
      title: "Basic Details",
      description: "Company and contact information",
      icon: AFF_ICONS.payments,
      completed: formData.name && formData.email && formData.company,
      active: !formData.name || !formData.email || !formData.company,
    },
    {
      id: "business",
      title: "Business Details",
      description: "Company background and team",
      icon: AFF_ICONS.banking,
      completed: formData.founded && formData.teamSize && formData.sector,
      active:
        formData.name &&
        formData.email &&
        formData.company &&
        (!formData.founded || !formData.teamSize || !formData.sector),
    },
    {
      id: "funding",
      title: "Funding & Strategy",
      description: "Investment details and strategy",
      icon: AFF_ICONS.ventureCapital,
      completed:
        formData.fundingStage && formData.fundingAmount && formData.useOfFunds,
      active:
        formData.founded &&
        formData.teamSize &&
        formData.sector &&
        (!formData.fundingStage ||
          !formData.fundingAmount ||
          !formData.useOfFunds),
    },
    {
      id: "traction",
      title: "Traction & Growth",
      description: "Business performance and metrics",
      icon: AFF_ICONS.realEstate,
      completed: formData.traction && formData.revenue && formData.growth,
      active:
        formData.fundingStage &&
        formData.fundingAmount &&
        formData.useOfFunds &&
        (!formData.traction || !formData.revenue || !formData.growth),
    },
    {
      id: "submit",
      title: "Review & Submit",
      description: "Final review and submission",
      icon: AFF_ICONS.renewableEnergy,
      completed: false,
      active: formData.traction && formData.revenue && formData.growth,
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-header">
          <h2 className="contact-title">
            <span className="title-accent">Pitch</span> African Founders Fund
          </h2>
          <p className="contact-description">
            Share a 1-2 page memo or deck. Confidential by default.
          </p>
        </div>

        <div className="contact-content-wrapper">
          <div className="stepper-section">
            <div className="vertical-progress">
              <div className="progress-bar-vertical">
                <div
                  className="progress-fill-vertical"
                  style={{ height: `${progressPercentage}%` }}
                />
              </div>
              <span className="progress-text-vertical">
                {Math.round(progressPercentage)}%
              </span>
            </div>

            <div className="stepper-progress">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`stepper-step ${
                    step.completed ? "completed" : ""
                  } ${step.active ? "active" : ""}`}
                >
                  <div className="step-indicator">
                    {step.completed ? (
                      <div className="step-icon completed">
                        <span className="checkmark">✓</span>
                      </div>
                    ) : step.active ? (
                      <div className="step-icon active">
                        <AffIcon src={step.icon} alt="" size={22} />
                      </div>
                    ) : (
                      <div className="step-icon pending">
                        <AffIcon src={step.icon} alt="" size={22} />
                      </div>
                    )}
                  </div>

                  <div className="step-content">
                    <div className="step-number">STEP {index + 1}</div>
                    <div className="step-title">{step.title}</div>
                    <div className="step-description">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="form-section">
            <div className="contact-form-card">
                <form onSubmit={handleSubmit} className="contact-form">
                  {/* Section 1: Basic Information */}
                  <div className="form-section-header">
                    <h4 className="flex items-center gap-2">
                      <AffIcon src={AFF_ICONS.payments} alt="" size={24} />
                      Basic Information
                    </h4>
                    <p>Tell us about yourself and your company</p>
                  </div>

                  <div className="form-grid">
                    <div className="form-field">
                      <label htmlFor="name" className="field-label">
                        Full Name
                      </label>
                      <input
                        id="name"
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        autoComplete="name"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="email" className="field-label">
                        Email Address
                      </label>
                      <input
                        id="email"
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        autoComplete="email"
                      />
                    </div>

                    <div className="form-field full-width">
                      <label htmlFor="company" className="field-label">
                        Company Name
                      </label>
                      <input
                        id="company"
                        required
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="form-input"
                        autoComplete="organization"
                      />
                    </div>
                  </div>

                  {/* Section 2: Business Details */}
                  <div className="form-section-header">
                    <h4 className="flex items-center gap-2">
                      <AffIcon src={AFF_ICONS.banking} alt="" size={24} />
                      Business Details
                    </h4>
                    <p>Company background and team information</p>
                  </div>

                  <div className="form-grid">
                    <div className="form-field">
                      <label htmlFor="founded-year" className="field-label">
                        Founded Year
                      </label>
                      <select
                        id="founded-year"
                        name="founded"
                        value={formData.founded}
                        onChange={handleInputChange}
                        className="form-input"
                      >
                        <option value="">Select year</option>
                        {FOUNDED_YEAR_OPTIONS.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-field">
                      <label htmlFor="team-size" className="field-label">
                        Team Size
                      </label>
                      <select
                        id="team-size"
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        className="form-input"
                      >
                        <option value="">Select team size</option>
                        <option value="1-5">1-5 employees</option>
                        <option value="6-20">6-20 employees</option>
                        <option value="21-50">21-50 employees</option>
                        <option value="51-100">51-100 employees</option>
                        <option value="100+">100+ employees</option>
                      </select>
                    </div>

                    <div className="form-field full-width">
                      <label htmlFor="sector" className="field-label">
                        Business Sector
                      </label>
                      <select
                        id="sector"
                        name="sector"
                        value={formData.sector}
                        onChange={handleInputChange}
                        className="form-input"
                      >
                        <option value="">Select sector</option>
                        <option value="Fintech">Fintech</option>
                        <option value="Banking">Banking</option>
                        <option value="Education">Education</option>
                        <option value="Energy">Energy</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="SaaS">SaaS</option>
                        <option value="AI/ML">AI/ML</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Section 3: Growth & Strategy */}
                  <div className="form-section-header">
                    <h4 className="flex items-center gap-2">
                      <AffIcon src={AFF_ICONS.renewableEnergy} alt="" size={24} />
                      Growth & Strategy
                    </h4>
                    <p>Growth details and strategic focus</p>
                  </div>

                  <div className="form-grid">
                    <div className="form-field">
                      <label htmlFor="funding-stage" className="field-label">
                        Funding Stage
                      </label>
                      <select
                        id="funding-stage"
                        name="fundingStage"
                        value={formData.fundingStage}
                        onChange={handleInputChange}
                        className="form-input"
                      >
                        <option value="">Select stage</option>
                        <option value="Pre-seed">Pre-seed</option>
                        <option value="Seed">Seed</option>
                        <option value="Series A">Series A</option>
                        <option value="Series B">Series B</option>
                        <option value="Series C">Series C</option>
                        <option value="Growth">Growth</option>
                      </select>
                    </div>

                    <div className="form-field">
                      <label htmlFor="funding-amount" className="field-label">
                        Growth Stage
                      </label>
                      <input
                        id="funding-amount"
                        name="fundingAmount"
                        value={formData.fundingAmount}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>

                    <div className="form-field full-width">
                      <label htmlFor="use-of-funds" className="field-label">
                        Growth Plans
                      </label>
                      <textarea
                        id="use-of-funds"
                        name="useOfFunds"
                        value={formData.useOfFunds}
                        onChange={handleInputChange}
                        className="form-input"
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Section 4: Traction & Growth */}
                  <div className="form-section-header">
                    <h4 className="flex items-center gap-2">
                      <AffIcon src={AFF_ICONS.realEstate} alt="" size={24} />
                      Traction & Growth
                    </h4>
                    <p>Business performance and key metrics</p>
                  </div>

                  <div className="form-grid">
                    <div className="form-field">
                      <label htmlFor="revenue" className="field-label">
                        Annual Revenue
                      </label>
                      <input
                        id="revenue"
                        name="revenue"
                        value={formData.revenue}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="growth" className="field-label">
                        Growth Rate (%)
                      </label>
                      <input
                        id="growth"
                        name="growth"
                        value={formData.growth}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>

                    <div className="form-field full-width">
                      <label htmlFor="traction" className="field-label">
                        Key Traction Metrics
                      </label>
                      <textarea
                        id="traction"
                        name="traction"
                        value={formData.traction}
                        onChange={handleInputChange}
                        className="form-input"
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Section 5: Additional Materials */}
                  <div className="form-section-header">
                    <h4 className="flex items-center gap-2">
                      <AffIcon src={AFF_ICONS.healthCare} alt="" size={24} />
                      Additional Materials
                    </h4>
                    <p>Supporting documents and final notes</p>
                  </div>

                  <div className="form-grid">
                    <div className="form-field full-width">
                      <label htmlFor="deck" className="field-label">
                        Pitch Deck Link
                      </label>
                      <input
                        id="deck"
                        name="deck"
                        type="url"
                        value={formData.deck}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="https://"
                      />
                    </div>

                    <div className="form-field full-width">
                      <label htmlFor="notes" className="field-label">
                        Additional Notes
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="form-input"
                        rows={4}
                      />
                    </div>
                  </div>

                  <div className="form-submit">
                    <button
                      className={`submit-btn ${
                        isSubmitting ? "submitting" : ""
                      }`}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="loading-spinner"></span>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <AffIcon
                            src={AFF_ICONS.ventureCapital}
                            alt=""
                            size={22}
                            className="btn-icon"
                          />
                          Submit Pitch
                        </>
                      )}
                    </button>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

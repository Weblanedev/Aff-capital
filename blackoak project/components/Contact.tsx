import { useState } from "react";
import "./Contact.css";

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
  const [focusedField, setFocusedField] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
      setSubmitSuccess(true);
      // Reset form after showing success
      setTimeout(() => {
        setSubmitSuccess(false);
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
      }, 3000);
    }, 1500);
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
      icon: "👤",
      completed: formData.name && formData.email && formData.company,
      active: !formData.name || !formData.email || !formData.company,
    },
    {
      id: "business",
      title: "Business Details",
      description: "Company background and team",
      icon: "🏢",
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
      icon: "💰",
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
      icon: "📈",
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
      icon: "🚀",
      completed: false,
      active: formData.traction && formData.revenue && formData.growth,
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-header">
          <h2 className="contact-title">
            <span className="title-accent">Pitch</span> Blackoak
          </h2>
          <p className="contact-description">
            Share a 1–2 page memo or deck. Confidential by default.
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
                        <span className="step-emoji">{step.icon}</span>
                      </div>
                    ) : (
                      <div className="step-icon pending">
                        <span className="step-emoji">{step.icon}</span>
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
              {submitSuccess ? (
                <div className="success-message">
                  <div className="success-icon">🎉</div>
                  <h3>Pitch Submitted!</h3>
                  <p>
                    We'll review your submission and get back to you within a
                    week.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  {/* Section 1: Basic Information */}
                  <div className="form-section-header">
                    <h4>📋 Basic Information</h4>
                    <p>Tell us about yourself and your company</p>
                  </div>

                  <div className="form-grid">
                    <div className="form-field">
                      <div className="floating-label">
                        <input
                          required
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField("")}
                          className={`form-input ${
                            focusedField === "name" || formData.name
                              ? "focused"
                              : ""
                          }`}
                          placeholder=" "
                        />
                        <label
                          className={`label-text ${
                            focusedField === "name" || formData.name
                              ? "focused"
                              : ""
                          }`}
                        >
                          Full Name
                        </label>
                      </div>
                    </div>

                    <div className="form-field">
                      <div className="floating-label">
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField("")}
                          className={`form-input ${
                            focusedField === "email" || formData.email
                              ? "focused"
                              : ""
                          }`}
                          placeholder=" "
                        />
                        <label
                          className={`label-text ${
                            focusedField === "email" || formData.email
                              ? "focused"
                              : ""
                          }`}
                        >
                          Email Address
                        </label>
                      </div>
                    </div>

                    <div className="form-field full-width">
                      <div className="floating-label">
                        <input
                          required
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("company")}
                          onBlur={() => setFocusedField("")}
                          className={`form-input ${
                            focusedField === "company" || formData.company
                              ? "focused"
                              : ""
                          }`}
                          placeholder=" "
                        />
                        <label
                          className={`label-text ${
                            focusedField === "company" || formData.company
                              ? "focused"
                              : ""
                          }`}
                        >
                          Company Name
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Business Details */}
                  <div className="form-section-header">
                    <h4>🏢 Business Details</h4>
                    <p>Company background and team information</p>
                  </div>

                  <div className="form-grid">
                    <div className="form-field">
                      <div className="floating-label">
                        <input
                          name="founded"
                          value={formData.founded}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("founded")}
                          onBlur={() => setFocusedField("")}
                          className={`form-input ${
                            focusedField === "founded" || formData.founded
                              ? "focused"
                              : ""
                          }`}
                          placeholder=" "
                        />
                        <label
                          className={`label-text ${
                            focusedField === "founded" || formData.founded
                              ? "focused"
                              : ""
                          }`}
                        >
                          Founded Year
                        </label>
                      </div>
                    </div>

                    <div className="form-field">
                      <div className="floating-label">
                        <select
                          name="teamSize"
                          value={formData.teamSize}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("teamSize")}
                          onBlur={() => setFocusedField("")}
                          className={`form-input ${
                            focusedField === "teamSize" || formData.teamSize
                              ? "focused"
                              : ""
                          }`}
                        >
                          <option value="">Select team size</option>
                          <option value="1-5">1-5 employees</option>
                          <option value="6-20">6-20 employees</option>
                          <option value="21-50">21-50 employees</option>
                          <option value="51-100">51-100 employees</option>
                          <option value="100+">100+ employees</option>
                        </select>
                        <label
                          className={`label-text ${
                            focusedField === "teamSize" || formData.teamSize
                              ? "focused"
                              : ""
                          }`}
                        >
                          Team Size
                        </label>
                      </div>
                    </div>

                    <div className="form-field full-width">
                      <div className="floating-label">
                        <select
                          name="sector"
                          value={formData.sector}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("sector")}
                          onBlur={() => setFocusedField("")}
                          className={`form-input ${
                            focusedField === "sector" || formData.sector
                              ? "focused"
                              : ""
                          }`}
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
                        <label
                          className={`label-text ${
                            focusedField === "sector" || formData.sector
                              ? "focused"
                              : ""
                          }`}
                        >
                          Business Sector
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Growth & Strategy */}
                  <div className="form-section-header">
                    <h4>🚀 Growth & Strategy</h4>
                    <p>Growth details and strategic focus</p>
                  </div>

                  <div className="form-grid">
                    <div className="form-field">
                      <div className="floating-label">
                        <select
                          name="fundingStage"
                          value={formData.fundingStage}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("fundingStage")}
                          onBlur={() => setFocusedField("")}
                          className={`form-input ${
                            focusedField === "fundingStage" ||
                            formData.fundingStage
                              ? "focused"
                              : ""
                          }`}
                        >
                          <option value="">Select stage</option>
                          <option value="Pre-seed">Pre-seed</option>
                          <option value="Seed">Seed</option>
                          <option value="Series A">Series A</option>
                          <option value="Series B">Series B</option>
                          <option value="Series C">Series C</option>
                          <option value="Growth">Growth</option>
                        </select>
                        <label
                          className={`label-text ${
                            focusedField === "fundingStage" ||
                            formData.fundingStage
                              ? "focused"
                              : ""
                          }`}
                        >
                          Funding Stage
                        </label>
                      </div>
                    </div>

                    <div className="form-field">
                      <div className="floating-label">
                        <input
                          name="fundingAmount"
                          value={formData.fundingAmount}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("fundingAmount")}
                          onBlur={() => setFocusedField("")}
                          className={`form-input ${
                            focusedField === "fundingAmount" ||
                            formData.fundingAmount
                              ? "focused"
                              : ""
                          }`}
                          placeholder=" "
                        />
                        <label
                          className={`label-text ${
                            focusedField === "fundingAmount" ||
                            formData.fundingAmount
                              ? "focused"
                              : ""
                          }`}
                        >
                          Growth Stage
                        </label>
                      </div>
                    </div>

                    <div className="form-field full-width">
                      <div className="floating-label">
                        <textarea
                          name="useOfFunds"
                          value={formData.useOfFunds}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("useOfFunds")}
                          onBlur={() => setFocusedField("")}
                          className={`form-input ${
                            focusedField === "useOfFunds" || formData.useOfFunds
                              ? "focused"
                              : ""
                          }`}
                          placeholder=" "
                          rows={3}
                        />
                        <label
                          className={`label-text ${
                            focusedField === "useOfFunds" || formData.useOfFunds
                              ? "focused"
                              : ""
                          }`}
                        >
                          Growth Plans
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Section 4: Traction & Growth */}
                  <div className="form-section-header">
                    <h4>📈 Traction & Growth</h4>
                    <p>Business performance and key metrics</p>
                  </div>

                  <div className="form-grid">
                    <div className="form-field">
                      <div className="floating-label">
                        <input
                          name="revenue"
                          value={formData.revenue}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("revenue")}
                          onBlur={() => setFocusedField("")}
                          className={`form-input ${
                            focusedField === "revenue" || formData.revenue
                              ? "focused"
                              : ""
                          }`}
                          placeholder=" "
                        />
                        <label
                          className={`label-text ${
                            focusedField === "revenue" || formData.revenue
                              ? "focused"
                              : ""
                          }`}
                        >
                          Annual Revenue
                        </label>
                      </div>
                    </div>

                    <div className="form-field">
                      <div className="floating-label">
                        <input
                          name="growth"
                          value={formData.growth}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("growth")}
                          onBlur={() => setFocusedField("")}
                          className={`form-input ${
                            focusedField === "growth" || formData.growth
                              ? "focused"
                              : ""
                          }`}
                          placeholder=" "
                        />
                        <label
                          className={`label-text ${
                            focusedField === "growth" || formData.growth
                              ? "focused"
                              : ""
                          }`}
                        >
                          Growth Rate (%)
                        </label>
                      </div>
                    </div>

                    <div className="form-field full-width">
                      <div className="floating-label">
                        <textarea
                          name="traction"
                          value={formData.traction}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("traction")}
                          onBlur={() => setFocusedField("")}
                          className={`form-input ${
                            focusedField === "traction" || formData.traction
                              ? "focused"
                              : ""
                          }`}
                          placeholder=" "
                          rows={3}
                        />
                        <label
                          className={`label-text ${
                            focusedField === "traction" || formData.traction
                              ? "focused"
                              : ""
                          }`}
                        >
                          Key Traction Metrics
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Section 5: Additional Materials */}
                  <div className="form-section-header">
                    <h4>📎 Additional Materials</h4>
                    <p>Supporting documents and final notes</p>
                  </div>

                  <div className="form-grid">
                    <div className="form-field full-width">
                      <div className="floating-label">
                        <input
                          name="deck"
                          value={formData.deck}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("deck")}
                          onBlur={() => setFocusedField("")}
                          className={`form-input ${
                            focusedField === "deck" || formData.deck
                              ? "focused"
                              : ""
                          }`}
                          placeholder=" "
                        />
                        <label
                          className={`label-text ${
                            focusedField === "deck" || formData.deck
                              ? "focused"
                              : ""
                          }`}
                        >
                          Pitch Deck Link
                        </label>
                      </div>
                    </div>

                    <div className="form-field full-width">
                      <div className="floating-label">
                        <textarea
                          name="notes"
                          value={formData.notes}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("notes")}
                          onBlur={() => setFocusedField("")}
                          className={`form-input ${
                            focusedField === "notes" || formData.notes
                              ? "focused"
                              : ""
                          }`}
                          placeholder=" "
                          rows={4}
                        />
                        <label
                          className={`label-text ${
                            focusedField === "notes" || formData.notes
                              ? "focused"
                              : ""
                          }`}
                        >
                          Additional Notes
                        </label>
                      </div>
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
                          <span className="btn-icon">🚀</span>
                          Submit Pitch
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

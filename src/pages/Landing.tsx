

import React from "react";

const LandingPage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Aadhaar OCR Upload</h1>
        <p style={styles.subtitle}>
          Seamlessly extract and verify Aadhaar card data using OCR technology.
        </p>
        <a href="/ocr" style={styles.ctaButton}>
          Get Started
        </a>
      </header>

      <section style={styles.featuresSection}>
        <h2 style={styles.featuresTitle}>Why Choose Us?</h2>
        <div style={styles.featuresGrid}>
          <FeatureCard
            icon="📷"
            title="Easy Upload"
            description="Upload your Aadhaar front & back images with simple clicks."
          />
          <FeatureCard
            icon="⚡"
            title="Fast Processing"
            description="Get instant OCR results powered by our backend."
          />
          <FeatureCard
            icon="🔒"
            title="Secure & Private"
            description="Your data is safe, we respect your privacy."
          />
          <FeatureCard
            icon="📱"
            title="Mobile Friendly"
            description="Works smoothly on all devices and screen sizes."
          />
        </div>
      </section>

      <footer style={styles.footer}>
        <p>© 2025 Aadhaar OCR Project. All rights reserved.</p>
        <p>Contact: support@aadhaarocr.com</p>
      </footer>
    </div>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div style={styles.featureCard}>
    <div style={styles.featureIcon}>{icon}</div>
    <h3 style={styles.featureTitle}>{title}</h3>
    <p style={styles.featureDesc}>{description}</p>
  </div>
);

const styles: Record<string, React.CSSProperties> = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#222",
    margin: 0,
    padding: 0,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  header: {
    padding: "4rem 2rem",
    textAlign: "center",
    color: "#fff",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "0.5rem",
    fontWeight: "700",
  },
  subtitle: {
    fontSize: "1.25rem",
    marginBottom: "2rem",
    maxWidth: 600,
    marginLeft: "auto",
    marginRight: "auto",
    lineHeight: 1.5,
  },
  ctaButton: {
    display: "inline-block",
    backgroundColor: "#ff7f50",
    color: "#fff",
    fontWeight: "600",
    padding: "0.75rem 2rem",
    borderRadius: "30px",
    textDecoration: "none",
    fontSize: "1.125rem",
    transition: "background-color 0.3s ease",
  },
  featuresSection: {
    backgroundColor: "#fff",
    padding: "4rem 2rem",
    borderTopLeftRadius: "60px",
    borderTopRightRadius: "60px",
    color: "#333",
    textAlign: "center",
  },
  featuresTitle: {
    fontSize: "2.25rem",
    marginBottom: "2rem",
    fontWeight: "700",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "2rem",
    maxWidth: 1000,
    margin: "0 auto",
  },
  featureCard: {
    backgroundColor: "#f7f7f7",
    borderRadius: "16px",
    padding: "2rem 1.5rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
    cursor: "default",
  },
  featureIcon: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  featureTitle: {
    fontSize: "1.25rem",
    marginBottom: "0.5rem",
  },
  featureDesc: {
    fontSize: "1rem",
    color: "#666",
  },
  footer: {
    backgroundColor: "#222",
    color: "#ccc",
    padding: "1.5rem 2rem",
    textAlign: "center",
    fontSize: "0.875rem",
  },
};

export default LandingPage;

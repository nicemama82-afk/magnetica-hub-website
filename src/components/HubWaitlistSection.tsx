import { useState } from "react";

const styles: Record<string, React.CSSProperties> = {
  section: {
    maxWidth: '560px',
    margin: '0 auto',
    padding: '60px 24px',
    textAlign: 'center',
  },
  heading: {
    fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
    fontWeight: 800,
    color: '#fff',
    marginBottom: '16px',
    letterSpacing: '-1px',
    lineHeight: 1.2,
  },
  sub: {
    color: '#aaa',
    fontSize: '1rem',
    lineHeight: 1.7,
    marginBottom: '10px',
  },
  bold: {
    color: '#c4b5fd',
    fontWeight: 600,
    fontSize: '0.95rem',
    marginBottom: '36px',
    display: 'block',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    marginBottom: '32px',
  },
  input: {
    background: '#161616',
    border: '1px solid #333',
    borderRadius: '10px',
    padding: '14px 18px',
    color: '#fff',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    width: '100%',
    boxSizing: 'border-box' as const,
  },
  button: {
    background: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    padding: '15px 24px',
    fontSize: '1rem',
    fontWeight: 700,
    cursor: 'pointer',
    letterSpacing: '0.03em',
    transition: 'opacity 0.2s',
  },
  success: {
    color: '#86efac',
    fontWeight: 600,
    marginTop: '-16px',
    marginBottom: '24px',
    fontSize: '1rem',
  },
  divider: {
    borderTop: '1px solid #222',
    margin: '40px 0 32px',
  },
  comingSoonHeading: {
    color: '#fff',
    fontSize: '1.1rem',
    fontWeight: 700,
    marginBottom: '20px',
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
  },
  tagGrid: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '10px',
    justifyContent: 'center',
    marginBottom: '36px',
  },
  tag: {
    background: '#1a1a1a',
    border: '1px solid #333',
    borderRadius: '999px',
    padding: '8px 18px',
    color: '#c4b5fd',
    fontSize: '0.9rem',
    fontWeight: 600,
  },
  footer: {
    color: '#555',
    fontSize: '0.85rem',
    marginTop: '8px',
  },
};

const comingSoon = [
  "🎯 Coaching Hub",
  "💪 Fitness Creator Hub",
  "✨ Influencer Hub",
  "📚 Course Creator Hub",
];

export default function HubWaitlistSection() {
  const [niche, setNiche] = useState("");
  const [help, setHelp] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    const data = { niche, help, email, date: new Date().toISOString() };
    const existing = JSON.parse(localStorage.getItem("magnetica_waitlist") || "[]");
    localStorage.setItem("magnetica_waitlist", JSON.stringify([...existing, data]));

    setSubmitted(true);
    setNiche("");
    setHelp("");
    setEmail("");
  };

  const inputStyle = (name: string): React.CSSProperties => ({
    ...styles.input,
    borderColor: focused === name ? '#7c3aed' : '#333',
  });

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Help Shape The Future of Magnetica Hub</h2>

      <p style={styles.sub}>
        We're expanding into new creator niches. Tell us what you want next — and get early access when it launches.
      </p>

      <span style={styles.bold}>
        We only build hubs with real demand. If enough creators request it, we launch it.
      </span>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          style={inputStyle("niche")}
          placeholder="What niche should we add?"
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
          onFocus={() => setFocused("niche")}
          onBlur={() => setFocused(null)}
        />
        <input
          style={inputStyle("help")}
          placeholder="What help do you want?"
          value={help}
          onChange={(e) => setHelp(e.target.value)}
          onFocus={() => setFocused("help")}
          onBlur={() => setFocused(null)}
        />
        <input
          style={inputStyle("email")}
          placeholder="Your email *"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setFocused("email")}
          onBlur={() => setFocused(null)}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseOut={e => (e.currentTarget.style.opacity = '1')}
        >
          Suggest & Join Waitlist →
        </button>
      </form>

      {submitted && <p style={styles.success}>✨ You're on the list — we'll be in touch!</p>}

      <div style={styles.divider} />

      <p style={styles.comingSoonHeading}>Most Requested Hubs</p>

      <div style={styles.tagGrid}>
        {comingSoon.map((hub) => (
          <span key={hub} style={styles.tag}>{hub}</span>
        ))}
      </div>

      <p style={styles.footer}>Join early creators shaping the future of Magnetica Hub</p>
    </section>
  );
}

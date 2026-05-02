import { useState } from "react";

export default function HubWaitlistSection() {
  const [niche, setNiche] = useState("");
  const [help, setHelp] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const data = {
      niche,
      help,
      email,
      date: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem("magnetica_waitlist") || "[]");
    localStorage.setItem("magnetica_waitlist", JSON.stringify([...existing, data]));

    setSubmitted(true);
    setNiche("");
    setHelp("");
    setEmail("");
  };

  return (
    <section style={{ padding: "40px", textAlign: "center" }}>
      <h2>Help Shape The Future of Magnetica Hub</h2>

      <p>
        We’re expanding into new creator niches. Tell us what you want next — and get early access when it launches.
      </p>

      <p><strong>We only build hubs with real demand. If enough creators request it, we launch it.</strong></p>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="What niche should we add?"
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
        />

        <input
          placeholder="What help do you want?"
          value={help}
          onChange={(e) => setHelp(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Suggest & Join Waitlist</button>
      </form>

      {submitted && <p>Thanks! You're on the waitlist ✨</p>}

      <h3>Most Requested Hubs (Coming Soon)</h3>

      <div>
        <p>Coaching Hub</p>
        <p>Fitness Creator Hub</p>
        <p>Influencer Hub</p>
        <p>Course Creator Hub</p>
      </div>

      <p>Join early creators shaping the future of Magnetica Hub</p>
    </section>
  );
}

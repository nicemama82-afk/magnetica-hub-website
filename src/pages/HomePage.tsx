 import HubWaitlistSection from "../components/HubWaitlistSection";

export default function HomePage() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>The All-In-One System for Faceless Creators</h1>

      <p>
        Create content. Automate your workflow. Scale your TikTok and YouTube — all in one place.
      </p>

      <hr style={{ margin: "40px 0" }} />

      <h2>Choose Your Creator Path</h2>

      <div>
        <h3>Faceless Content Creator</h3>
        <p>Grow using AI tools and automation</p>
        <a href="#">Enter Faceless System</a>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>AI Music Creator (Vokl Hub)</h3>
        <p>Create and monetise AI music</p>
        <a href="#">Enter Music System</a>
      </div>

      <hr style={{ margin: "40px 0" }} />

      <HubWaitlistSection />
    </div>
  );
}

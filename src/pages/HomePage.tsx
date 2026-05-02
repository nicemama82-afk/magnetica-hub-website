 import HubWaitlistSection from '../components/HubWaitlistSection';

export default function HomePage() {
  return (
    <main style={{ fontFamily: "'Georgia', serif", background: '#0a0a0a', minHeight: '100vh', color: '#fff' }}>
      <header style={{
        textAlign: 'center',
        padding: '80px 20px 40px',
        borderBottom: '1px solid #222',
      }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 900,
          letterSpacing: '-2px',
          background: 'linear-gradient(135deg, #fff 0%, #a78bfa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: 0,
        }}>
          Magnetica Hub
        </h1>
        <p style={{ color: '#888', marginTop: '16px', fontSize: '1.1rem', letterSpacing: '0.05em' }}>
          The creator platform built by demand
        </p>
      </header>

      <HubWaitlistSection />
    </main>
  );
}

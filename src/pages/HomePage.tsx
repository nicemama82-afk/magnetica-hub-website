import HubWaitlistSection from "../components/HubWaitlistSection";
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate email subscription (replace with actual API call)
    setTimeout(() => {
      console.log('Email subscribed:', email);
      setSubscribed(true);
      setEmail('');
      setLoading(false);
      
      // Reset message after 5 seconds
      setTimeout(() => setSubscribed(false), 5000);
    }, 1000);
  };

  const features = [
    { icon: '🛍️', title: 'Spiritual Marketplace', desc: 'Browse curated spiritual products from creators worldwide' },
    { icon: '💳', title: 'Flexible Subscriptions', desc: 'Choose the plan that fits your spiritual journey' },
    { icon: '🤝', title: 'Creator Community', desc: 'Connect with healers, coaches, and spiritual entrepreneurs' },
    { icon: '💬', title: '24/7 AI Support', desc: 'Get instant answers from our mystical assistant' },
    { icon: '💰', title: 'Earn Commissions', desc: 'Grow your income through our affiliate program' },
    { icon: '🔐', title: 'Secure & Private', desc: 'Your data is encrypted and protected always' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 gradient-dark">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/magnetica-hub-logo.png" 
              alt="Magnetica Hub" 
              className="h-48 md:h-64 object-contain"
            />
          </div>
          
          <p className="text-xl md:text-2xl text-secondary mb-12 max-w-2xl mx-auto">
            The all-in-one spiritual marketplace for creators, healers, and digital entrepreneurs to sell, promote, and scale their content.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Download App Now
            </a>
            <Link to="/marketplace" className="btn-secondary">
              Explore Marketplace
            </Link>
          </div>

          {/* Expression of Interest */}
          <div className="bg-accent/20 border border-primary/40 rounded-lg p-8 max-w-md mx-auto backdrop-blur">
            <h3 className="text-xl font-semibold text-primary mb-4">Join Our Community</h3>
            <p className="text-secondary text-sm mb-6">
              Be the first to know about exclusive features, special offers, and community updates.
            </p>
            
            {subscribed ? (
              <div className="bg-green-500/20 border border-green-500 text-green-300 px-4 py-3 rounded-lg text-sm">
                ✓ Thank you! Check your email for updates.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-4 py-3 bg-dark/50 border border-primary/30 rounded-lg text-white placeholder-secondary focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary disabled:opacity-50"
                >
                  {loading ? 'Subscribing...' : 'Express Interest'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
            Why Choose Magnetica Hub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="card card-hover">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-secondary">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 px-4 bg-accent/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gradient">
            Simple, Transparent Pricing
          </h2>
          <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
            Choose the perfect plan for your spiritual journey
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { name: 'Free', price: '$0', features: ['Browse marketplace', 'Limited access'] },
              { name: 'Basic', price: '$9.99', features: ['Exclusive products', '5% commissions'] },
              { name: 'Premium', price: '$19.99', features: ['All Basic +', '10% commissions', 'Featured listings'] },
              { name: 'Elite', price: '$29.99', features: ['All Premium +', '20% commissions', 'Priority support'] },
            ].map((plan, i) => (
              <div key={i} className="card">
                <h3 className="text-xl font-bold text-primary mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold text-primary mb-4">{plan.price}<span className="text-sm text-secondary">/mo</span></p>
                <ul className="space-y-2 text-secondary text-sm">
                  {plan.features.map((f, j) => <li key={j}>✓ {f}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/pricing" className="btn-primary">
              View All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
            Loved by Creators & Healers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', role: 'Meditation Coach', text: 'Magnetica Hub transformed how I reach my students. The platform is beautiful and intuitive!' },
              { name: 'Luna K.', role: 'Crystal Healer', text: 'I love the community here. So many spiritual seekers discovering my work!' },
              { name: 'James R.', role: 'Music Creator', text: 'The subscription model works perfectly for my healing music business.' },
            ].map((testimonial, i) => (
              <div key={i} className="card">
                <p className="text-secondary mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-secondary text-sm">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gradient">
            Ready to Manifest Your Dreams?
          </h2>
          <p className="text-xl text-secondary mb-8">
            Join thousands of spiritual creators and healers on Magnetica Hub today.
          </p>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Download Now on Google Play
          </a>
        </div>
      </section>
    </div>
  );
}
<HubWaitlistSection />

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-primary/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">✨</span>
              <span className="text-lg font-bold text-primary">Magnetica Hub</span>
            </div>
            <p className="text-secondary text-sm">The spiritual marketplace for creators and healers.</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-secondary">
              <li><Link to="/marketplace" className="hover:text-primary">Marketplace</Link></li>
              <li><Link to="/pricing" className="hover:text-primary">Pricing</Link></li>
              <li><Link to="/creators" className="hover:text-primary">For Creators</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-secondary">
              <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-primary">Privacy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-secondary">
              <li><Link to="/terms" className="hover:text-primary">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="hover:text-primary">Disclaimer</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-4">Follow</h3>
            <div className="flex gap-4 text-sm text-secondary">
              <a href="#" className="hover:text-primary">Instagram</a>
              <a href="#" className="hover:text-primary">Twitter</a>
              <a href="#" className="hover:text-primary">TikTok</a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary/20 pt-8 text-center text-secondary text-sm">
          <p>&copy; 2026 Magnetica Hub. All rights reserved. ✨</p>
        </div>
      </div>
    </footer>
  );
}

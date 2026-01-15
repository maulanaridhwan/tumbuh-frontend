import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Get scrolled state from parent or you could use the useScroll hook
  // For now we'll check scroll state when menu opens/closes
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo">
          <div className="logo-circle"></div>
          <span className="logo-text">tumbuh.</span>
        </div>
        
        <nav className="nav-desktop">
          <a href="#beranda" className="nav-link">Beranda</a>
          <a href="#fitur" className="nav-link">Fitur</a>
          <a href="#layanan" className="nav-link">Layanan</a>
          <a href="#kontak" className="nav-link">Kontak Kami</a>
        </nav>

        <button className="btn-login">
          Masuk
        </button>

        <button className="btn-mobile-menu" onClick={handleMenuClick}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#beranda" className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>Beranda</a>
          <a href="#fitur" className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>Fitur</a>
          <a href="#layanan" className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>Layanan</a>
          <a href="#kontak" className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>Kontak Kami</a>
          <button className="btn-login mobile">
            Masuk
          </button>
        </div>
      )}
    </header>
  );
};

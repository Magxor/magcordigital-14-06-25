import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={handleNavClick}>
            <img src="/images/Logo Magxor.png" alt="Magxor" className="w-8 h-8" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Magxor
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" isActive={isActive('/')} onClick={handleNavClick}>Inicio</NavLink>
            <NavLink to="/nosotros" isActive={isActive('/nosotros')} onClick={handleNavClick}>Nosotros</NavLink>
            <NavLink to="/servicios" isActive={isActive('/servicios')} onClick={handleNavClick}>Servicios</NavLink>
            <NavLink to="/portfolio" isActive={isActive('/portfolio')} onClick={handleNavClick}>Portfolio</NavLink>
            <NavLink to="/faq" isActive={isActive('/faq')} onClick={handleNavClick}>FAQ</NavLink>
            <NavLink to="/contacto" isActive={isActive('/contacto')} onClick={handleNavClick}>Contacto</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 pt-4">
              <MobileNavLink to="/" isActive={isActive('/')} onClick={handleNavClick}>
                Inicio
              </MobileNavLink>
              <MobileNavLink to="/nosotros" isActive={isActive('/nosotros')} onClick={handleNavClick}>
                Nosotros
              </MobileNavLink>
              <MobileNavLink to="/servicios" isActive={isActive('/servicios')} onClick={handleNavClick}>
                Servicios
              </MobileNavLink>
              <MobileNavLink to="/portfolio" isActive={isActive('/portfolio')} onClick={handleNavClick}>
                Portfolio
              </MobileNavLink>
              <MobileNavLink to="/faq" isActive={isActive('/faq')} onClick={handleNavClick}>
                FAQ
              </MobileNavLink>
              <MobileNavLink to="/contacto" isActive={isActive('/contacto')} onClick={handleNavClick}>
                Contacto
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function NavLink({ to, children, isActive, onClick }: { 
  to: string; 
  children: React.ReactNode; 
  isActive: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`transition-colors duration-200 ${
        isActive 
          ? 'text-blue-500 font-semibold' 
          : 'text-gray-300 hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children, isActive, onClick }: { 
  to: string; 
  children: React.ReactNode; 
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`transition-colors duration-200 ${
        isActive 
          ? 'text-blue-500 font-semibold' 
          : 'text-gray-300 hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
}
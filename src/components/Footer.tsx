import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola, me comunico desde tu web: MagxorDigital, quiero conocer más sobre las web personalizadas para aumentar mis ventas.');
    window.open(`https://wa.me/5493584835320?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/images/Logo Magxor.png" alt="Magxor" className="w-6 h-6" />
              <span className="text-xl font-bold text-white">Magxor</span>
            </div>
            <p className="text-sm mb-4">
              Diseño web profesional y optimización SEO para impulsar tu presencia online y aumentar tus ventas.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-500 transition-colors">Inicio</Link></li>
              <li><Link to="/nosotros" className="hover:text-blue-500 transition-colors">Nosotros</Link></li>
              <li><Link to="/servicios" className="hover:text-blue-500 transition-colors">Servicios</Link></li>
              <li><Link to="/portfolio" className="hover:text-blue-500 transition-colors">Portfolio</Link></li>
              <li><Link to="/faq" className="hover:text-blue-500 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><span className="text-sm">Diseño Web Profesional</span></li>
              <li><span className="text-sm">Optimización SEO</span></li>
              <li><span className="text-sm">Tarjetas Digitales</span></li>
              <li><span className="text-sm">Hosting Incluido</span></li>
              <li><span className="text-sm">Soporte Técnico</span></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-500" />
                <span className="text-sm">+54 9 358 483-5320</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="text-sm">info@magxor.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span className="text-sm">Río Cuarto, Córdoba</span>
              </div>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="mt-4 inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">Contactar por WhatsApp</span>
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm">© 2025 Magxor Digital. Todos los Derechos Reservados.</p>
        </div>
      </div>
    </footer>
  );
}
import React from 'react';
import { Zap } from 'lucide-react';

export function Contact() {
  const handleFreeMonthClick = () => {
    const servicesSection = document.getElementById('servicios');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contacto" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-50" />
      
      <div className="container mx-auto px-4 relative">
               
        <div className="max-w-2xl mx-auto bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
          <button
            onClick={handleFreeMonthClick}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 mb-8 hover:opacity-90 transition-all hover:scale-105"
          >
            <div className="flex items-center space-x-4">
              <Zap className="w-8 h-8 text-white animate-pulse" />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white">¡Tu Primer Mes, Gratis!</h3>
                <p className="text-white/80">Comienza tu presencia digital sin riesgo</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
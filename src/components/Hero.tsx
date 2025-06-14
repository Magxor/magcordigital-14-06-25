import React from 'react';
import { ArrowRight, Rocket, Globe, Search } from 'lucide-react';

export function Hero() {
  const handleButtonClick = () => {
    const servicesSection = document.getElementById('servicios');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-blue-950 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.25
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="flex justify-center space-x-6 mb-8">
          <Feature icon={Globe} text="Diseño Web Profesional" />
          <Feature icon={Search} text="Optimización SEO" />
          <Feature icon={Rocket} text="Resultados Garantizados" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Impulsa tu Presencia Online
          </span>
          <br />
          <span className="text-4xl md:text-6xl">
            con Diseño Web y SEO Profesional
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transformamos Negocio en una presencia digital impactante como esta. 
          Diseño web personalizado y optimización SEO para destacar en Google.
        </p>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-[1px] rounded-lg inline-block mb-12 animate-pulse">
          <div className="bg-black px-8 py-4 rounded-lg">
            <p className="text-2xl md:text-3xl font-bold text-white">
              ¡Aprovecha tu Primer Mes Gratis!
            </p>
          </div>
        </div>

        <button
          onClick={handleButtonClick}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-6 rounded-lg text-xl font-semibold hover:opacity-90 transition-all hover:scale-105 flex items-center mx-auto space-x-3 shadow-lg shadow-blue-500/20"
        >
          <span>Impulsá tu Negocio Ahora</span>
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

function Feature({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="hidden md:flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
      <Icon className="w-5 h-5 text-blue-500" />
      <span className="text-gray-200">{text}</span>
    </div>
  );
}
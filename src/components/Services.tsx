import React from 'react';
import { Check, User, Building2, Building, ArrowRight } from 'lucide-react';

const plans = [
  {
    icon: User,
    title: 'Plan Particular',
    price: '10.000',
    features: [
      'Diseño web profesional personalizado',
      'Hosting incluido',
      'Tarjeta de presentación digital e imprimible',
      'Información del servicio',
      'Contacto directo por WhatsApp',
      'Una Actualización Mensual'
    ]
  },
  {
    icon: Building2,
    title: 'Plan Comercio',
    price: '20.000',
    features: [
      'Diseño web profesional personalizado',
      'Hosting incluido',
      'Tarjeta de presentación digital e imprimible',
      'Información completa del negocio',
      'Detalles de productos/servicios',
      'Links a redes sociales',
      'Una Actualizacion mensual',
      'Carga de Datos y Fotos en Google Maps',
      'Horarios de Atención',
      'Dirección de la Sucursal',
      'Contacto Directo por Whatsapp'
    ]
  },
  {
    icon: Building,
    title: 'Plan Empresa',
    price: '30.000',
    features: [
      'Diseño web profesional personalizado',
      'Hosting incluido',
      'Tarjeta de presentación digital e imprimible',
      'Información completa de la Empresa',
      'Detalles de productos/servicios',
      'Botón interactivo "¿Cómo llegar?"',
      'Links a redes sociales',
      'Dos Actualizaciones mensuales',
      'Carga de Datos y Fotos en Google Maps',
      'Horarios de Atención Interactivo',
      'Dirección de las Sucursales',
      'Contacto Directo por Whatsapp',
      'Seo Avanzado para Visualizaciones Masivas'
    ]
  }
];

export function Services() {
  const handlePlanSelection = (planTitle: string) => {
    window.location.href = `/plan-details?plan=${encodeURIComponent(planTitle)}`;
  };

  return (
    <section id="servicios" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Nuestros Planes
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="bg-gray-800 rounded-xl p-8 hover:transform hover:scale-105 transition-transform duration-300"
            >
              <plan.icon className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">{plan.title}</h3>
              <p className="text-3xl font-bold text-blue-500 mb-6">
                ${plan.price}
                <span className="text-gray-400 text-base">/mes</span>
              </p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handlePlanSelection(plan.title)}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 rounded-lg hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center space-x-2 group"
              >
                <span>Elegir este Plan</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
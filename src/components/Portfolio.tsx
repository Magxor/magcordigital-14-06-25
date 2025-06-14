import React from 'react';
import { ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Gestoría Previsional',
    description: 'Página web para un estudio de gestoría previsional con información de servicios y contacto directo.',
    image: 'https://www.institutocarlrogers.org/wp-content/uploads/2020/06/Laptop-con-Postgrado-centrado-en-la-persona.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Plan Particular',
    link: 'https://sites.google.com/view/gestoria-previsional/magxor'
  },
  {
    title: 'Dani Pc',
    description: 'Venta Mayorista y Minorista de Articulos de Tecnología para la Vida.',
    image: 'https://images.unsplash.com/photo-1600340048140-909329c17ac1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Plan Comercio',
    link: 'https://sites.google.com/view/danipcriocuarto/magxor'
  },
  {
    title: 'Fábrica de Pastas Santa Elena',
    description: 'Fábrica de Pastas Con Ventas Mayoristas y Minoristas. Especializada en atraer nuevos clientes y generar más ventas por pedidos.',
    image: 'https://images.unsplash.com/photo-1612966874574-e0a92ad2bc43?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Plan Empresa',
    link: 'https://sites.google.com/view/magxor/pastassantaelena'
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Nuestro Portfolio
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl bg-gray-900 hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm mb-3">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors"
                >
                  Ver Proyecto
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
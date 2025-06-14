import React, { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Gestoría Previsional',
    description: 'Página web para un estudio de gestoría previsional con información de servicios y contacto directo.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Plan Particular',
    link: 'https://sites.google.com/view/gestoria-previsional/magxor',
    tags: ['Servicios Profesionales', 'Información', 'Contacto']
  },
  {
    title: 'Dani Pc',
    description: 'Venta Mayorista y Minorista de Artículos de Tecnología para la Vida.',
    image: 'https://images.unsplash.com/photo-1600340048140-909329c17ac1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Plan Comercio',
    link: 'https://sites.google.com/view/danipcriocuarto/magxor',
    tags: ['E-commerce', 'Tecnología', 'Ventas Online']
  },
  {
    title: 'Fábrica de Pastas Santa Elena',
    description: 'Fábrica de Pastas Con Ventas Mayoristas y Minoristas. Especializada en atraer nuevos clientes y generar más ventas por pedidos.',
    image: 'https://images.unsplash.com/photo-1612966874574-e0a92ad2bc43?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Plan Empresa',
    link: 'https://sites.google.com/view/magxor/pastassantaelena',
    tags: ['Alimentación', 'Manufactura', 'B2B']
  },
  {
    title: 'Estudio Contable Martínez',
    description: 'Servicios contables integrales para empresas y particulares con más de 15 años de experiencia.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Plan Particular',
    link: '#',
    tags: ['Contabilidad', 'Servicios Profesionales', 'Consultoría']
  },
  {
    title: 'Boutique Elegancia',
    description: 'Tienda de ropa femenina con las últimas tendencias de la moda y atención personalizada.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Plan Comercio',
    link: '#',
    tags: ['Moda', 'Retail', 'Boutique']
  },
  {
    title: 'Constructora del Valle',
    description: 'Empresa constructora especializada en proyectos residenciales y comerciales de gran envergadura.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Plan Empresa',
    link: '#',
    tags: ['Construcción', 'Inmobiliaria', 'Proyectos']
  }
];

const categories = ['Todos', 'Plan Particular', 'Plan Comercio', 'Plan Empresa'];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredItems = selectedCategory === 'Todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-blue-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nuestro <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre algunos de los proyectos que hemos desarrollado para nuestros clientes
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Filter className="w-6 h-6 text-blue-500 mr-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-gray-800 hover:transform hover:scale-105 transition-transform duration-300"
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
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {item.link !== '#' ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors"
                    >
                      Ver Proyecto
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center text-gray-500">
                      Próximamente
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-500 mb-2">50+</div>
              <div className="text-gray-400">Proyectos Completados</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-500 mb-2">100%</div>
              <div className="text-gray-400">Clientes Satisfechos</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-500 mb-2">24h</div>
              <div className="text-gray-400">Tiempo de Respuesta</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-500 mb-2">2+</div>
              <div className="text-gray-400">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para ser Nuestro Próximo Caso de Éxito?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Únete a nuestros clientes satisfechos y transforma tu presencia digital
          </p>
          <a
            href="/servicios"
            onClick={handleScrollToTop}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-all hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Comenzar mi Proyecto</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
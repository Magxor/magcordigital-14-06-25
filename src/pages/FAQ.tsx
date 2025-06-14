import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from 'lucide-react';

const faqs = [
  {
    category: 'General',
    questions: [
      {
        question: '¿Cómo funciona el servicio?',
        answer: 'El proceso es simple: primero completas un formulario para cargar tu negocio, dependiendo el plan que elijas, después, tenemos una consulta para entender tus necesidades, luego diseñamos tu sitio web, lo revisas para aprobación, y finalmente lo publicamos. Todo el proceso toma aproximadamente 5-7 días hábiles.'
      },
      {
        question: '¿Qué incluye el primer mes gratis?',
        answer: 'El primer mes gratis incluye todos los servicios del plan que elijas: diseño web, hosting, tarjeta digital y todas las funcionalidades correspondientes. Es una oportunidad para que pruebes nuestro servicio sin ningún riesgo.'
      },
      {
        question: '¿Necesito conocimientos técnicos?',
        answer: 'No necesitas ningún conocimiento técnico. Nosotros nos encargamos de todo: desde el diseño hasta la publicación y mantenimiento de tu sitio web. Solo necesitas proporcionarnos la información de tu negocio.'
      }
    ]
  },
  {
    category: 'Pagos y Facturación',
    questions: [
      {
        question: '¿Cómo se paga el servicio?',
        answer: 'Aceptamos transferencias bancarias y pagos con tarjeta a través de MercadoPago. El servicio se paga mensualmente, y el primer mes es completamente gratis para que puedas probar nuestro servicio sin compromiso y sin riesgos.'
      },
      {
        question: '¿Hay costos ocultos?',
        answer: 'No hay costos ocultos. El precio que ves es el precio que pagas. Incluye hosting, dominio, diseño, mantenimiento y soporte técnico. Todo está incluido en la tarifa mensual.'
      },
      {
        question: '¿Puedo cambiar de plan?',
        answer: 'Sí, puedes cambiar de plan en cualquier momento. Si quieres actualizar a un plan superior, la diferencia se prorratea en tu próxima factura. Si quieres bajar de plan, el cambio se aplica en el siguiente ciclo de facturación.'
      }
    ]
  },
  {
    category: 'Actualizaciones y Soporte',
    questions: [
      {
        question: '¿Cómo se actualiza el contenido?',
        answer: 'Las actualizaciones se solicitan por WhatsApp o email. Dependiendo de tu plan, puedes solicitar actualizaciones una o dos veces al mes. Las actualizaciones se realizan en 24-48 horas hábiles.'
      },
      {
        question: '¿Qué tipo de actualizaciones puedo solicitar?',
        answer: 'Puedes solicitar cambios de texto, imágenes, información de contacto, horarios, productos o servicios, y cualquier otro contenido de tu sitio web. Las actualizaciones de diseño mayor pueden requerir consulta adicional.'
      },
      {
        question: '¿Tienen soporte técnico?',
        answer: 'Sí, ofrecemos soporte técnico completo. Puedes contactarnos por WhatsApp, email o teléfono durante horarios de oficina. Respondemos consultas técnicas y resolvemos cualquier problema que puedas tener.'
      }
    ]
  },
  {
    category: 'Cancelación y Términos',
    questions: [
      {
        question: '¿Cómo se da de baja el servicio?',
        answer: 'Puedes dar de baja el servicio en cualquier momento sin penalización. Solo necesitas avisarnos con 5 días de anticipación antes del siguiente ciclo de facturación.'
      },
      {
        question: '¿Qué pasa con mi sitio web si cancelo?',
        answer: 'Si cancelas el servicio, tu sitio web se mantendrá activo hasta el final del período pagado. Después de eso, el sitio se dará de baja. Puedes solicitar una copia de tu contenido antes de la cancelación.'
      },
      {
        question: '¿Puedo recuperar mi sitio después de cancelar?',
        answer: 'Sí, puedes reactivar tu servicio en cualquier momento. Si han pasado menos de 30 días desde la cancelación, podemos restaurar tu sitio completamente. Después de 30 días, necesitaremos recrear el contenido.'
      }
    ]
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('General');

  const categories = faqs.map(faq => faq.category);
  const currentFAQs = faqs.find(faq => faq.category === selectedCategory)?.questions || [];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola, tengo una pregunta sobre sus servicios de diseño web.');
    window.open(`https://wa.me/5493584835320?text=${message}`, '_blank');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-blue-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <HelpCircle className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Preguntas <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Frecuentes</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setOpenIndex(null);
                  }}
                  className={`px-6 py-3 rounded-lg transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {currentFAQs.map((faq, index) => {
                const itemKey = `${selectedCategory}-${index}`;
                return (
                  <div
                    key={itemKey}
                    className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-colors"
                  >
                    <button
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-700/50 transition-colors"
                      onClick={() => setOpenIndex(openIndex === itemKey ? null : itemKey)}
                    >
                      <span className="text-lg font-semibold text-white pr-4">
                        {faq.question}
                      </span>
                      {openIndex === itemKey ? (
                        <ChevronUp className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      )}
                    </button>
                    
                    {openIndex === itemKey && (
                      <div className="px-6 pb-4 border-t border-gray-700">
                        <p className="text-gray-300 pt-4 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿No Encontraste tu Respuesta?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nuestro equipo está aquí para ayudarte. Contáctanos directamente y te responderemos lo antes posible.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-gray-900 p-6 rounded-xl">
              <MessageCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">WhatsApp</h3>
              <p className="text-gray-400 mb-4">Respuesta inmediata por WhatsApp</p>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Contactar por WhatsApp
              </button>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-xl">
              <HelpCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Soporte Técnico</h3>
              <p className="text-gray-400 mb-4">Ayuda especializada para tu proyecto</p>
              <a
                href="/contacto"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
              >
                Contactar Soporte
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
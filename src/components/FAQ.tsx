import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: '¿Cómo funciona el servicio?',
    answer: 'El proceso es simple: primero completas un formulario para cargar tu negocio, dependiendo el plan que elijas, después, tenemos una consulta para entender tus necesidades, luego diseñamos tu sitio web, lo revisas para aprobación, y finalmente lo publicamos. Todo el proceso toma aproximadamente 5-7 días hábiles.'
  },
  {
    question: '¿Cómo se paga el servicio?',
    answer: 'Aceptamos transferencias bancarias y pagos con tarjeta a través de MercadoPago. El servicio se paga mensualmente, y el primer mes es completamente gratis para que puedas probar nuestro servicio sin compromiso y sin riesgos.'
  },
  {
    question: '¿Cómo se actualiza el contenido?',
    answer: 'Las actualizaciones se solicitan por WhatsApp o email. Dependiendo de tu plan, puedes solicitar actualizaciones una o dos veces al mes. Las actualizaciones se realizan en 24-48 horas hábiles.'
  },
  {
    question: '¿Cómo se da de baja el servicio?',
    answer: 'Puedes dar de baja el servicio en cualquier momento sin penalización. Solo necesitas avisarnos con 5 días de anticipación antes del siguiente ciclo de facturación.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Preguntas Frecuentes
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
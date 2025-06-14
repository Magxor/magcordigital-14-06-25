import React from 'react';
import { Gift, ArrowRight, Sticker } from 'lucide-react';

export function PlanInfo() {
  const searchParams = new URLSearchParams(window.location.search);
  const planTitle = searchParams.get('plan');

  const getCardPreviewUrl = () => {
    switch (planTitle) {
      case 'Plan Particular':
        return 'https://i.postimg.cc/4dQh9PyH/01-Presentaci-n-Tarjeta-Particular.jpg?auto=format&fit=crop&w=1000&q=800';
      case 'Plan Comercio':
        return 'https://i.postimg.cc/fyHtHbxw/03-Presentaci-n-Tarjeta-Comercio.jpg?auto=format&fit=crop&w=1000&q=800';
      case 'Plan Empresa':
        return 'https://i.postimg.cc/c4H8vQS6/05-Presentaci-n-Tarjeta-Empresas.jpg?auto=format&fit=crop&w=800&q=80';
      default:
        return '';
    }
  };

  const handleBackClick = () => {
    window.location.href = '/#servicios';
  };

  const showSticker = planTitle !== 'Plan Particular';

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-black pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            ¡Estás más cerca de Potenciar tu Negocio!
          </h1>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <div className="flex items-center justify-center mb-6">
              <Gift className="w-12 h-12 text-blue-500 animate-bounce" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Te Regalamos con tu {planTitle}:
            </h2>

            <div className={`grid ${showSticker ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-8 mb-12`}>
              {/* Digital Card Preview */}
              <div>
                <div className="flex items-center mb-4">
                  <Gift className="w-6 h-6 text-blue-500 mr-2" />
                  <h3 className="text-xl font-semibold text-white">Tarjeta de Presentación</h3>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src={getCardPreviewUrl()} 
                    alt="Tarjeta de presentación" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="mt-6">
                  <img
                    src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074&auto=format&fit=crop"
                    alt="Ejemplo de uso"
                    className="w-full h-48 object-cover rounded-xl shadow-lg"
                  />
                  <p className="text-sm text-gray-400 mt-2">
                    Ejemplo de cómo tus clientes verán tu información
                  </p>
                </div>
              </div>

              {/* Sticker Preview - Only shown for Commercial and Business plans */}
              {showSticker && (
                <div>
                  <div className="flex items-center mb-4">
                    <Sticker className="w-6 h-6 text-blue-500 mr-2" />
                    <h3 className="text-xl font-semibold text-white">Sticker Promocional</h3>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-[1px] rounded-xl">
                    <div className="bg-gray-900 rounded-xl p-6">
                      <img 
                        src="https://i.postimg.cc/zXm9BkWF/PUERTA.jpg"
                        alt="Sticker promocional"
                        className="w-full h-50 object-cover rounded-lg mb-4"
                      />
                      <div className="text-center">
                        <p className="text-lg font-bold text-white mb-2">¡Conocé más de Nosotros!</p>
                        <p className="text-sm text-gray-300">Escanea el código QR</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">
                    *Diseño personalizado para tu negocio,(Incluye tu Logo y Qr a tu Web)!
                  </p>
                </div>
              )}
            </div>

            <ul className="text-left text-gray-300 space-y-4 mb-8">
              <li className="flex items-center">
                <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                Diseño profesional personalizado
              </li>
              <li className="flex items-center">
                <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                QR dinámico para compartir fácilmente
              </li>
              <li className="flex items-center">
                <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                Enlaces directos a tu sitio web
              </li>
              {showSticker && (
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                  Sticker promocional para tu negocio, Imprimible en tu Gráfica de Confianza.
                </li>
              )}
            </ul>
          </div>

          <div className="space-y-4">
            <a
              href="https://forms.gle/kmAdxeB1ZmeT8jXp8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:opacity-90 transition-all hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>¡Quiero Comenzar Ahora!</span>
              <ArrowRight className="w-6 h-6" />
            </a>

            <div>
              <button
                onClick={handleBackClick}
                className="text-gray-400 hover:text-white transition-colors mt-4 inline-flex items-center space-x-2"
              >
                <span>Volver a Servicios</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
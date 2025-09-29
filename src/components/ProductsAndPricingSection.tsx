'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ProductsAndPricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  const notebooks = [
    {
      id: 1,
      name: "College Xteen",
      image: "/img/Screen-Display.svg",
      color: "bg-blue-900"
    },
    {
      id: 2,
      name: "Minerva Block",
      image: "/img/Screen-Display.svg",
      color: "bg-gradient-to-br from-cyan-400 to-pink-500"
    },
    {
      id: 3,
      name: "Anillados Minerva",
      image: "/img/Screen-Display.svg",
      color: "bg-black"
    },
    {
      id: 4,
      name: "Cuaderno Escolar",
      image: "/img/Screen-Display.svg",
      color: "bg-pink-200"
    },
    {
      id: 5,
      name: "Cuaderno Universitario",
      image: "/img/Screen-Display.svg",
      color: "bg-gradient-to-br from-purple-400 to-pink-400"
    },
    {
      id: 6,
      name: "Cuaderno Profesional",
      image: "/img/Screen-Display.svg",
      color: "bg-gradient-to-br from-green-400 to-pink-400"
    },
    {
      id: 7,
      name: "Cuaderno Premium",
      image: "/img/Screen-Display.svg",
      color: "bg-black"
    },
    {
      id: 8,
      name: "Cuaderno Deluxe",
      image: "/img/Screen-Display.svg",
      color: "bg-gradient-to-br from-blue-500 to-purple-600"
    }
  ]

  return (
    <div className="bg-white">
      {/* Quiz Creation Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Quiz Video */}
            <div className="relative">
              <div className="video-fade-up video-breath">
                <video
                  src="/videos/Quiz.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-80 h-[600px] mx-auto object-contain transition-all duration-500 hover:scale-105 hover:drop-shadow-2xl"
                  style={{ animationDelay: '0.1s' }}
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Crea rápidamente notas, tarjetas didácticas, 
                cuestionarios...
              </h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  Eleva tu aprendizaje y realiza un seguimiento de tu progreso creando rápidamente tarjetas didácticas 
                  y cuestionarios personalizados para la autoevaluación.
                </p>
              </div>
              
              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://play.google.com/store/apps/details?id=com.estudia&hl=es" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <img src="/img/Play Store.svg" alt="Disponible en Google Play" className="h-14 hover:opacity-80 transition-opacity" />
                </a>
                <a href="https://apps.apple.com/us/app/estudia/id6751822145" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <img src="/img/App Store.svg" alt="Disponible en App Store" className="h-14 hover:opacity-80 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="plans" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-janda-navy mb-6">
              Anotar, escribir y crear 
              con EstudIA
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Aprovecha estas funciones en la aplicación EstudIA
            </p>
            
            {/* Promotional Comment */}
            <div className="bg-janda-yellow/20 border-2 border-janda-yellow rounded-xl p-6 max-w-2xl mx-auto mb-8">
              <p className="text-lg text-gray-800 font-semibold">
                <span className="text-janda-navy">🎉 ¡Oferta de lanzamiento!</span> 
              </p>
              <p className="text-base text-gray-700 mt-2">
                • 3 meses GRATIS con todas las funciones premium<br/>
                • Después solo S/ 7.40/mes (~2 USD)<br/>
                • Si no continúas, automáticamente pasas a la versión básica gratuita
              </p>
              <p className="text-sm text-gray-600 mt-3 italic">
                Sin compromisos. Sin pagos automáticos después del periodo gratuito.
              </p>
            </div>
            
            {/* Plan Toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 rounded-full p-1 flex">
                <button 
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                    !isAnnual 
                      ? 'bg-janda-cyan text-white' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Mensual
                </button>
                <button 
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                    isAnnual 
                      ? 'bg-janda-cyan text-white' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Anual
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-gray-50 rounded-3xl p-8 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">EstudIA VERSIÓN GRATUITA</h3>
                <div className="text-4xl font-bold text-gray-900 mb-4">
                  S/ 0.00
                  <span className="text-lg text-gray-600">/mes</span>
                </div>
                <p className="text-gray-600 mb-6">
                  ¡Siempre gratis! Acceso a las funcionalidades principales de forma simplificada.
                </p>
                <button className="w-full bg-white text-gray-900 border-2 border-gray-300 py-3 px-6 rounded-full font-semibold hover:bg-gray-50 transition-colors">
                  COMENZAR GRATIS
                </button>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-4">Características incluidas:</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Cuaderno digital básico con índice</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">OCR básico para reconocimiento de texto</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Tutor IA básico (5 consultas/día)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Sincronización básica en la nube</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white border-3 border-janda-cyan rounded-3xl p-8 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-janda-cyan text-white px-6 py-1 rounded-full text-sm font-semibold">
                Recomendado
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">EstudIA PREMIUM</h3>
                <div className="text-4xl font-bold text-gray-900 mb-4">
                  {isAnnual ? (
                    <>
                      S/ 6.50
                      <span className="text-lg text-gray-600">/mes</span>
                      <div className="text-sm text-green-600 font-medium">
                        S/ 78.00/año (¡Ahorra 25%!)
                      </div>
                    </>
                  ) : (
                    <>
                      S/ 7.40
                      <span className="text-lg text-gray-600">/mes</span>
                      <div className="text-sm text-gray-500">
                        (~2 USD al tipo de cambio)
                      </div>
                    </>
                  )}
                </div>
                <p className="text-gray-600 mb-6">
                  {isAnnual 
                    ? "Facturado anualmente. Acceso completo con descuento."
                    : "Facturado mensualmente. Acceso completo a todas las funciones."
                  }
                </p>
                <button className="w-full bg-janda-cyan text-white py-3 px-6 rounded-full font-semibold hover:bg-cyan-600 transition-colors">
                  SUSCRIBIRSE AHORA
                </button>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-4">Todo lo del plan gratuito, más:</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Tutor IA ilimitado con explicaciones avanzadas</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Resolución de problemas matemáticos y científicos</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Generación automática de cuestionarios</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Tarjetas de estudio interactivas</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Conversión de voz a texto y texto a voz</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Sincronización avanzada en múltiples dispositivos</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Soporte prioritario 24/7</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Acceso anticipado a nuevas funcionalidades</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
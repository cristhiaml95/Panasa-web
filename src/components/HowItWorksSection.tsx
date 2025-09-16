'use client'

import Image from 'next/image'

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ¿CÓMO FUNCIONA?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La aplicación totalmente integrada con el cuaderno EstudIA incluye
            una Tutoría con IA, Procesamiento Digital con IA Generativa y OCR.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-600">
                No es necesario que escribas tu pregunta.
              </p>
              <p className="text-lg text-gray-700">
                Simplemente tome una foto de su cuaderno ESTUDIA y obtenga respuestas instantáneas 
                de la foto de su problema o pregunta.
              </p>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative">
            <div className="bg-janda-navy rounded-[3rem] p-8 mx-auto w-80 h-[600px] relative overflow-hidden">
              <div className="bg-janda-cyan rounded-[2rem] w-full h-full relative flex flex-col">
                {/* Status Bar */}
                <div className="flex justify-between items-center p-4 text-white text-sm">
                  <span>9:41</span>
                  <div className="flex space-x-1">
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                    <div className="w-1 h-2 bg-white rounded-sm"></div>
                    <div className="w-6 h-2 bg-white rounded-sm"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white rounded-t-[2rem] p-6 flex flex-col justify-center items-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-janda-cyan rounded-full mx-auto flex items-center justify-center">
                      <span className="text-white text-2xl">📱</span>
                    </div>
                    <p className="text-janda-navy font-semibold">
                      Powered by MagicBook Technologies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App Features */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Phone Mockups */}
          <div className="flex justify-center space-x-8">
            {/* Yellow Phone */}
            <div className="bg-black rounded-[2.5rem] p-4 w-64 h-[500px] relative">
              <div className="bg-janda-yellow rounded-[2rem] w-full h-full relative flex flex-col">
                <div className="flex-1 flex flex-col justify-center items-center p-6 text-center">
                  <div className="space-y-6">
                    <div className="w-20 h-20 bg-janda-blue rounded-2xl mx-auto flex items-center justify-center">
                      <span className="text-white text-3xl">🎓</span>
                    </div>
                    <div className="text-janda-navy">
                      <p className="font-bold text-lg mb-2">Desbloqueie o seu</p>
                      <p className="font-bold text-lg mb-4">conhecimento com a EstudIA</p>
                      <p className="text-sm">
                        Obter o chatbot oficial da EstudIA de forma rápida e grátis
                      </p>
                    </div>
                    <div className="space-y-3">
                      <button className="bg-janda-blue text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Pular
                      </button>
                      <button className="bg-janda-cyan text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Continuar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cyan Phone */}
            <div className="bg-black rounded-[2.5rem] p-4 w-64 h-[500px] relative">
              <div className="bg-janda-cyan rounded-[2rem] w-full h-full relative flex flex-col">
                <div className="flex-1 flex flex-col justify-center items-center p-6 text-center">
                  <div className="space-y-6">
                    <div className="w-20 h-20 bg-janda-orange rounded-2xl mx-auto flex items-center justify-center">
                      <span className="text-white text-3xl">📄</span>
                    </div>
                    <div className="text-white">
                      <p className="font-bold text-lg mb-2">Transforme documentos em</p>
                      <p className="font-bold text-lg mb-4">conversas. É só enviar o arquivo</p>
                      <p className="text-sm mb-4">e começar a conversar.</p>
                      <p className="text-xs">
                        Converta Imagens e PDFs em documentos de texto. Seus 
                        documentos podem conter figuras ou tabelas. O aplicativo 
                        poderá responder perguntas.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <button className="bg-white text-janda-cyan px-6 py-2 rounded-full text-sm font-semibold">
                        Skip
                      </button>
                      <button className="bg-janda-yellow text-janda-navy px-6 py-2 rounded-full text-sm font-semibold">
                        Siguiente
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
              ¿CÓMO FUNCIONA?
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Aplicación EstudIA:</h4>
                <p className="text-gray-700 leading-relaxed">
                  La aplicación, disponible para dispositivos móviles, es el centro de control de su cuaderno digital. 
                  Organiza tus notas, te permite buscar palabras clave, ofrece funciones de edición y formato, e integra 
                  herramientas de inteligencia artificial para mejorar tu aprendizaje.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Inteligencia artificial:</h4>
                <p className="text-gray-700 leading-relaxed">
                  La IA de EstudIA aprende de tus hábitos de estudio, personalizando el contenido y las sugerencias 
                  para optimizar tu aprendizaje. Puede generar resúmenes automáticos, crear tarjetas interactivas, 
                  identificar conceptos importantes e incluso responder preguntas sobre sus notas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
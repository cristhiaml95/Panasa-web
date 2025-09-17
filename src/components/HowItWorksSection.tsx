'use client'

import Image from 'next/image'

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-janda-navy mb-6">
            ¿CÓMO FUNCIONA?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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

          {/* Right Content - Video grande y centrado */}
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="relative w-full max-w-[350px] h-[500px] flex items-center justify-center">
              <video
                src="/videos/ExplainMe.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain rounded-[2.5rem]"
                style={{ background: 'transparent' }}
              />
            </div>
            <p className="text-janda-navy font-semibold mt-4 text-center">
              Powered by MagicBook Technologies
            </p>
          </div>
        </div>

        {/* App Features */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Phone Mockups */}
          <div className="flex justify-center space-x-8">
            {/* Video Flashcards */}
            <div className="w-80 h-[600px] flex flex-col items-center justify-center video-fade-up video-rotate">
              <video
                src="/videos/Flashcards.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-janda-cyan/20"
                style={{ background: 'transparent' }}
              />
            </div>

            {/* Cyan Phone */}
            <div className="w-80 h-[600px] flex flex-col items-center justify-center video-fade-up video-breath" style={{ animationDelay: '0.2s' }}>
              <video
                src="/videos/LoginScreen.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-janda-navy/20"
                style={{ background: 'transparent' }}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-janda-navy">
              ¿CÓMO FUNCIONA?
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-janda-cyan mb-3">Aplicación EstudIA:</h4>
                <p className="text-gray-700 leading-relaxed">
                  La aplicación, disponible para dispositivos móviles, es el centro de control de su cuaderno digital. 
                  Organiza tus notas, te permite buscar palabras clave, ofrece funciones de edición y formato, e integra 
                  herramientas de inteligencia artificial para mejorar tu aprendizaje.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-janda-cyan mb-3">Inteligencia artificial:</h4>
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
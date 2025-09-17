'use client'

import Image from 'next/image'

export default function FeaturesSection() {
  return (
    <div className="bg-white">
      {/* Capture Moment Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                CAPTURA EL MOMENTO
              </h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p className="font-semibold">
                  Al capturar cualquier texto o imagen con su cámara, nuestra tecnología de 
                  vanguardia genera resúmenes instantáneos y concisos, revolucionando la 
                  forma en que recopila y comprende la información.
                </p>
                <p>
                  Resuma instantáneamente el contenido al tomar una foto o usar un sistema de voz.
                </p>
                <p>
                  Con el Cuaderno Digital EstudIA, tus notas se convierten en un poderoso recurso de aprendizaje, 
                  accesible en cualquier momento y en cualquier lugar.
                </p>
              </div>
            </div>

            {/* Right Content - Phone Mockup */}
            <div className="relative">
              <div className="w-80 h-[600px] flex flex-col items-center justify-center">
                  <video
                    src="/videos/Scanner.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain rounded-3xl"
                    style={{ background: 'transparent' }}
                  />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section id="know-aia" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - MapaMental Video */}
            <div className="relative">
              <video
                src="/videos/MapaMental.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-80 h-[600px] mx-auto object-contain"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-janda-navy">
                ¿Qué es AiA?
              </h2>
              <div className="space-y-6">
                <p className="text-xl font-semibold text-janda-cyan">
                  ¡Haz una pregunta, obtén una respuesta instantánea!
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  AIA responde sobre una variedad de temas, que incluyen matemáticas, química, física, geografía, 
                  historia, inglés y más. ¡Ahora, incluso puedes hacer preguntas a través del audio! ¡Habla conmigo y 
                  descubre el poder de la tecnología de IA!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Recognition Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Reconocimiento de voz y síntesis de voz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Graba tus lecciones sin esfuerzo y las transcribiremos por ti. Nuestra avanzada tecnología garantiza 
              una transcripción precisa de sus grabaciones convirtiéndolas en texto legible.
            </p>
          </div>

          <div className="flex justify-center">
            {/* Speech2Text Video */}
            <div className="relative">
              <video
                src="/videos/speech2textfinal.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-80 h-[600px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Document Conversion Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Phone Mockup */}
            <div className="relative">
              <div className="bg-black rounded-[3rem] p-6 mx-auto w-80 h-[600px] relative">
                <div className="bg-white rounded-[2.5rem] w-full h-full relative flex flex-col">
                  <div className="p-6 text-center">
                    <h3 className="font-bold mb-4">Antevisão</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-100 rounded-lg p-4 text-xs">
                        <div className="bg-white h-16 rounded mb-2"></div>
                        <p>QUESTIONÁRIO</p>
                        <p>Biologia 12, Q2</p>
                        <p>Segunda</p>
                        <p>0.2 MB</p>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-4 text-xs">
                        <div className="bg-white h-16 rounded mb-2"></div>
                        <p>QUESTIONÁRIO</p>
                        <p>Biologia 12, Q2</p>
                        <p>Segunda</p>
                        <p>0.5 MB</p>
                      </div>
                    </div>
                    <p className="text-xs mt-4">2 elementos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Convierte tus documentos en conversaciones.
              </h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  Envía archivos PDF, PPT, DOCX o imágenes, y convertiremos tus datos en conversaciones atractivas. 
                  Interactúa con MagicBook para responder preguntas relacionadas con documentos a través de 
                  mensajes o audio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
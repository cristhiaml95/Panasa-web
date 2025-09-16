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
              <div className="bg-black rounded-[3rem] p-6 mx-auto w-80 h-[600px] relative">
                <div className="bg-white rounded-[2.5rem] w-full h-full relative flex flex-col">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center p-4 text-black text-sm">
                    <span>9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-black rounded-sm"></div>
                      <div className="w-1 h-2 bg-black rounded-sm"></div>
                      <div className="w-6 h-2 bg-black rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col justify-center items-center">
                    <div className="text-center space-y-6">
                      <div className="w-24 h-24 bg-gray-100 rounded-2xl mx-auto flex items-center justify-center">
                        <div className="w-16 h-12 bg-janda-cyan rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs">QR</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-janda-navy font-bold text-lg">
                          Capture o momento! 📸
                        </p>
                        <p className="text-gray-600 text-sm">
                          Tire uma foto do seu caderno com a sua câmera e obtenha um resumo completo!
                        </p>
                      </div>
                      <button className="bg-janda-cyan text-white px-8 py-3 rounded-full font-semibold">
                        Tirar uma foto
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Phone Mockup */}
            <div className="relative">
              <div className="bg-black rounded-[3rem] p-6 mx-auto w-80 h-[600px] relative">
                <div className="bg-white rounded-[2.5rem] w-full h-full relative flex flex-col">
                  {/* Header */}
                  <div className="p-6 border-b">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-janda-cyan rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">A</span>
                      </div>
                      <span className="font-semibold">Biologia</span>
                      <span className="bg-janda-yellow text-janda-navy px-2 py-1 rounded-full text-xs font-semibold">
                        Tópicos
                      </span>
                    </div>
                  </div>
                  
                  {/* Chat Content */}
                  <div className="flex-1 p-4 space-y-4 overflow-hidden">
                    <div className="bg-janda-cyan text-white p-3 rounded-lg text-sm">
                      Pergunta é isto
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center space-x-2">
                        <span>📝</span>
                        <span>Explicar-me</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>🔄</span>
                        <span>Traduzir</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>💡</span>
                        <span>Gerar conteúdo</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>📋</span>
                        <span>Resumir</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>🔧</span>
                        <span>Reformular</span>
                      </div>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg text-xs">
                      <p>
                        Citoplasma é uma substância gelatinosa que preenche o interior...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                ¿Qué es AiA?
              </h2>
              <div className="space-y-6">
                <p className="text-xl font-semibold text-gray-900">
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

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Phone Mockup */}
            <div className="relative">
              <div className="bg-black rounded-[3rem] p-6 mx-auto w-80 h-[600px] relative">
                <div className="bg-white rounded-[2.5rem] w-full h-full relative flex flex-col">
                  {/* Header */}
                  <div className="p-6 border-b">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="font-semibold">Células</span>
                        <span className="bg-janda-yellow text-janda-navy px-2 py-1 rounded-full text-xs font-semibold">
                          Tópicos
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-4 space-y-4">
                    <div className="bg-janda-cyan text-white p-3 rounded-lg text-sm">
                      Pergunta é isto
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg text-xs">
                      <p>
                        Citoplasma é uma substância gelatinosa e semi-líquida que preenche o interior das células...
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-red-500 rounded-full mx-auto flex items-center justify-center">
                        <span className="text-white">🎤</span>
                      </div>
                      <p className="text-xs mt-2">0:02</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Phone Mockup 2 */}
            <div className="relative">
              <div className="bg-black rounded-[3rem] p-6 mx-auto w-80 h-[600px] relative">
                <div className="bg-white rounded-[2.5rem] w-full h-full relative flex flex-col">
                  <div className="flex-1 p-4 space-y-4">
                    <div className="text-xs space-y-2">
                      <p>
                        Citoplasma é uma substância gelatinosa e semi-líquida que preenche o interior das células...
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-200 rounded-2xl mx-auto flex items-center justify-center mb-4">
                        <span className="text-2xl">📊</span>
                      </div>
                      <p className="text-xs">• 0:15</p>
                    </div>
                  </div>
                </div>
              </div>
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
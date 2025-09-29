'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section id="about" className="bg-janda-navy text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Notebook Image */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-4 md:p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <Image
                src="/img/Screen-Display.svg"
                alt="Cuaderno Digital EstudIA"
                width={400}
                height={500}
                className="w-full h-auto max-h-[400px] md:max-h-[500px] object-contain rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-janda-orange text-white px-4 py-2 rounded-full font-semibold text-sm">
              Powered by EstudIA
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img 
                    src="/img/logoBlanco.png" 
                    alt="EstudIA Logo" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-2xl font-bold text-janda-cyan">EstudIA</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                ¿Sobre la APP?
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-gray-200">
                Tu tutor EstudIA representa la evolución del aprendizaje combinando la practicidad de la escritura 
                tradicional con el poder de la tecnología; transforma sus notas en un entorno interactivo e inteligente.
              </p>

              <p className="text-gray-200">
                <strong className="text-janda-cyan">Organiza tus ideas, accede a información relevante, 
                revisa el contenido de manera eficiente y personaliza 
                tu aprendizaje según tus necesidades.</strong>
              </p>

              <p className="text-gray-200">
                Con EstudIA, el futuro del estudio está al alcance de 
                tu mano, abriendo un mundo de posibilidades para 
                mejorar tus conocimientos y alcanzar tus metas. Todo 
                de forma rápida e inteligente. <span className="text-janda-yellow font-semibold">Escribe como siempre 
                con resultados brillantes.</span>
              </p>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
              <Link href="https://play.google.com/store/apps/details?id=com.estudia&hl=es" target="_blank" rel="noopener noreferrer" className="inline-block">
                <img src="/img/Play Store.svg" alt="Disponible en Google Play" className="h-14 hover:opacity-80 transition-opacity" />
              </Link>
              <Link href="https://apps.apple.com/us/app/estudia/id6751822145" target="_blank" rel="noopener noreferrer" className="inline-block">
                <img src="/img/App Store.svg" alt="Disponible en App Store" className="h-14 hover:opacity-80 transition-opacity" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
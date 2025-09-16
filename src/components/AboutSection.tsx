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
            <div className="bg-white rounded-3xl p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <Image
                src="/img/Screen-Display.svg"
                alt="Cuaderno Digital EstudIA"
                width={400}
                height={500}
                className="w-full h-[500px] object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-janda-orange text-white px-4 py-2 rounded-full font-semibold text-sm">
              Powered by MagicBook
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-janda-cyan rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">J</span>
                </div>
                <span className="text-2xl font-bold">EstudIA</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                ¿Sobre la APP?
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed">
              <p className="font-semibold">
                Mucho más que un cuaderno digital. Su compañero de estudio.
              </p>
              
              <p>
                El Cuaderno Digital EstudIA con Inteligencia Artificial es la evolución del estudio. 
                Combinando la practicidad de la escritura tradicional con el poder de la tecnología, 
                transforma sus notas en un entorno interactivo e inteligente.
              </p>

              <p>
                <strong>Organiza tus ideas, accede a información relevante, revisa el contenido 
                de manera eficiente y personaliza tu aprendizaje según tus necesidades.</strong>
              </p>

              <p>
                Con EstudIA, el futuro del estudio está al alcance de tu mano, abriendo un mundo de 
                posibilidades para mejorar tus conocimientos y alcanzar tus metas académicas. Todo de 
                forma rápida e inteligente. Notas perfectas, resultados brillantes.
              </p>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link href="#" className="inline-block">
                <div className="bg-black rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-gray-800 transition-colors">
                  <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                    <span className="text-black text-sm font-bold">▶</span>
                  </div>
                  <div className="text-sm">
                    <div className="text-gray-300">DISPONÍVEL NO</div>
                    <div className="font-semibold text-white">Google Play</div>
                  </div>
                </div>
              </Link>
              <Link href="#" className="inline-block">
                <div className="bg-black rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-gray-800 transition-colors">
                  <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                    <span className="text-black text-sm font-bold">🍎</span>
                  </div>
                  <div className="text-sm">
                    <div className="text-gray-300">Disponível na</div>
                    <div className="font-semibold text-white">App Store</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
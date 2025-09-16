'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Youtube, Facebook } from 'lucide-react'

export default function CallToActionAndFooter() {
  return (
    <div>
      {/* Call to Action Section */}
      <section className="gradient-bg py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-janda-yellow opacity-20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-janda-orange opacity-20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-janda-green opacity-30 rounded-full"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Pruébalo ahora 
                ¡gratuitamente!
              </h2>
              <p className="text-xl leading-relaxed">
                Resuma instantáneamente el contenido al 
                tomar una foto o usar el reconocimiento de voz
              </p>
              
              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="inline-block">
                  <div className="bg-black rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-gray-800 transition-colors">
                    <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                      <span className="text-black text-sm font-bold">▶</span>
                    </div>
                    <div className="text-sm text-white">
                      <div className="text-gray-300">DISPONÍVEL NO</div>
                      <div className="font-semibold">Google Play</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="inline-block">
                  <div className="bg-black rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-gray-800 transition-colors">
                    <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                      <span className="text-black text-sm font-bold">🍎</span>
                    </div>
                    <div className="text-sm text-white">
                      <div className="text-gray-300">Disponível na</div>
                      <div className="font-semibold">App Store</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Content - Phone Mockups */}
            <div className="relative">
              <div className="flex justify-center items-center space-x-4">
                {/* Phone 1 */}
                <div className="bg-black rounded-[3rem] p-4 w-64 h-[500px] relative transform -rotate-12">
                  <div className="bg-white rounded-[2.5rem] w-full h-full relative flex flex-col">
                    <div className="flex-1 flex items-center justify-center p-6">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-janda-cyan rounded-full mx-auto flex items-center justify-center">
                          <span className="text-white text-2xl">🤖</span>
                        </div>
                        <div className="space-y-2">
                          <p className="font-bold text-gray-900">AIA AIA</p>
                          <p className="text-sm text-gray-600">Como posso ajudá-lo hoje?</p>
                        </div>
                        <button className="bg-janda-cyan text-white px-6 py-2 rounded-full text-sm font-semibold">
                          Conversar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone 2 */}
                <div className="bg-black rounded-[3rem] p-4 w-64 h-[500px] relative">
                  <div className="bg-janda-yellow rounded-[2.5rem] w-full h-full relative flex flex-col">
                    <div className="flex-1 flex items-center justify-center p-6">
                      <div className="text-center space-y-4">
                        <div className="space-y-2">
                          <p className="text-janda-navy font-bold text-lg">Quer descobrir como funciona? Ou</p>
                          <p className="text-janda-navy font-bold text-lg">quer começar do zero com suas</p>
                          <p className="text-janda-navy font-bold text-lg">anotações? Eu posso te ajudar!</p>
                        </div>
                        <div className="space-y-3">
                          <button className="bg-janda-blue text-white px-6 py-2 rounded-full text-sm font-semibold">
                            Fala
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone 3 */}
                <div className="bg-black rounded-[3rem] p-4 w-64 h-[500px] relative transform rotate-12">
                  <div className="bg-janda-cyan rounded-[2.5rem] w-full h-full relative flex flex-col">
                    <div className="flex-1 flex items-center justify-center p-6">
                      <div className="text-center space-y-4">
                        <div className="space-y-2 text-white">
                          <p className="font-bold text-lg">Desbloqueia uma complementação</p>
                          <p className="font-bold text-lg">sobre os fragmentos com IA</p>
                        </div>
                        <button className="bg-white text-janda-cyan px-6 py-2 rounded-full text-sm font-semibold">
                          Sim
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-janda-cyan rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-lg">J</span>
                </div>
                <span className="text-xl font-bold text-gray-900">EstudIA</span>
              </div>
              <p className="text-gray-600 mb-6">
                Tu cuaderno, tu mentor: Una nueva era de 
                aprendizaje en Educación.
              </p>
            </div>

            {/* Download Section */}
            <div className="lg:col-span-1">
              <h4 className="font-bold text-gray-900 mb-4">Descargar</h4>
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-white rounded flex items-center justify-center">
                  <span className="text-xs font-bold">QR</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mb-4">
                Escanee e acesse todos os nossos redes.
              </p>
              <div className="flex flex-col gap-2">
                <a href="#" className="inline-block">
                  <div className="bg-black rounded-lg px-4 py-2 flex items-center space-x-2">
                    <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                      <span className="text-black text-xs font-bold">▶</span>
                    </div>
                    <div className="text-xs text-white">
                      <div className="text-gray-300">DISPONÍVEL NO</div>
                      <div className="font-semibold">Google Play</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="inline-block">
                  <div className="bg-black rounded-lg px-4 py-2 flex items-center space-x-2">
                    <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                      <span className="text-black text-xs font-bold">🍎</span>
                    </div>
                    <div className="text-xs text-white">
                      <div className="text-gray-300">Disponível na</div>
                      <div className="font-semibold">App Store</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="lg:col-span-1">
              <h4 className="font-bold text-gray-900 mb-4">Contactos</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>R. José Pereira Jorge –</p>
                <p>242– Carandiru – SP–</p>
                <p>02067-020</p>
                <p className="mt-4">Servicio al cliente 0800 160 5656</p>
              </div>
            </div>

            {/* Legal */}
            <div className="lg:col-span-1">
              <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Condiciones de uso
                </Link>
                <Link href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Galletas
                </Link>
                <Link href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Política de privacidad
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <p className="text-sm text-gray-600 mb-4 lg:mb-0">
                ©Copyright 2025 EstudIA, Todos los derechos reservados
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-janda-yellow rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Youtube className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Política de privacidad
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
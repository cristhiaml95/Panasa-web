'use client'

import Image from 'next/image'

export default function ProductsAndPricingSection() {
  const notebooks = [
    {
      id: 1,
      name: "Yale Classic",
  image: "/img/Screen-Display.svg",
      color: "bg-blue-900"
    },
    {
      id: 2,
      name: "Magic Gradient",
  image: "/img/Screen-Display.svg",
      color: "bg-gradient-to-br from-cyan-400 to-pink-500"
    },
    {
      id: 3,
      name: "Harry Potter",
  image: "/img/Screen-Display.svg",
      color: "bg-black"
    },
    {
      id: 4,
      name: "Hello Kitty",
  image: "/img/Screen-Display.svg",
      color: "bg-pink-200"
    },
    {
      id: 5,
      name: "Unicorn Dreams",
  image: "/img/Screen-Display.svg",
      color: "bg-gradient-to-br from-purple-400 to-pink-400"
    },
    {
      id: 6,
      name: "Floral Liberty",
  image: "/img/Screen-Display.svg",
      color: "bg-gradient-to-br from-green-400 to-pink-400"
    },
    {
      id: 7,
      name: "Space Adventure",
  image: "/img/Screen-Display.svg",
      color: "bg-black"
    },
    {
      id: 8,
      name: "Disney Collection",
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
            {/* Left Content - Phone Mockup */}
            <div className="relative">
              <div className="bg-black rounded-[3rem] p-6 mx-auto w-80 h-[600px] relative">
                <div className="bg-gray-800 rounded-[2.5rem] w-full h-full relative flex flex-col">
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center text-white space-y-4">
                      <div className="w-16 h-16 bg-janda-cyan rounded-full mx-auto flex items-center justify-center">
                        <span className="text-white text-2xl">📝</span>
                      </div>
                      <p className="text-lg font-semibold">Quiz</p>
                      <p className="text-sm">Gerando os seus Quizzes</p>
                    </div>
                  </div>
                </div>
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
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="buy-notebooks" className="py-20 bg-janda-yellow">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              DÓNDE COMPRAR
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Con el Cuaderno Digital EstudIA, tus notas se convierten en 
              un poderoso recurso de aprendizaje, accesible en cualquier 
              momento y en cualquier lugar.
            </p>
          </div>

          {/* Notebooks Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {notebooks.map((notebook) => (
              <div key={notebook.id} className="group cursor-pointer">
                <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`${notebook.color} rounded-xl h-48 mb-4 relative overflow-hidden`}>
                    <Image
                      src={notebook.image}
                      alt={notebook.name}
                      fill
                      className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-center font-semibold text-gray-900">{notebook.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </section>

      {/* Pricing Section */}
      <section id="plans" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Anotar, escribir y crear 
              con EstudIA
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Aprovecha estas funciones en la aplicación EstudIA
            </p>
            
            {/* Plan Toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 rounded-full p-1 flex">
                <button className="bg-janda-cyan text-white px-6 py-2 rounded-full font-semibold">
                  Mensual
                </button>
                <button className="text-gray-600 px-6 py-2 rounded-full font-semibold">
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
                <div className="text-4xl font-bold text-gray-900 mb-4">R$ 0,00<span className="text-lg text-gray-600">/mes</span></div>
                <p className="text-gray-600 mb-6">
                  ¡Durante toda la experiencia, todo el tiempo que quieras!<br />
                  Acceso a la aplicación en las principales funcionalidades de forma simplificada.
                </p>
                <button className="w-full bg-white text-gray-900 border-2 border-gray-300 py-3 px-6 rounded-full font-semibold hover:bg-gray-50 transition-colors">
                  SUSCRIBIRSE AL PLAN
                </button>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-4">Características principales</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Creación de un cuaderno digital con índice y artículos.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Lector de texto con sistema OCR (Reconocimiento Óptico de Caracteres) desde escritura a mano hasta escritura digital.
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Tutor con IA generativa para explicar, traducir, generar contenido, resumir y reformular.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Interacción con AIA y tutor con IA generativa.</span>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Cena individual mensual</h3>
                <div className="text-4xl font-bold text-gray-900 mb-4">R$ 7,90 <span className="text-lg text-gray-600">por mes</span></div>
                <p className="text-gray-600 mb-6">
                  Facturado mes a mes.<br />
                  Acceso completo a la aplicación.
                </p>
                <button className="w-full bg-janda-cyan text-white py-3 px-6 rounded-full font-semibold hover:bg-cyan-600 transition-colors">
                  SUSCRIBIRSE AL PLAN
                </button>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-4">Acceso completo a la aplicación.</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Creación de un cuaderno digital con índice y artículos.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Lector de texto con sistema OCR (Reconocimiento Óptico de Caracteres) desde escritura a mano hasta escritura digital.
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">
                      Resolución y tutorización de problemas matemáticos, físicos o químicos con el sistema OCR (Reconocimiento Óptico de Caracteres).
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Tutor con IA generativa para explicar, traducir, generar contenido, resumir y reformular.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Cuestionarios increíbles</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Tarjetas interactivas</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Voz a texto.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Texto a voz.</span>
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
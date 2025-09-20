'use client'

import Image from 'next/image'

export default function PartnersSection() {
  const partners = [
    {
      id: 1,
      name: "College Xteen",
      logo: "/img/college_xteen_turquesa.png",
      description: "Cuadernos universitarios de alta calidad"
    },
    {
      id: 2,
      name: "Minerva",
      logo: "/img/minerva_swatch_color.png", 
      description: "Productos educativos innovadores"
    },
    {
      id: 3,
      name: "Anillados Minerva",
      logo: "/img/minerva_swatch_color.png",
      description: "Cuadernos anillados profesionales"
    }
  ]

  return (
    <section id="partners" className="py-20 bg-gradient-to-br from-janda-cyan/10 via-white to-janda-navy/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-janda-cyan/5 to-janda-yellow/5"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-janda-navy mb-6">
            ¿Dónde encuentras <span className="bg-gradient-to-r from-janda-cyan to-janda-yellow bg-clip-text text-transparent">innovación</span> EstudIA?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Encuentra la tecnología EstudIA en productos de marcas educativas líderes
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div 
              key={partner.id} 
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-janda-cyan/30 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center space-y-6">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 group-hover:from-janda-cyan/5 group-hover:to-janda-navy/5 transition-all duration-300">
                  <div className="relative h-24 w-full mx-auto">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-janda-navy mb-2 group-hover:text-janda-cyan transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {partner.description}
                  </p>
                </div>

                {/* EstudIA badge */}
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-janda-cyan to-janda-yellow rounded-full text-white text-sm font-semibold shadow-md group-hover:shadow-lg transform group-hover:scale-105 transition-all duration-300">
                  <span className="mr-2">🚀</span>
                  Powered by EstudIA
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-janda-navy to-janda-cyan text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <span className="mr-2">✨</span>
            Descubre más productos con EstudIA
            <span className="ml-2">→</span>
          </div>
        </div>
      </div>
    </section>
  )
}
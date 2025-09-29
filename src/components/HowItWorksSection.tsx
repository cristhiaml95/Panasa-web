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
        </div>

        {/* Phone Videos Section - Arriba */}
        <div className="flex justify-center space-x-8 mb-20">
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
          <div className="w-80 h-[600px] flex flex-col items-center justify-center video-fade-up video-breath" style={{animationDelay: '0.2s'}}>
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

        {/* Text Content Section - Abajo */}
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h4 className="text-3xl font-bold text-janda-navy mb-6 text-center">¿CÓMO FUNCIONA?</h4>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              La aplicación totalmente integrada incluye una Tutoría inteligente con procesamiento Digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
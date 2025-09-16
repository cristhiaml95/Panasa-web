'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative w-full bg-transparent overflow-hidden">
      <div className="w-full flex flex-col items-center justify-start">
        <Image
          src="/img/Screen-Display.svg"
          alt="Fondo EstudIA"
          width={1920}
          height={1080}
          priority
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  )
}
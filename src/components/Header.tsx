'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
      <header className="fixed top-0 left-0 w-full z-20">
      <div className="w-full flex justify-center">
  <div className="hidden md:flex items-center w-full max-w-screen-xl pl-[17vw] pr-[4vw] py-3 gap-3 justify-between">
          <nav className="flex items-center gap-1 whitespace-nowrap">
            <Link href="#about" className="group">
              <span className="inline-block px-4 py-1 rounded-full bg-janda-navy/80 text-white font-poppins text-xs md:text-sm font-semibold shadow-md transition-all duration-200 group-hover:bg-janda-yellow group-hover:text-janda-navy group-hover:scale-105 group-hover:shadow-lg tracking-wide text-center">
                Acerca de la aplicación
              </span>
            </Link>
            <Link href="#how-it-works" className="group">
              <span className="inline-block px-3 py-1 rounded-full bg-janda-navy/80 text-white font-poppins text-xs md:text-sm font-semibold shadow-md transition-all duration-200 group-hover:bg-janda-yellow group-hover:text-janda-navy group-hover:scale-105 group-hover:shadow-lg tracking-wide text-center">
                Cómo funciona
              </span>
            </Link>
            <Link href="#know-aia" className="group">
              <span className="inline-block px-3 py-1 rounded-full bg-janda-navy/80 text-white font-poppins text-xs md:text-sm font-semibold shadow-md transition-all duration-200 group-hover:bg-janda-yellow group-hover:text-janda-navy group-hover:scale-105 group-hover:shadow-lg tracking-wide text-center">
                Conoce a AIA
              </span>
            </Link>
            <Link href="#buy-notebooks" className="group">
              <span className="inline-block px-3 py-1 rounded-full bg-janda-navy/80 text-white font-poppins text-xs md:text-sm font-semibold shadow-md transition-all duration-200 group-hover:bg-janda-yellow group-hover:text-janda-navy group-hover:scale-105 group-hover:shadow-lg tracking-wide text-center">
                Comprar cuadernos
              </span>
            </Link>
            <Link href="#plans" className="group">
              <span className="inline-block px-3 py-1 rounded-full bg-janda-navy/80 text-white font-poppins text-xs md:text-sm font-semibold shadow-md transition-all duration-200 group-hover:bg-janda-yellow group-hover:text-janda-navy group-hover:scale-105 group-hover:shadow-lg tracking-wide text-center">
                Planes
              </span>
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="#" className="block" aria-label="Play Store">
              <img
                src="/img/Play Store.svg"
                alt="Play Store"
                className="h-8 w-auto"
                style={{ minWidth: 90 }}
              />
            </Link>
            <Link href="#" className="block" aria-label="App Store">
              <img
                src="/img/App Store.svg"
                alt="App Store"
                className="h-8 w-auto"
                style={{ minWidth: 90 }}
              />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-janda-navy shadow-lg">
          <nav className="flex flex-col p-6 space-y-4">
            <Link href="#about" className="hover:text-janda-yellow transition-colors text-white">
              ACERCA DE LA APLICACIÓN
            </Link>
            <Link href="#how-it-works" className="hover:text-janda-yellow transition-colors text-white">
              CÓMO FUNCIONA
            </Link>
            <Link href="#know-aia" className="hover:text-janda-yellow transition-colors text-white">
              CONOCE A AIA
            </Link>
            <Link href="#buy-notebooks" className="hover:text-janda-yellow transition-colors text-white">
              COMPRAR CUADERNOS
            </Link>
            <Link href="#plans" className="hover:text-janda-yellow transition-colors text-white">
              PLANES
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
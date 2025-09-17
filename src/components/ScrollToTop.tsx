'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-janda-cyan to-janda-navy hover:from-janda-navy hover:to-janda-cyan text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-110 group scroll-to-top-enter"
          aria-label="Volver al inicio"
        >
          <ChevronUp 
            size={28} 
            className="transition-transform duration-200 group-hover:-translate-y-1" 
          />
          
          {/* Ripple effect on hover */}
          <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>
      )}
    </>
  )
}
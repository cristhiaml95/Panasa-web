'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
  question: "¿Qué es EstudIA?",
  answer: "EstudIA es un cuaderno digital inteligente que combina la escritura tradicional con inteligencia artificial para crear una experiencia de estudio revolucionaria."
  },
  {
  question: "¿Cómo funciona EstudIA?",
  answer: "EstudIA utiliza tecnología OCR para digitalizar tus notas escritas a mano, y luego aplica IA para crear resúmenes, responder preguntas y ayudarte a estudiar de manera más eficiente."
  },
  {
    question: "¿Es gratis?",
  answer: "EstudIA ofrece una versión gratuita con funcionalidades básicas. También hay un plan premium con características avanzadas por R$ 7,90 al mes."
  },
  {
    question: "¿Cuál es el valor?",
  answer: "El plan premium de EstudIA cuesta R$ 7,90 por mes y incluye acceso completo a todas las funcionalidades de la aplicación."
  },
  {
    question: "¿Necesitas internet para usarlo?",
  answer: "Algunas funciones de EstudIA requieren conexión a internet, especialmente las relacionadas con IA y sincronización en la nube."
  },
  {
  question: "¿Qué productos de EstudIA tienen la inteligencia de la aplicación EstudIA?",
  answer: "Todos los cuadernos EstudIA compatibles vienen con acceso a la aplicación EstudIA y sus funcionalidades de inteligencia artificial."
  },
  {
    question: "¿Cómo funciona el reposicionamiento de las hojas?",
    answer: "El sistema permite reorganizar digitalmente las páginas de tu cuaderno, manteniendo la sincronización entre la versión física y digital."
  },
  {
    question: "¿Cómo funciona el código QR?",
    answer: "Cada página del cuaderno tiene un código QR único que permite la sincronización automática con la aplicación móvil."
  }
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Preguntas más frecuentes
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </span>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-6 h-6 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="pb-6 pr-12">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
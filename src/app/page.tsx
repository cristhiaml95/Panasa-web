import { headers } from 'next/headers'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import FeaturesSection from '@/components/FeaturesSection'
import ProductsAndPricingSection from '@/components/ProductsAndPricingSection'
import PartnersSection from '@/components/PartnersSection'
import FAQSection from '@/components/FAQSection'
import CallToActionAndFooter from '@/components/CallToActionAndFooter'
import ScrollToTop from '@/components/ScrollToTop'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

export default function Home() {
  // This will make the page dynamic
  const headersList = headers()
  const userAgent = headersList.get('user-agent') || ''
  
  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ProductsAndPricingSection />
      <PartnersSection />
      <FAQSection />
      <CallToActionAndFooter />
      <ScrollToTop />
      {/* Hidden div for dynamic content */}
      <div style={{ display: 'none' }} data-dynamic="true" data-timestamp={Date.now()}>
        {userAgent}
      </div>
    </main>
  )
}
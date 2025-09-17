import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import FeaturesSection from '@/components/FeaturesSection'
import ProductsAndPricingSection from '@/components/ProductsAndPricingSection'
import FAQSection from '@/components/FAQSection'
import CallToActionAndFooter from '@/components/CallToActionAndFooter'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ProductsAndPricingSection />
      <FAQSection />
      <CallToActionAndFooter />
      <ScrollToTop />
    </main>
  )
}
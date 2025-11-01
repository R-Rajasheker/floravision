import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/HeroSection'
import CustomerReview from './components/CustomerReview'
 import SectionHeader from './components/SectionHeader'
import DeskDecorations from './components/DeskDecorations'
 import ProductsGrid from './components/ProductsGrid'
import ReviewsGrid from './components/ReviewsGrid'
import O2Plants from './components/O2Plants'
import Footer from './components/Footer'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`min-h-screen bg-flora-dark text-flora-white transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main>
        <Hero />
        <CustomerReview />
        <SectionHeader title="Our Trendy plants" />
        <DeskDecorations />
          <SectionHeader title="Our Top Selling Plants" />
        <ProductsGrid />
       <SectionHeader title="Customer Review" />
        <ReviewsGrid />
       
        
        
      </main>
      <Footer />
    </div>
  )
}

export default App

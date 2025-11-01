import React, { useState } from 'react'
import plantLogo from '../assets/plant-logo.png'
import searchIcon from '../assets/search-icon.png'
import bagIcon from '../assets/bag-icon.png'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleSearch = () => {
    const searchTerm = prompt('Enter search term:')
    if (searchTerm) {
      console.log('Searching for:', searchTerm)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-flora-dark bg-opacity-95 backdrop-blur-md py-5">
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src={plantLogo} 
            alt="FloraVision Logo" 
            className="w-12 h-12 rounded-lg shadow-flora-sm"
          />
          <span className="font-inter font-black text-3xl text-flora-white opacity-75">
            FloraVision.
          </span>
        </div>
        
        {/* Navigation */}
        <nav className={`${isMobileMenuOpen ? 'left-0' : '-left-full'} fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-flora-dark bg-opacity-98 backdrop-blur-md transition-left duration-300 z-40 md:static md:w-auto md:h-auto md:bg-transparent md:backdrop-blur-none`}>
          <ul className="flex flex-col md:flex-row items-center gap-8 md:gap-10 p-10 md:p-0">
            <li>
              <a href="#" className="font-indie text-2xl text-flora-white hover:opacity-70 transition-opacity">
                Home
              </a>
            </li>
            <li className="relative group">
              <a href="#" className="font-indie text-2xl text-flora-white hover:opacity-70 transition-opacity flex items-center gap-2">
                Plants Type <span className="text-xs">▼</span>
              </a>
            </li>
            <li>
              <a href="#" className="font-indie text-2xl text-flora-white hover:opacity-70 transition-opacity">
                More
              </a>
            </li>
            <li>
              <a href="#" className="font-indie text-2xl text-flora-white hover:opacity-70 transition-opacity">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Header Actions */}
        <div className="flex items-center gap-5">
          <button 
            onClick={handleSearch}
            className="opacity-75 hover:opacity-100 transition-opacity"
          >
            <img src={searchIcon} alt="Search" className="w-6 h-6" />
          </button>
          <button className="opacity-75 hover:opacity-100 transition-opacity">
            <img src={bagIcon} alt="Cart" className="w-6 h-6" />
          </button>
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col gap-1 cursor-pointer"
          >
            <span className={`w-6 h-0.5 bg-flora-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-flora-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-flora-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

import React, { useState } from 'react'
import rightArrow from '../assets/right-arrow.png'

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 4

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-center gap-5">
          <button 
            onClick={handlePrevious}
            className="bg-transparent border-none cursor-pointer p-2.5 transition-transform duration-200 hover:scale-110"
          >
            <img src={rightArrow} alt="Previous" className="w-4 h-4 rotate-180" />
          </button>
          <span className="font-inter text-md text-flora-white opacity-75">
            {currentPage.toString().padStart(2, '0')}/{totalPages}
          </span>
          <button 
            onClick={handleNext}
            className="bg-transparent border-none cursor-pointer p-2.5 transition-transform duration-200 hover:scale-110"
          >
            <img src={rightArrow} alt="Next" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Pagination

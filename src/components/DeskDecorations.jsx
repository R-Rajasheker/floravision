import React from 'react'
import deskPlant1 from '../assets/desk-plant-1.png'
import deskPlant2 from '../assets/desk-plant-2.png'
import bagIcon from '../assets/bag-icon.png'

const DeskDecorations = () => {
  const handleAddToCart = () => {
    // Add to cart functionality
    console.log('Added to cart')
  }

  return (
  <section className="py-20">
    <div className="flex flex-col gap-20 max-w-7xl mx-auto px-5">
      <div
        className="flex flex-row items-center justify-between gap-16 lg:gap-12 md:gap-8 flex-wrap  
        bg-white/10 backdrop-blur-sm rounded-[45px] shadow-xl "
      >
        {/* Left - Plant Image */}
        <div className="flex-1 flex justify-center -mt-28">
          <img
            src={deskPlant1}
            alt="Desk Plant"
            className="w-full max-w-[500px] h-auto object-cover rounded-xl shadow-flora-sm"
          />
        </div>

        {/* Right - Content */}
        <div className="flex-1 space-y-8 p-10">
          <h2 className="font-inter font-semibold text-4xl lg:text-3xl md:text-2xl text-flora-white text-shadow-flora">
            For Your Desk Decorations
          </h2>

          <p className="text-lg text-flora-white leading-relaxed">
            I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!
          </p>

          <div className="space-y-6">
            <span className="text-3xl font-semibold text-flora-white block">
              Rs. 599/-
            </span>

            <div className="flex flex-row gap-5 items-center">
              <button
                onClick={handleAddToCart}
                className="bg-flora-white text-flora-black border border-white/20 px-10 py-3 rounded-md font-inter text-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Explore
              </button>

              <button
                onClick={handleAddToCart}
                className="border-2 border-flora-white border-opacity-75 rounded-xl p-3.5 cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10"
              >
                <img src={bagIcon} alt="Add to Cart" className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-row items-center justify-between gap-16 lg:gap-12 md:gap-8 flex-wrap mt-10
        bg-white/5 backdrop-blur-sm rounded-[45px] shadow-xl"
      >


        {/* Right - Content */}
        <div className="flex-1 space-y-8 p-10">
          <h2 className="font-inter font-semibold text-4xl lg:text-3xl md:text-2xl text-flora-white text-shadow-flora">
            For Your Desk Decorations
          </h2>

          <p className="text-lg text-flora-white leading-relaxed">
            The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming
          </p>

          <div className="space-y-6">
            <span className="text-3xl font-semibold text-flora-white block">
              Rs. 599/-
            </span>

            <div className="flex flex-row gap-5 items-center">
              <button
                onClick={handleAddToCart}
                className="bg-flora-white text-flora-black border border-white/20 px-10 py-3 rounded-md font-inter text-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Explore
              </button>

              <button
                onClick={handleAddToCart}
                className="border-2 border-flora-white border-opacity-75 rounded-xl p-3.5 cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10"
              >
                <img src={bagIcon} alt="Add to Cart" className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>

                {/* Left - Plant Image */}
        <div className="flex-1 flex justify-center -mt-32">
          <img
            src={deskPlant2}
            alt="Desk Plant"
            className="w-full max-w-[500px] h-auto object-cover rounded-xl shadow-flora-sm"
          />
        </div>
      </div>
    </div>
  </section>
);

    }
              
              {/* <div className="border-2 border-flora-white rounded-xl p-5 glass-card">
                <div className="space-y-4">
                  <h3 className="font-inter font-semibold text-xl text-flora-white">
                    The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="font-inter font-semibold text-4xl text-flora-white text-shadow-flora">
                      Rs. 399/-
                    </span>
                    <button 
                      onClick={handleAddToCart}
                      className="bg-transparent border-none cursor-pointer transition-transform duration-150 hover:scale-95"
                    >
                      <img src={bagIcon} alt="Add to Cart" className="w-8 h-8" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-5">
              <button className="bg-transparent border-2 border-flora-white text-flora-white px-8 py-4 rounded-xl font-inter font-medium text-3xl lg:text-2xl md:text-xl cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10">
                Explore
              </button>
              <button className="bg-transparent border-2 border-flora-white text-flora-white px-8 py-4 rounded-xl font-inter font-medium text-3xl lg:text-2xl md:text-xl cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10">
                Explore
              </button>
            </div>
          </div> */}
        
      {/* </div>
    </section>
  )
} */}

export default DeskDecorations

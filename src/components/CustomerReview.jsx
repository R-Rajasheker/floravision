import React from 'react'
import customerAvatar from '../assets/customer-avatar.png'

const CustomerReview = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-5">
        <div className="glass-card border  rounded-[45px] p-10 max-w-md backdrop-blur-lg" 
              style={{ borderImage: 'linear-gradient(136deg, rgba(255, 255, 255, 1) 50%, rgba(102, 102, 102, 1) 0%) 1,rounded[45px]' }}
              >
          <div className="flex items-center gap-5 mb-5">
            <img 
              src={customerAvatar} 
              alt="Customer" 
              className="w-16 h-16 rounded-full object-cover shadow-flora-xl"
            />
            <div>
  <h4 className="font-inter font-normal text-2xl text-flora-white">
    Ronnie Hamill
  </h4>
  <div className="text-base flex">

    <span className="text-yellow">★</span>
    <span className="text-flora-yellow">★</span>
    <span className="text-flora-yellow">★</span>
    <span className="text-flora-yellow">★</span>

  
    <span
      className="relative text-flora-yellow/30"
      style={{
        position: 'relative',
        display: 'inline-block',
        color: '#555', 
      }}
    >
      ★
      <span
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          overflow: 'hidden',
          color: '#FFFFFF', // yellow
        }}
      >
        ★
      </span>
    </span>
  </div>
</div>

          </div>
          <p className="font-inter font-normal text-lg leading-tight text-flora-white opacity-75">
            I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CustomerReview

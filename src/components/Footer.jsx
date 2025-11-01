import React, { useState } from 'react'
import plantLogo from '../assets/plant-logo.png'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email && isValidEmail(email)) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => {
        setIsSubscribed(false)
      }, 3000)
    }
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

 return (
  <footer className="bg-flora-dark bg-opacity-95 py-20 mt-24">
    <div className="max-w-7xl mx-auto px-6">
      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24">
        
        {/* Left Column */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <img
              src={plantLogo}
              alt="FloraVision Logo"
              className="w-20 h-20 rounded-lg shadow-flora-sm"
            />
            <span className="font-inter font-black text-4xl text-flora-white">
              FloraVision.
            </span>
          </div>

          <p className="font-inter text-lg text-flora-white/80 leading-relaxed max-w-md">
            "From lush indoor greens to vibrant outdoor blooms, our plants are crafted
            to thrive and elevate your living environment."
          </p>

          <div className="flex gap-6">
            {["FB", "TW", "LI"].map((icon) => (
              <span
                key={icon}
                className="font-inter font-bold text-2xl text-flora-white cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-flora-yellow"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>

        {/* Center Column */}
        <div className="space-y-8 lg:pl-10">
          <h4 className="font-inter font-extrabold text-3xl text-flora-white">
            Quick Links
          </h4>
          <ul className="space-y-4">
            {["Home", "Types of Plants", "Contact", "Privacy"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="font-inter font-medium text-xl text-flora-white/90 hover:text-flora-yellow transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <h4 className="font-inter font-extrabold text-3xl text-flora-white">
            For Every Update
          </h4>

         <form
  onSubmit={handleSubscribe}
  className="relative w-full max-w-md"
>
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter your email"
    className="w-full bg-white/10 border border-flora-white/40 rounded-lg px-5 py-4 pr-32 font-inter text-lg text-flora-white placeholder-flora-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-flora-yellow focus:ring-opacity-60"
  />

  <button
    type="submit"
    className={` bg-white absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 rounded-md font-inter font-semibold text-base uppercase cursor-pointer transition-all duration-300 hover:-translate-y-[55%] hover:shadow-lg ${
      isSubscribed
        ? "bg-green-500 text-white"
        : "bg-flora-white text-black"
    }`}
  >
    {isSubscribed ? "✓" : "Subscribe"}
  </button>
</form>

          <p className="font-inter text-lg text-flora-white/80 pt-6 border-t border-white/10 mt-10 text-center lg:text-left">
            © {new Date().getFullYear()} <span className="text-flora-yellow">FloraVision</span> — All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);
  }

  export default Footer;
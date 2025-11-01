// import React from "react";
// import { Play } from "lucide-react";
// import search_icon from '../assets/images/search.png';
// import bag_icon from '../assets/images/bag.png';
// import logo_image from '../assets/images/plant-logo.png';

// const HeroSection = () => {
//   return (
//     <div
//       className="relative min-h-screen bg-[#102316] flex flex-col overflow-hidden"
//       style={{ minHeight: "5001px" }} // 1748 + 3253 = 5001 => ensures card is visible/scrollable
//     >
//       {/* Navbar */}
//       <nav className="absolute inset-x-0 top-0 flex items-center justify-between px-4 z-50">
//         <div
//           className="flex items-center gap-1"
//           style={{
//             width: "225px",
//             height: "48px",
//             top: "57px",
//             left: "39px",
//             position: "absolute",
//             transform: "rotate(0deg)",
//             opacity: 1,
//           }}
//         >
//           <img 
//           src={logo_image}
//           alt="logo"
//           className="w-8 h-8"
//           />
        
//           <h1
//             className="font-inter font-black text-[28px] leading-[100%] tracking-[0%]"
//           >
//             FloraVision.
//           </h1>
//         </div>
//         {/* Home positioned exactly per Figma */}
//         <a
//           href="#"
//           className="hidden md:flex items-center justify-center cursor-pointer hover:text-green-400 font-indie text-[24px] leading-[100%] tracking-[0%] font-normal"
//           style={{
//             position: "absolute",
//             width: "56px",
//             height: "35px",
//             top: "64px",
//             left: "600px",
//             transform: "rotate(0deg)",
//             opacity: 1,
//             textDecoration: "none",
//           }}
//         >
//           Home
//         </a>

//         {/* Plants Type / More / Contact positioned per Figma */}
//         <a
//           href="#"
//           className="hidden md:flex items-center cursor-pointer hover:text-green-400 font-indie text-[24px] leading-[100%] tracking-[0%] font-normal"
//           style={{
//             position: "absolute",
//             width: "149px",
//             height: "35px",
//             top: "64px",
//             left: "727px",
//             transform: "rotate(0deg)",
//             opacity: 1,
//             textDecoration: "none",
//             alignItems: "center",
//             justifyContent: "flex-start",
//             paddingLeft: "0px",
//           }}
//         >
//           Plants Type
//         </a>

//         <a
//           href="#"
//           className="hidden md:flex items-center cursor-pointer hover:text-green-400 font-indie text-[24px] leading-[100%] tracking-[0%] font-normal"
//           style={{
//             position: "absolute",
//             width: "46px",
//             height: "35px",
//             top: "64px",
//             left: "935px",
//             transform: "rotate(0deg)",
//             opacity: 1,
//             textDecoration: "none",
//             alignItems: "center",
//             justifyContent: "flex-start",
//           }}
//         >
//           More
//         </a>

//         <a
//           href="#"
//           className="hidden md:flex items-center cursor-pointer hover:text-green-400 font-indie text-[24px] leading-[100%] tracking-[0%] font-normal"
//           style={{
//             position: "absolute",
//             width: "78px",
//             height: "35px",
//             top: "64px",
//             left: "1053px",
//             transform: "rotate(0deg)",
//             opacity: 1,
//             textDecoration: "none",
//             alignItems: "center",
//             justifyContent: "flex-start",
//           }}
//         >
//           Contact
//         </a>
//         <div
//           style={{
//             position: "absolute",
//             top: "68px",
//             right: "39px",
//             display: "flex",
//             alignItems: "center",
//             gap: "18px",
//             zIndex: 9999, // ensure icons are on top
//           }}
//         >
//           {/* Search + Bag group with 85px gap between them */}
//           <div style={{ display: "flex", alignItems: "center", gap: "85px" }}>
//             <img
//               src={search_icon}
//               alt="search"
//               style={{
//                 width: "26px",
//                 height: "26px",
//                 opacity: 0.75,
//                 cursor: "pointer",
//               }}
//             />

//             <img
//               src={bag_icon}
//               alt="shopping bag"
//               style={{
//                 width: "26px",
//                 height: "26px",
//                 opacity: 0.75,
//                 cursor: "pointer",
//               }}
//             />
//           </div>

//           {/* Decorative horizontal line (Figma coords) */}
//           <div
//             style={{
//               width: "23px",
//               height: 0,
//               borderTop: "4px solid rgba(255,255,255,1)",
//               transform: "rotate(0deg)",
//               opacity: 1,
//             }}
//           />
//         </div>
//       </nav>

//       {/* Hero */}
//  <div
//         className="absolute flex flex-col lg:flex-row justify-between items-center px-6 lg:px-8"
//         style={{
//           width: "802px",
//           height: "280px",
//           top: "252px",
//           left: "39px",
//           transform: "rotate(0deg)",
//           opacity: 1,
//         }}
//       >
//         {/* Left Content */}
//         <div className="max-w-xl space-y-2">
//         <h1
//           className="font-inter font-semibold leading-[100%] tracking-[0%] whitespace-nowrap"
//           style={{
//             width: "798px",
//             height: "143px",
//             fontSize: "118px",
//             lineHeight: "100%",
//             fontWeight: 600,
//             letterSpacing: "0%",
//             verticalAlign: "middle",
//             transform: "rotate(0deg)",
//             opacity: 0.75,
//           }}
//         >
//           Earth’s Exhale
//         </h1>
            
//           <p
//            className="text-gray-300"
//            style={{
//              position: "absolute",
//              width: "775px",
//              height: "56px",
//              top: "139px",   // 391 - 252 (relative to hero container)
//              left: "12px",   // 51  - 39  (relative to hero container)
//              lineHeight: "100%",
//              opacity: 0.75,
//            }}
//          >
//            "Earth Exhale" symbolizes the purity and vitality of the Earth's natural
//            environment and its essential role in sustaining life.
//          </p>

//           <div className="flex items-center gap-6">
//               <button
//                 aria-label="Buy Now"
//                 className="px-12 py-2 rounded-md border border-white text-white text-lg font-medium hover:bg-white hover:text-black transition-colors duration-150"
//               >
//                 Buy Now
//               </button>

//               <div className="flex items-center gap-2">
//                 <button
//                   aria-label="Play demo"
//                   className="w-14 h-14 rounded-full border border-white flex items-center justify-center text-white hover:text-black transition-colors duration-150"
//                 >
//                   <img
//                     src="https://img.icons8.com/?size=100&id=fjx0LfGC
//                     alt="play icon"
//                     className="w-6 h-6"
//                   />
//                 </button>
//                 <span className="font-handwritten text-base text-white">Live Demo...</span>
//               </div>
//             </div>


//           {/* Testimonial */}
// {/*           
//           <div className="mt-20">
//             <div className="flex gap-4 items-start bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl w-[520px]">
//               <img
//                 src="https://i.pravatar.cc/50?img=3"
//                 alt="Ronnie Hamill"
//                 className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20"
//               />
//               <div className="flex-1">
//                 <div className="flex flex-col justify-between">
//                   <p className="text-lg font-semibold text-white">Ronnie Hamill</p>
//                   <div className="flex items-center gap-1">
//                     <span className="text-yellow-400 text-sm">★</span>
//                     <span className="text-yellow-400 text-sm">★</span>
//                     <span className="text-yellow-400 text-sm">★</span>
//                     <span className="text-yellow-400 text-sm">★</span>
//                     <span className="text-yellow-400 text-sm opacity-50">★</span>
//                   </div>
//                 </div>
//                 <p className="mt-3 text-sm text-gray-200 leading-relaxed max-w-[34rem]">
//                   I can't express how thrilled I am with my new natural plants!
//                   They bring such a fresh and vibrant energy to my home.
//                 </p>
//               </div>
//             </div>
//           </div> */}
         
//         </div>

//         {/* Right Plant Card (from Figma) */}
//         <div
//           className="absolute bg-white/5 backdrop-blur-md border-white/10 border-[8px] rounded-[14px] overflow-hidden shadow-2xl"
//           style={{
//             width: "1728px",
//             height: "3253px",
//             top: "1748px",
//             left: "1450px",
//             transform: "rotate(0deg)",
//             opacity: 1,
//           }}
//         >
//           <div className="h-full flex flex-col">
//             {/* Product visual */}
//             <div className="flex-1 flex items-center justify-center p-10">
//               <img
//                 src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c3?auto=format&fit=crop&w=1200&q=80"
//                 alt="Product"
//                 className="max-w-[85%] max-h-full object-cover rounded-2xl shadow-xl"
//               />
//             </div>

//             {/* Details area */}
//             <div className="px-12 py-10 bg-gradient-to-t from-black/30 to-transparent text-gray-100">
//               <p className="text-sm text-gray-300 mb-2">Indoor Plant</p>
//               <h2 className="text-4xl font-semibold mb-3">Aglaonema</h2>
//               <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-6">
//                 Elegant, low maintenance houseplant with striking foliage — perfect for
//                 living rooms and offices.
//               </p>
//               <div className="flex items-center justify-between w-full max-w-[720px]">
//                 <div>
//                   <p className="text-sm text-gray-400">Price</p>
//                   <p className="text-3xl font-bold text-white">$45</p>
//                 </div>
//                 <div className="flex items-center gap-6">
//                   <button className="px-8 py-3 rounded-md border border-white text-white text-lg font-medium hover:bg-white hover:text-black transition-colors duration-150">
//                     Buy Now
//                   </button>
//                   <button className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-150">
//                     {/* <img
//                       src="https://img.icons
//                       alt="play icon"
//                       className="w-6 h-6"
//                     /> */}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


import React from 'react'
import heroBackground from '../assets/hero-background.png'
import plantProduct from '../assets/plant-product-1.png'
import rightArrow from '../assets/right-arrow.png'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center mt-20">
      {/* Background Image */}
      <div className="absolute -top-32 left-0 w-full h-[2592px] -z-10">
        <img
          src={heroBackground}
          alt="Plant Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 w-full">
        <div className="flex items-center gap-24 lg:gap-16 md:gap-8 md:flex-row md:text-center">
          {/* Left Content */}
          <div className="flex-1 max-w-4xl">
            <div className="space-y-5">
              <h1 className="font-inter font-semibold text-[118px] lg:text-[80px] md:text-[60px] sm:text-[40px] leading-tight text-flora-white opacity-75 text-shadow-flora">
                Earth's Exhale
              </h1>
              <p className="font-inter font-medium text-2xl lg:text-xl md:text-lg sm:text-base leading-tight text-flora-white opacity-75 max-w-4xl">
                "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
              </p>
              <div className="flex items-center gap-4 sm:flex-row">
                <button className="bg-flora-white text-white border border-1 px-12 py-4 rounded-md font-inter font-normal text-3xl lg:text-2xl md:text-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  Buy Now
                </button>
                <div className="flex items-center gap-4 cursor-pointer">
                  <img src="https://img.icons8.com/?size=100&id=K6e875IFwuIm&format=png&color=FFFFFF" alt="Play Icon" className="w-70 h-70 " />
                  <span className="font-indie text-2xl lg:text-xl md:text-lg text-flora-white opacity-75">
                    Live Demo...
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Product Card */}
          <div className="flex-1 flex justify-center">
            <div className="glass-card gradient-border rounded-xl p-8 relative max-w-lg w-full">
              <div className="text-center mb-5">
                <img
                  src={plantProduct}
                  alt="Indoor Plant"
                  className="w-[459px] h-[459px] lg:w-[350px] lg:h-[350px] md:w-[300px] md:h-[300px] sm:w-[250px] sm:h-[250px] object-cover rounded-lg mx-auto shadow-flora-sm"
                />
              </div>
              <div className="space-y-5">
                <h3 className="font-inter font-normal text-2xl lg:text-xl md:text-lg text-flora-white opacity-75">
                  Indoor Plant
                </h3>
                <h4 className="font-inter font-normal text-4xl lg:text-3xl md:text-2xl text-flora-white opacity-75">
                  Aglaonema plant
                </h4>
                <button className="bg-transparent border-2 border-flora-white text-flora-white opacity-75 px-8 py-4 rounded-xl font-inter font-normal text-3xl lg:text-2xl md:text-xl cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10">
                  Buy Now
                </button>
                <div className="flex gap-2 justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-flora-white opacity-100"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-flora-white opacity-30"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-flora-white opacity-30"></span>
                </div>
              </div>
              <button className="absolute top-1/2 -right-2.5 transform -translate-y-1/2 bg-transparent border-none cursor-pointer">
                <img src={rightArrow} alt="Next" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

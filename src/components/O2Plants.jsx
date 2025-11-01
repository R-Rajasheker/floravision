import React from "react";
import plantProduct from "../assets/plant-product-1.png";
import Pagination from './Pagination';
import SectionHeader from "./SectionHeader";

const O2Plants = () => {
  return (
    <section className="mt-10">
    <div className=" mb-20">
    <SectionHeader title="Our Best o2" />
    </div>
    
      <div className="max-w-7xl mx-auto px-5">
        <div
          className="flex flex-row items-center justify-between gap-16 lg:gap-12 md:gap-8 flex-wrap 
          bg-white/10 backdrop-blur-lg rounded-[20px] shadow-xl p-10"
        >
          {/* Left - Plant Image */}
          <div className="flex-1 flex justify-center -mt-32">
            <img
              src={plantProduct}
              alt="O2 Plant"
              className="w-full max-w-[600px] h-auto object-cover rounded-xl shadow-flora-sm"
            />
          </div>

          {/* Right - Content */}
          <div className="flex-1 space-y-8">
            <h3 className="font-inter font-semibold text-4xl lg:text-3xl md:text-2xl text-flora-white text-shadow-flora opacity-90">
              We Have Small And Best O2 Plants Collection's
            </h3>

            <div className="space-y-5">
              <p className="font-inter text-lg lg:text-base leading-relaxed text-flora-white opacity-80">
                Oxygen-producing plants, often referred to as "O2 plants," are
                those that release oxygen into the atmosphere through the process
                of photosynthesis.
              </p>
              <p className="font-inter text-lg lg:text-base leading-relaxed text-flora-white opacity-80">
                Many plants can help filter out pollutants and toxins from the
                air, such as formaldehyde, benzene, and trichloroethylene. This
                makes the air cleaner and healthier to breathe.
              </p>
            </div>
           
<div className="flex flex-wrap items-center justify-between gap-6">
  {/* Explore Button */}
  <button
    className="bg-flora-white text-flora-black border border-white/20 
               px-10 py-3 rounded-md font-inter text-lg font-medium 
               cursor-pointer 
                hover:shadow-lg"
  >
    Explore
  </button>

  {/* Pagination Component */}
  <div className="flex justify-end w-full sm:w-auto">
    <Pagination />
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default O2Plants;


import React from "react";

const SectionHeader = ({ title }) => {
  return (
    <section className=" mt-40">
      <div className="relative max-w-md mx-auto px-5 rounded-lg">
        {/* Gradient corner borders */}
        <span className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 rounded-[20px]"

          style={{
            borderTopRightRadius: "20px",
            borderImage: "linear-gradient(45deg, #FBD300, #FFFFFF) 1"
          }}
        ></span>

        <span
          className="absolute -bottom-1 left-0 w-16 h-16 border-b-4 border-l-4"
          style={{
            borderBottomLeftRadius: "20px",
            borderImage: "linear-gradient(45deg, rgba(251,211,0,1), rgba(255,255,255,1)) 1"
          }}
        ></span>



        {/* Content */}
        <div className="flex items-center justify-center gap-5 py-8">
          <h2 className="font-inter font-semibold text-5xl lg:text-4xl md:text-3xl text-flora-white text-shadow-flora text-center">
            {title}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SectionHeader;

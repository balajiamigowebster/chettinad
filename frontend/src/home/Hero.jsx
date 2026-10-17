import React from 'react';

const Hero = () => {
  return (
    <div id="home" className="w-full h-[100svh] lg:h-screen relative flex items-center overflow-hidden pt-6 sm:pt-12 lg:pt-0 bg-transparent">
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 h-full gap-2 sm:gap-6 lg:gap-0">
        {/* Left side: Person image */}
        <div 
          className="w-full lg:w-5/12 flex justify-center lg:justify-start items-end lg:items-end relative z-10 lg:self-end h-auto lg:h-full pb-0 lg:pb-0 min-h-[30vh]"
        >
          <div className="flex flex-col items-center w-[45%] sm:w-[40%] md:w-[35%] lg:w-[60%] lg:max-w-none translate-x-2 lg:translate-x-20 xl:translate-x-28">
            <picture className="flex justify-center mb-2 lg:mb-4">
              <source media="(max-width: 767px)" srcSet="/images/hero-3-mobile.webp" />
              <img 
                src="/images/hero-3.webp" 
                alt="Hi I am Alagappa" 
                className="h-10 sm:h-12 lg:h-14 object-contain"
                width="600"
                height="180"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
            <picture className="w-full flex justify-center">
              <source media="(max-width: 767px)" srcSet="/images/first-component-mobile.webp" />
              <img 
                src="/images/first-component.webp" 
                alt="Chettinad Person" 
                fetchPriority="high"
                decoding="async"
                width="800"
                height="1138"
                className="w-full max-h-[35svh] lg:max-h-none h-auto drop-shadow-2xl object-contain object-bottom" 
              />
            </picture>
          </div>
        </div>

        {/* Right side: Content */}
        <div 
          className="w-full lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-left z-10 lg:pl-8 xl:pl-16 pb-4 lg:pb-0 mt-6 sm:mt-12 lg:mt-0"
        >
          {/* Logo */}
          <picture className="w-24 sm:w-28 md:w-32 lg:w-28 mt-16 sm:mt-8 lg:mt-12 mb-4 lg:mb-6">
            <source media="(max-width: 767px)" srcSet="/images/chettinad-logo-mobile.webp" />
            <img 
              src="/images/chettinad-logo.webp" 
              alt="Chettinad Bites" 
              width="400"
              height="409"
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto" 
            />
          </picture>
          
          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-serif text-[#2a3822] font-bold leading-[1.05] mb-2 lg:mb-3 tracking-tight">
            There is a side of<br />South Indian food<br />you may not have<br />discovered yet.
          </h1>
          
          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-[20px] text-[#4a4036] mb-3 lg:mb-5 font-serif leading-[1.25] max-w-xl px-10 sm:px-0">
            A journey into the flavours of Chettinad —<br className="hidden sm:block" />
            where food is generous, spices have stories,<br className="hidden sm:block" />
            and the familiar is only the beginning.
          </p>

          {/* Small Text Area */}
          <div className="w-full max-w-xl flex justify-center lg:-translate-x-12 xl:-translate-x-16 mb-4 lg:mb-6 mt-2">
            <picture className="h-20 lg:h-28">
              <source media="(max-width: 767px)" srcSet="/images/cm-1-mobile.webp" />
              <img 
                src="/images/cm-1.webp" 
                alt="Vanakkam. Come in." 
                width="400"
                height="200"
                fetchPriority="high"
                decoding="async"
                className="h-full w-auto object-contain" 
              />
            </picture>
          </div>

          {/* Call to Action Button */}
          {/* <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#5a1b0a" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#782312] text-white rounded-full px-4 py-1.5 md:px-5 md:py-2 lg:px-6 lg:py-2.5 text-[10px] md:text-xs lg:text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 shadow-lg"
          >
            Come, I'll show you <span className="text-sm lg:text-base">&rarr;</span>
          </motion.button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;

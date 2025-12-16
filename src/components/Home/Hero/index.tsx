"use client";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
 <section
  className="relative md:pt-40 md:pb-28 pt-20 pb-12 overflow-hidden z-10
             bg-[url('/foto1.jpg')] bg-cover bg-center"
  id="main-banner"
>
<div className="container mx-auto lg:max-w-screen-xl px-4 md:px-6 mt-44 md:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 justify-center items-center gap-8 md:gap-12">
          <div className="lg:col-span-5 col-span-1 order-2 lg:order-1 text-center lg:text-left">
            <div className="py-2 px-4 md:py-2 md:px-5 bg-primary/15 rounded-full w-fit mx-auto lg:mx-0 mb-4 md:mb-6">
              <p className="text-white text-sm md:text-lg font-bold">Cahi Dry Cleaning</p>
            </div>
            <h1 className="text-white text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight md:leading-snug lg:leading-tight mb-6 md:mb-8">
             Pastrim kimik profesional
            </h1>
            <button 
              onClick={() => window.open('https://wa.me/38344893566', '_blank')}
            className="bg-primary text-white text-base md:text-xl font-semibold py-3 px-8 md:py-5 md:px-12 rounded-full hover:bg-darkmode transition-colors duration-300 hover:scale-105 active:scale-95">
              Rezervo shërbimin
            </button>
          </div>
          
          <div className="lg:col-span-7 col-span-1 order-1 lg:order-2">
<div className="relative w-full h-64 md:h-96 lg:h-[500px]">
  <Image
    src="/foto4.jpg"
    alt="banner image"
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
    className="object-cover rounded-xl lg:rounded-2xl hidden md:block"
    priority
  />
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
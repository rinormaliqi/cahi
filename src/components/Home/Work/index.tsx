"use client";
import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Icon } from "@iconify/react";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};

const Work = () => {
  // Të dhënat për 5 pikat/lokacionet e biznesit
  const locationsData = [
    {
      id: 1,
      name: "Luna Pastrim Kimik",
      address: "Rr. Xhelal Hajda, Prishtinë",
      coordinates: "42.642, 21.173",
      mapLink: "https://maps.app.goo.gl/4qdgjGJ1NviPnZdi9",
      hours: "E Hënë - E Shtunë: 08:00 - 20:00",
      services: ["Pastrim industrial rrobash", "Shërbime komerciale"]
    },
    {
      id: 2,
      name: "Cahi Pastrim Kimik",
      address: "Fushë Kosovë 12000",
      coordinates: "42.646, 21.172",
      mapLink: "https://maps.app.goo.gl/mk4pfXMyfUeMHwTF8",
      hours: "E Hënë - E Shtunë: 08:00 - 20:00",
      services: ["Pastrim industrial rrobash", "Shërbime komerciale"]
    },
    {
      id: 3,
      name: "Pika Qendrore",
      address: "Rr. Agim Ramadani, Prishtinë",
      coordinates: "42.649, 21.167",
      mapLink: "https://maps.app.goo.gl/hARKea6W9uZfDTnu9",
      hours: "E Hënë - E Shtunë: 08:00 - 20:00",
      services: ["Pastrim industrial rrobash", "Shërbime komerciale"]
    },
    {
      id: 4,
      name: "Pika e Lindjes",
      address: "Rr. Nëna Terezë, Prishtinë",
      coordinates: "42.663, 21.143",
      mapLink: "https://maps.app.goo.gl/3ciiGGZ1YsroEKJ28",
      hours: "E Hënë - E Shtunë: 08:00 - 20:00",
      services: ["Pastrim industrial rrobash", "Shërbime komerciale"]
    },
    {
      id: 5,
      name: "Pika e Perëndimit",
      address: "Rr. Ibrahim Rugova, Prishtinë",
      coordinates: "42.645, 21.173",
      mapLink: "https://maps.app.goo.gl/TLYR9tfUMAifWKnS7",
      hours: "E Hënë - E Shtunë: 08:00 - 20:00",
      services: ["Pastrim industrial rrobash", "Shërbime komerciale"]
    }
  ];

  return (
    <section className="relative dark:bg-darkmode py-4 bg-cover bg-center overflow-hidden before:absolute before:w-full before:h-full before:bg-[url('/images/wework/elipse.svg')] before:bg-no-repeat before:bg-center after:absolute after:w-1/3 after:h-1/3 after:bg-[url('/images/wework/vector.svg')] after:bg-no-repeat after:top-28 after:-right-12 after:-z-10">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md)">
        <div className="text-center">
          <h3 className="text-4xl sm:text-6xl font-bold text-black dark:text-white my-2">
            Ne operojmë në 5 lokacione.
          </h3>
          <h3 className="text-4xl sm:text-6xl font-bold text-black/50 dark:text-white/50 lg:mr-48 my-2">
            Gjithmon ne dispozicion.
          </h3>
          <h3 className="text-4xl sm:text-6xl font-bold text-black/25 dark:text-white/25 lg:-mr-32 my-2">
            Ne ju bejm zgjidhje.
          </h3>
        </div>
      </div>

      <Slider {...settings}>
        {locationsData.map((location) => (
          <div key={location.id}>
            <div className="bg-white dark:bg-darkHeroBg m-3 py-6 my-10 text-center shadow-xl rounded-3xl">
              <div className="relative p-4">
                {/* Harta Google Maps - IFrame */}
                <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
                  <iframe
                    src={`/hero.jpg`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Harta e ${location.name}`}
                    className="rounded-lg"
                  ></iframe>
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Icon 
                      icon="mdi:map-marker" 
                      className="text-white text-2xl" 
                    />
                  </div>
                  
                  <h4 className="text-2xl text-black dark:text-white font-bold">
                    {location.name}
                  </h4>
                  
                  <div className="mt-3 text-center">
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                      <Icon icon="mdi:map-marker-radius" className="inline mr-1" />
                      {location.address}
                    </p>
                    
                    <p className="text-gray-500 dark:text-gray-400 text-xs mb-3">
                      <Icon icon="mdi:clock-outline" className="inline mr-1" />
                      {location.hours}
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-1 mb-4">
                      {location.services.slice(0, 2).map((service, idx) => (
                        <span 
                          key={idx} 
                          className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs px-2 py-1 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={location.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-semibold"
                    >
                      <Icon icon="mdi:google-maps" />
                      <span>Shiko në Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Seksion shtesë për informacion mbi pikat */}
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) mt-12 px-4">
        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Të gjitha pikat tona në Prishtinë
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Zgjidhni pikën më të afërt për shërbime të shpejta dhe efikase të pastrimit kimik
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
            {locationsData.map((location) => (
              <a
                key={location.id}
                href={location.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-blue-600 dark:text-blue-400 text-lg font-semibold mb-2">
                  {location.name.split(" ")[0]}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  {location.address.split(",")[0]}
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-8">
            <a
              href="tel:+38344893566"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
            >
              <Icon icon="mdi:phone" />
              <span>+383 44 893 566 - Telefononi për informacion</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
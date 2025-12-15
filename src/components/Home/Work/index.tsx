"use client";
import React from "react";
import { Icon } from "@iconify/react";

const Work = () => {
  // Të dhënat e përditësuara
  const locationsData = [
    {
      id: 1,
      name: "Cahi Pastrim Kimik (1)",
      address: "Rruga Dardania, Fushë Kosovë 12000",
      mapLink: "https://maps.app.goo.gl/4qdgjGJ1NviPnZdi9",
      hours: "E Hënë - E Shtunë: 08:00 - 20:00",
    },
    {
      id: 2,
      name: "Cahi Pastrim Kimik (2)",
      address: "Rruga Arberia, Fushë Kosovë 12000",
      mapLink: "https://maps.app.goo.gl/mk4pfXMyfUeMHwTF8",
      hours: "E Hënë - E Shtunë: 08:00 - 20:00",
    },
    {
      id: 3,
      name: "Cahi Pastrim Kimik (3)",
      address: "Rr. Hyzri Talla, Bregu i Diellit, Prishtinë",
      mapLink: "https://maps.app.goo.gl/hARKea6W9uZfDTnu9",
      hours: "E Hënë - E Shtunë: 08:00 - 20:00",
    },
    {
      id: 4,
      name: "Cahi Pastrim Kimik (4)",
      address: "Rr. Nail Hyseni, Arberi , Prishtinë",
      mapLink: "https://maps.app.goo.gl/3ciiGGZ1YsroEKJ28",
      hours: "E Hënë - E Shtunë: 08:00 - 20:00",
    },
    {
      id: 5,
      name: "Cahi Pastrim Kimik (5)",
      address: "Rr. Muharrem Fejza, Prishtinë",
      mapLink: "https://maps.app.goo.gl/TLYR9tfUMAifWKnS7",
      hours: "E Hënë - E Shtunë: 08:00 - 20:00",
    }
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ne operojmë në 5 lokacione
          </h1>
          <p className="text-gray-600 text-lg">
            Gjithmonë në dispozicion për shërbime të shpejta dhe profesionale
          </p>
        </div>

        {/* Grid me lokacionet */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locationsData.map((location) => (
            <div 
              key={location.id} 
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              {/* Header i kartës */}
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Icon 
                    icon="mdi:map-marker" 
                    className="text-blue-600 text-2xl" 
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {location.name}
                  </h3>
                  <p className="text-gray-600 flex items-center gap-2">
                    <Icon icon="mdi:location" className="text-gray-400" />
                    {location.address}
                  </p>
                </div>
              </div>

              {/* Informacion shtesë */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <Icon icon="mdi:clock-outline" className="text-gray-400" />
                  <span className="text-sm">{location.hours}</span>
                </div>

                {/* Butoni për harta */}
                <a
                  href={location.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mt-4"
                >
                  <Icon icon="mdi:google-maps" />
                  <span>Shiko në Google Maps</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Seksioni i fundit */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-full">
            <Icon icon="mdi:phone" className="text-blue-600" />
            <span className="font-bold text-gray-900">+383 44 893 566</span>
            <span className="text-gray-600 ml-4">- Na telefononi për çdo lokacion</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

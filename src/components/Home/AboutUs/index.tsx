"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Aboutus = () => {
  const aboutData = [
    {
      heading: "Përvoja Jonë",
      icon: "mdi:clock-time-eight",
      paragraph: "Me 15+ vjet përvojë në industri, kemi përpunuar njohuri unike për çdo lloj ndotjeje dhe sipërfaqeje.",
      link: "Lexoni historinë tonë",
      stats: "15+ Vite"
    },
    {
      heading: "Teknologjia",
      icon: "mdi:microscope",
      paragraph: "Përdorim teknologji të avancuar dhe kimikate profesionale për pastrim të thellë pa dëmtuar sipërfaqet.",
      link: "Shikoni pajisjet tona",
      stats: "100+ Pajisje"
    },
    {
      heading: "Ekipi Profesional",
      icon: "mdi:account-group",
      paragraph: "Stafi ynë i certifikuar trajnon çdo projekt me kujdes dhe përkushtim të veçantë për detaje.",
      link: "Takoni ekipin tonë",
      stats: "20+ Ekspertë"
    },
    {
      heading: "Garancioni",
      icon: "mdi:shield-check",
      paragraph: "Ofrojmë garanci të plotë për punën tonë dhe jemi gjithmonë të gatshëm për ndonjë rregullim.",
      link: "Lexoni garancinë",
      stats: "100% Kënaqësi"
    },
    {
      heading: "Miqësor me Mjedisin",
      icon: "mdi:leaf",
      paragraph: "Përdorim produkte biodegradabile dhe teknologji kursuese uji për të mbrojtur mjedisin.",
      link: "Mësoni më shumë",
      stats: "Eco-Friendly"
    },
    {
      heading: "24/7 Shërbim Emergjence",
      icon: "mdi:alert",
      paragraph: "Jemi të disponueshëm gjatë gjithë orës për urgjenca të pastrimit dhe ndotjeve të papritura.",
      link: "Na telefononi",
      stats: "24 Orë"
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 overflow-hidden py-16 lg:py-24">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 relative">
        {/* Background Pattern */}
        <div className="absolute -left-20 bottom-10 opacity-10">
          <Icon icon="mdi:clean" className="text-8xl text-blue-600" />
        </div>
        
        <div className="lg:p-12 px-4 py-8 bg-white dark:bg-gray-800 rounded-3xl shadow-xl">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-6 py-2 rounded-full mb-4">
              <Icon icon="mdi:information" className="text-blue-600 text-xl" />
              <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-widest uppercase">
                rreth nesh
              </p>
            </div>
            <h4 className="text-3xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Pse të zgjidhni <span className="text-blue-600">PASTRIM KIMIK CAHI?</span>
            </h4>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Jemi partneri juaj i besueshëm për të gjitha nevojat e pastrimit. Me përvojë, teknologji dhe përkushtim për cilësi, 
              ofrojmë zgjidhje komplekse për pastrim të thellë dhe të qëndrueshëm.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 lg:mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2000+</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Projekte të Përfunduara</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Klientë të Kënaqur</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Shërbim Emergjence</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 p-6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">15min</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Përgjigje e Shpejtë</div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {aboutData.map((item, i) => (
              <div
                key={i}
                className="group relative bg-white dark:bg-gray-800 rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700"
              >
                {/* Stats Badge */}
                <div className="absolute -top-4 right-6 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  {item.stats}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon icon={item.icon} className="text-white text-3xl" />
                </div>
                
                {/* Content */}
                <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  {item.heading}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {item.paragraph}
                </p>
                
                {/* Link */}
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors group/link"
                >
                  <span>{item.link}</span>
                  <Icon 
                    icon="mdi:arrow-right" 
                    className="group-hover/link:translate-x-2 transition-transform duration-300" 
                    width="20" 
                    height="20" 
                  />
                </Link>
                
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 lg:mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 lg:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h5 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Gati për një pastrim profesional?
              </h5>
              <p className="text-blue-100 mb-8 text-lg">
                Kontaktoni ne sot për një vlerësim falas dhe konsultim personalizuar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+38344893566"
                  className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-colors"
                >
                  <Icon icon="mdi:phone" className="text-xl" />
                  <span>+383 44 893 566</span>
                </a>
                <Link
                  href="/kontakti"
                  className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full text-lg transition-colors"
                >
                  <Icon icon="mdi:email-fast" className="text-xl" />
                  <span>Kërko Ofertë Online</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 lg:mt-16 flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            <div className="flex flex-col items-center">
              <Icon icon="mdi:certificate" className="text-green-500 text-4xl mb-2" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Certifikuar</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon icon="mdi:shield-check" className="text-blue-500 text-4xl mb-2" />
              <span className="text-sm text-gray-600 dark:text-gray-300">I Sigurt</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon icon="mdi:leaf" className="text-green-500 text-4xl mb-2" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Eco-Friendly</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon icon="mdi:medal" className="text-yellow-500 text-4xl mb-2" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Cilësi e Lartë</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon icon="mdi:clock-fast" className="text-purple-500 text-4xl mb-2" />
              <span className="text-sm text-gray-600 dark:text-gray-300">I Shpejtë</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;

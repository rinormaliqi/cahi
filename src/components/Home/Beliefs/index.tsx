"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Beliefs = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 overflow-hidden py-16 lg:py-24" id="services">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* COLUMN-1 - Cilësia dhe Besueshmëria */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 pt-12 px-6 sm:px-12 lg:px-16 pb-16 md:pb-20 rounded-3xl relative overflow-hidden">
            {/* Dekorativ Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute right-0 bottom-0 w-64 h-64">
                <Icon icon="mdi:clean" className="w-full h-full text-white" />
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-5">
                <Icon icon="mdi:shield-check" className="text-white text-2xl" />
                <h2 className="text-lg font-semibold text-white tracking-widest uppercase">
                  Parimi ynë
                </h2>
              </div>
              
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-center sm:text-start">
                Cilësia 
                <span className="block text-white/80 mt-2">
                  dhe Besueshmëria janë prioriteti ynë.
                </span>
              </h3>
              
              <div className="space-y-4 mb-12">
                <div className="flex items-center gap-3">
                  <Icon icon="mdi:check-circle" className="text-green-400 text-xl" />
                  <p className="text-white/90 text-lg">Materiale të sigurta dhe biodegradabile</p>
                </div>
                <div className="flex items-center gap-3">
                  <Icon icon="mdi:check-circle" className="text-green-400 text-xl" />
                  <p className="text-white/90 text-lg">Teknologji moderne të pastrimit</p>
                </div>
                <div className="flex items-center gap-3">
                  <Icon icon="mdi:check-circle" className="text-green-400 text-xl" />
                  <p className="text-white/90 text-lg">Staf i certifikuar dhe me përvojë</p>
                </div>
              </div>
              
              <div className="text-center sm:text-start">
                <Link
                  href="#about"
                  className="inline-flex items-center gap-3 text-lg py-4 px-8 font-semibold text-blue-600 rounded-full duration-300 bg-white hover:bg-gray-100 hover:shadow-lg transition-all"
                >
                  <Icon icon="mdi:information" className="text-xl" />
                  <a href="#about">Mësoni më shumë rreth nesh</a>
                </Link>
              </div>
            </div>
          </div>

          {/* COLUMN-2 - Teknologjia dhe Innovacioni */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 pt-12 px-6 sm:px-12 lg:px-16 pb-16 md:pb-20 rounded-3xl relative overflow-hidden">
            {/* Dekorativ Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute right-0 bottom-0 w-64 h-64">
                <Icon icon="mdi:microscope" className="w-full h-full text-white" />
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-5">
                <Icon icon="mdi:lightbulb-on" className="text-white text-2xl" />
                <h2 className="text-lg font-semibold text-white tracking-widest uppercase">
                  Teknologjia
                </h2>
              </div>
              
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-center sm:text-start">
                <span className="text-white">Përdorim të</span>
                <span className="block mt-2 text-white/80">
                  Teknologjisë më të Avancuar.
                </span>
              </h3>
              
              <div className="space-y-4 mb-12">
                <div className="flex items-center gap-3">
                  <Icon icon="mdi:robot-vacuum" className="text-yellow-300 text-xl" />
                  <p className="text-white/90 text-lg">Pajisje të avancuara për pastrim të thellë</p>
                </div>
                <div className="flex items-center gap-3">
                  <Icon icon="mdi:chemical-weapon" className="text-yellow-300 text-xl" />
                  <p className="text-white/90 text-lg">Kimikate të specializuara dhe të sigurta</p>
                </div>
                <div className="flex items-center gap-3">
                  <Icon icon="mdi:water-check" className="text-yellow-300 text-xl" />
                  <p className="text-white/90 text-lg">Sisteme eko-friendly dhe kursuese të ujit</p>
                </div>
              </div>
              
              <div className="text-center sm:text-start">
                <Link
                  href="#services"
                  className="inline-flex items-center gap-3 text-lg py-4 px-8 font-semibold text-green-600 rounded-full duration-300 bg-white hover:bg-gray-100 hover:shadow-lg transition-all"
                >
                  <Icon icon="mdi:toolbox" className="text-xl" />
                  <button               onClick={() => window.open('https://wa.me/38344893566', '_blank')}
>Kontakto</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600 dark:text-gray-300">Vite Përvoje</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
            <div className="text-gray-600 dark:text-gray-300">Klientë të Kënaqur</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-300">Shërbim Emergjence</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-300">Garancion Cilësie</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-3xl shadow-lg">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Kërkon një ofertë falas?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Na kontaktoni për një vlerësim falas dhe konsultim profesional
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="tel:+38344893566"
                              onClick={() => window.open('https://wa.me/38344893566', '_blank')}

                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <Icon icon="mdi:phone" />
                <span>+383 44 893 566</span>
              </a>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-6 rounded-lg border border-blue-600 transition-colors"
              >
                <Icon icon="mdi:email" />
                <span>Dërgo Email</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beliefs;

"use client"
import React from "react";
import { Icon } from "@iconify/react";
import { Disclosure } from "@headlessui/react";

const FAQ = () => {
  const faqData = [
{
  question: "Çfarë lloj shërbimesh pastrimi ofroni?",
  answer: "Ofrojmë shërbime profesionale të pastrimit kimik për rroba, duke përfshirë kostume, fustane, pallto, xhaketa, këmisha dhe veshje delikate. Trajtojmë njolla të ndryshme duke ruajtur strukturën dhe ngjyrën e rrobave."
},
{
  question: "A janë materialet dhe kimikatet të sigurta për rrobat?",
  answer: "Po, përdorim produkte profesionale dhe teknologji moderne të pastrimit kimik që janë të sigurta për të gjitha llojet e tekstileve. Procesi ynë është i dizajnuar për të mos dëmtuar fibrat dhe për të zgjatur jetën e rrobave."
},
{
  question: "Sa kohë zgjat procesi i pastrimit të rrobave?",
  answer: "Koha e pastrimit varet nga lloji i rrobës dhe niveli i ndotjes. Në shumicën e rasteve, rrobat janë gati për marrje brenda 24–48 orësh. Për shërbime ekspres, koha mund të jetë edhe më e shkurtër."
}

  ];

  return (
    <section className="relative py-8 md:py-16 bg-cover bg-center overflow-hidden dark:bg-darkmode" id="faq">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="relative rounded-xl md:rounded-2xl py-12 md:py-24 bg-faqBg bg-no-repeat bg-cover bg-primary">
          <p className="text-base md:text-lg font-normal text-white text-center mb-4 md:mb-6">PYETJE TË SHPESHTA</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center text-white px-4 md:px-8 lg:px-16 mb-8 md:mb-12">
            Pyetjet më të shpeshta nga klientët tanë.
          </h2>
          <div className="w-full px-4 md:px-6 pt-8 md:pt-16">
            
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className={`mx-auto w-full max-w-4xl rounded-lg md:rounded-2xl p-4 md:p-6 lg:p-8 bg-white ${index < faqData.length - 1 ? 'mb-4 md:mb-5' : ''}`}
              >
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between items-center text-left text-base sm:text-lg md:text-xl lg:text-2xl font-medium focus:outline-hidden">
                        <span className="text-black pr-4 md:pr-8">{item.question}</span>
                        <div
                          className={`flex-shrink-0 h-8 w-8 md:h-10 md:w-10 flex items-center justify-center rounded-full bg-gray-100 transition-transform duration-300 ${open ? "rotate-180 bg-primary text-white" : ""
                            }`}
                        >
                          <Icon icon="lucide:chevron-up" className="h-5 w-5 md:h-6 md:w-6" />
                        </div>
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-sm md:text-base lg:text-lg text-black/70 font-normal text-left pt-4 mt-4 md:mt-6 border-t border-gray-200">
                        <div className="lg:max-w-[90%] pt-2 md:pt-4">
                          {item.answer}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
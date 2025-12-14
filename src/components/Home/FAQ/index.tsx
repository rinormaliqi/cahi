"use client"
import React from "react";
import { Icon } from "@iconify/react";
import { Disclosure } from "@headlessui/react";

const FAQ = () => {
  const faqData = [
    {
      question: "Çfarë lloj shërbimesh pastrimi ofroni?",
      answer: "Ofrojmë një gamë të gjerë shërbimesh pastrimi kimik përfshirë pastrimin e tapicerieve, qilimave, shtrojave, fasadave dhe sipërfaqeve industriale. Përdorim teknologji të avancuar dhe kimikate profesionale për çdo lloj ndotjeje."
    },
    {
      question: "A janë produktet tuaja të sigurta për fëmijët dhe kafshët shtëpiake?",
      answer: "Po, të gjitha produktet tona janë biodegradabile, jo-tokside dhe të testuara për siguri. Janë të sigurta për fëmijët dhe kafshët shtëpiake pas aplikimit."
    },
    {
      question: "Sa kohë duhet për të tharë zona e pastruar?",
      answer: "Koha e tharjes varet nga lloji i sipërfaqes dhe kushtet atmosferike. Në përgjithësi, qilimat dhe tapiceritë thahen brenda 4-6 orësh. Ne përdorim pajisje speciale tharjeje për të shpejtuar procesin."
    }
  ];

  return (
    <section className="relative py-1 bg-cover bg-center overflow-hidde dark:bg-darkmode">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md)">
        <div className="relative rounded-2xl py-24 bg-faqBg bg-no-repeat bg-cover bg-primary">
          <p className="text-lg font-normal text-white text-center mb-6">PYETJE TË SHPESHTA</p>
          <h2 className="text-6xl font-semibold text-center text-white mx-72">
            Pyetjet më të shpeshta nga klientët tanë.
          </h2>
          <div className="w-full px-4 pt-16">
            
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className={`mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white ${index < faqData.length - 1 ? 'mb-5' : ''}`}
              >
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between items-center text-left text-2xl font-medium focus:outline-hidden">
                        <span className="text-black">{item.question}</span>
                        <div
                          className={`h-5 w-5 transform transition-transform duration-300 ${open ? "rotate-180" : ""
                            }`}
                        >
                          <Icon icon="lucide:chevron-up" width="20" height="20" />
                        </div>
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-16 text-black/50 font-normal text-left pt-4 mt-6 border-t border-border">
                        <div className="lg:max-w-70%">
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
"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Faleminderit për mesazhin! Do t'ju kontaktojmë brenda 24 orëve.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="bg-testimonial dark:bg-darkmode bg-cover bg-center overflow-hidden before:absolute before:w-full before:h-full before:bg-[url('/images/wework/elipse.svg')] before:bg-no-repeat before:bg-center" id="contact-section">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div className="py-12">
          <div className="text-center">
            <h3 className="text-4xl sm:text-6xl font-bold text-black dark:text-white my-3">
              Na kontaktoni.
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold text-black/50 dark:text-white/50 lg:mr-48 my-4">
              Na kontaktoni.
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold text-black/25 dark:text-white/25 lg:-mr-32 my-4">
              Na kontaktoni.
            </h3>
          </div>
          
          <div className="mt-16 max-w-4xl mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Emri juaj"
                    required
                    className="w-full p-4 bg-white dark:bg-darkHeroBg rounded-3xl border-none shadow-testimonial focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email adresa"
                    required
                    className="w-full p-4 bg-white dark:bg-darkHeroBg rounded-3xl border-none shadow-testimonial focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Numri i telefonit"
                    required
                    className="w-full p-4 bg-white dark:bg-darkHeroBg rounded-3xl border-none shadow-testimonial focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    placeholder="Lloji i shërbimit"
                    className="w-full p-4 bg-white dark:bg-darkHeroBg rounded-3xl border-none shadow-testimonial focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Përshkruani nevojën tuaj për pastrim..."
                    rows={4}
                    required
                    className="w-full p-4 bg-white dark:bg-darkHeroBg rounded-3xl border-none shadow-testimonial focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white resize-none"
                  />
                </div>
                
                <div className="md:col-span-2 text-center">
                  <button
                    type="submit"
                    className="px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-3xl shadow-testimonial transition-colors duration-300"
                  >
                    Dërgo mesazhin
                  </button>
                  
                  <p className="text-black/50 dark:text-white/50 mt-6 text-sm">
                    Ose na telefononi direkt:{" "}
                    <a href="tel:+38344893566" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                      +383 44 893 566
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
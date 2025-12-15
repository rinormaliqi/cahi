"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Emri është i detyrueshëm";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email është i detyrueshëm";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email jo valid";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Numri i telefonit është i detyrueshëm";
    } else if (!/^[0-9+\-\s]+$/.test(formData.phone)) {
      newErrors.phone = "Numri i telefonit jo valid";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Mesazhi është i detyrueshëm";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Këtu do të vendosni URL-në e backend tuaj
      // Për testim, mund të përdorni console.log për të parë të dhënat
      console.log("Të dhënat e formës:", formData);
      
      // Simulim dërgimi të suksesshëm
      setTimeout(() => {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      }, 1000);
      
    } catch (error) {
      console.error("Gabim në dërgimin e formës:", error);
      setSubmitStatus("error");
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const serviceOptions = [
    "Zgjedh llojin e shërbimit",
    "Pastrim i përgjithshëm",
    "Pastrim i thellë",
    "Pastrim pas ndërtimit",
    "Pastrim i zyrës",
    "Shërbime të tjera"
  ];

  return (
    <section className="relative bg-testimonial dark:bg-darkmode bg-cover bg-center overflow-hidden" id="contact">
      {/* Elementi i sfondit - tani është në sfond dhe nuk ndërhyjnë */}
      <div className="absolute inset-0 w-full h-full bg-[url('/images/wework/elipse.svg')] bg-no-repeat bg-center opacity-30 pointer-events-none"></div>
      
      <div className="container relative z-10 mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div className="py-12">
          <div className="text-center">
            <h3 className="text-4xl sm:text-6xl font-bold text-black dark:text-white my-3">
              Na kontaktoni.
            </h3>
       
          </div>
          
          {submitStatus === "success" && (
            <div className="max-w-4xl mx-auto mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-3xl text-center">
              ✅ Faleminderit për mesazhin! Do t'ju kontaktojmë brenda 24 orëve.
            </div>
          )}
          
          {submitStatus === "error" && (
            <div className="max-w-4xl mx-auto mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-3xl text-center">
              ❌ Ka ndodhur një gabim. Ju lutem provoni përsëri ose na telefononi direkt.
            </div>
          )}
          
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
                    className={`w-full p-4 bg-white dark:bg-darkHeroBg rounded-3xl border-none shadow-testimonial focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white ${
                      errors.name ? "ring-2 ring-red-500" : ""
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2 ml-4">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email adresa"
                    className={`w-full p-4 bg-white dark:bg-darkHeroBg rounded-3xl border-none shadow-testimonial focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white ${
                      errors.email ? "ring-2 ring-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2 ml-4">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Numri i telefonit"
                    className={`w-full p-4 bg-white dark:bg-darkHeroBg rounded-3xl border-none shadow-testimonial focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white ${
                      errors.phone ? "ring-2 ring-red-500" : ""
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-2 ml-4">{errors.phone}</p>
                  )}
                </div>
                
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-4 bg-white dark:bg-darkHeroBg rounded-3xl border-none shadow-testimonial focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white appearance-none"
                  >
                    {serviceOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Përshkruani nevojën tuaj për pastrim..."
                    rows={4}
                    className={`w-full p-4 bg-white dark:bg-darkHeroBg rounded-3xl border-none shadow-testimonial focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white resize-none ${
                      errors.message ? "ring-2 ring-red-500" : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-2 ml-4">{errors.message}</p>
                  )}
                </div>
                
                <div className="md:col-span-2 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-3xl shadow-testimonial transition-colors duration-300 flex items-center justify-center gap-2 mx-auto ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin">⟳</span>
                        Po dërgohet...
                      </>
                    ) : (
                      "Dërgo mesazhin"
                    )}
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

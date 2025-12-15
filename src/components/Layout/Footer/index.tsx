import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Footer = () => {
  const services = [
  { label: "Pastrim Rrobash të Përditshme", href: "#about" },
  { label: "Pastrim Kostumesh dhe Xhupash", href: "#about"  },
  { label: "Pastrim Rrobash të Ndjeshme", href: "#about"  },
  { label: "Trajtim Kundër Njollave", href: "#about"  }
  ];

  const company = [
    { label: "Rreth Nesh", href: "#about" },
  ];

  const contact = [
    { label: "Adresa: Rr. Agim Ramadani, Prishtinë", href: "#", icon: "mdi:map-marker" },
    { label: "+383 44 893 566", href: "tel:+38344893566", icon: "mdi:phone" },
    { label: "info@pastrim-kimik-cahi.com", href: "mailto:info@pastrim-kimik-cahi.com", icon: "mdi:email" },
    { label: "Hënë - Premte: 8:00-18:00", href: "#", icon: "mdi:clock" },
  ];

  return (
    <footer className="bg-gray-900 text-white" id="kontakti">
      <div className="mx-auto max-w-7xl pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-10 lg:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-x-16">
          {/* COLUMN-1 - LOGO & INFO */}
          <div className='md:col-span-2 lg:col-span-4'>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <img src="/logo.png" className="text-white text-xl md:text-2xl" />
              </div>
              <div>
                <h3 className='text-white text-2xl md:text-3xl font-bold leading-tight'>
                  PASTRIM KIMIK <span className="text-blue-400">CAHI</span>
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mt-1">Shërbime Profesionale të Pastrimit</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 text-sm md:text-base">
              Ofrojmë shërbime të specializuara të pastrimit kimik me teknologji të avancuar dhe staf të kualifikuar për shtëpi, zyra dhe objekte industriale.
            </p>
            
            {/* Social Media */}
            <div className='flex gap-3 md:gap-4 mb-6 md:mb-8'>
              <Link 
                href="https://facebook.com" 
                className="footer-icons bg-blue-600 hover:bg-blue-700 p-2 md:p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Icon icon="mdi:facebook" className="text-white text-lg md:text-xl" />
              </Link>
              <Link 
                href="https://instagram.com" 
                className="footer-icons bg-pink-600 hover:bg-pink-700 p-2 md:p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Icon icon="mdi:instagram" className="text-white text-lg md:text-xl" />
              </Link>
              <Link 
                href="https://wa.me/+38344893566" 
                className="footer-icons bg-green-600 hover:bg-green-700 p-2 md:p-3 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <Icon icon="mdi:whatsapp" className="text-white text-lg md:text-xl" />
              </Link>
              <Link 
                href="tel:+38344893566" 
                className="footer-icons bg-gray-700 hover:bg-gray-600 p-2 md:p-3 rounded-full transition-colors"
                aria-label="Telefon"
              >
                <Icon icon="mdi:phone" className="text-white text-lg md:text-xl" />
              </Link>
            </div>

            {/* Call to Action Button */}
            <a 
              href="tel:+38344893566" 
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-colors text-sm md:text-base"
            >
              <Icon icon="mdi:phone" className="text-white text-lg md:text-xl" />
              <span>NA TELEFONONI TANI</span>
            </a>
          </div>

          {/* COLUMN-2 - SHËRBIMET */}
          <div className="lg:col-span-3">
            <p className="text-white text-lg md:text-xl font-extrabold mb-4 md:mb-6 flex items-center gap-2">
              <Icon icon="mdi:spray" className="text-blue-400 text-lg md:text-xl" />
              <span>Shërbimet</span>
            </p>
            <ul className="space-y-2 md:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href} 
                    className="text-gray-300 hover:text-white hover:text-blue-400 transition-colors flex items-center gap-2 text-sm md:text-base"
                  >
                    <Icon icon="mdi:chevron-right" className="text-blue-500 text-sm md:text-base" />
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN-3 - KOMPANIA */}
          <div className="lg:col-span-2">
            <p className="text-white text-lg md:text-xl font-extrabold mb-4 md:mb-6 flex items-center gap-2">
              <Icon icon="mdi:office-building" className="text-blue-400 text-lg md:text-xl" />
              <span>Kompania</span>
            </p>
            <ul className="space-y-2 md:space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href} 
                    className="text-gray-300 hover:text-white hover:text-blue-400 transition-colors flex items-center gap-2 text-sm md:text-base"
                  >
                    <Icon icon="mdi:chevron-right" className="text-blue-500 text-sm md:text-base" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN-4 - KONTAKTI */}
          <div className="md:col-span-2 lg:col-span-3">
            <p className="text-white text-lg md:text-xl font-extrabold mb-4 md:mb-6 flex items-center gap-2">
              <Icon icon="mdi:contacts" className="text-blue-400 text-lg md:text-xl" />
              <span>Kontakti</span>
            </p>
            <ul className="space-y-3 md:space-y-4">
              {contact.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icon icon={item.icon as any} className="text-blue-400 mt-0.5 md:mt-1 flex-shrink-0 text-sm md:text-base" />
                  {item.href !== '#' ? (
                    <Link 
                      href={item.href} 
                      className="text-gray-300 hover:text-white hover:text-blue-400 transition-colors text-sm md:text-base break-words"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-gray-300 text-sm md:text-base break-words">{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 md:gap-6">
            <div className="w-full lg:w-auto">
              <h4 className="text-lg md:text-xl font-bold mb-2">Abonohuni në Newsletter</h4>
              <p className="text-gray-400 text-sm md:text-base">Merrni këshilla dhe oferta ekskluzive për pastrim</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input 
                type="email" 
                placeholder="Email adresa juaj" 
                className="px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none flex-grow w-full sm:w-auto"
              />
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors whitespace-nowrap"
              >
                Abonohu
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* All Rights Reserved */}
      <div className="bg-gray-950 py-4 md:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className='text-gray-400 text-xs md:text-sm'>
                © {new Date().getFullYear()} Pastrim Kimik CAHI - Të gjitha të drejtat e rezervuara
              </h3>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
              <Link href="/">
                <span className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors whitespace-nowrap">
                  Politika e Privatësisë
                </span>
              </Link>
              <span className="text-gray-600 hidden md:block">|</span>
              <Link href="/">
                <span className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors whitespace-nowrap">
                  Kushtet dhe Kushtet
                </span>
              </Link>
              <span className="text-gray-600 hidden md:block">|</span>
              <Link href="#faq">
                <span className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors whitespace-nowrap">
                  Pyetje të Shpeshta
                </span>
              </Link>
            </div>
          </div>
          
          {/* Payment Methods */}
          <div className="mt-4 md:mt-6 flex flex-col sm:flex-row justify-center items-center gap-2 md:gap-4">
            <span className="text-gray-400 text-xs md:text-sm">Metodat e pagesës:</span>
            <div className="flex gap-2">
              <Icon icon="logos:visa" className="text-xl md:text-2xl" />
              <Icon icon="logos:mastercard" className="text-xl md:text-2xl" />
              <Icon icon="logos:paypal" className="text-xl md:text-2xl" />
              <Icon icon="mdi:cash" className="text-xl md:text-2xl text-green-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

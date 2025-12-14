import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Footer = () => {
  const services = [
    { label: "Pastrim i Tapicerive", href: "/sherbimet/tapiceri" },
    { label: "Pastrim i Qilimave", href: "/sherbimet/qilima" },
    { label: "Pastrim i Shtrojave", href: "/sherbimet/shtroja" },
    { label: "Pastrim Industrial", href: "/sherbimet/industrial" },
    { label: "Pastrim i Fasadave", href: "/sherbimet/fasada" },
    { label: "Pastrim i Makinave", href: "/sherbimet/makina" }
  ];

  const company = [
    { label: "Rreth Nesh", href: "/rreth-nesh" },
    { label: "Çmimet", href: "/cmimet" },
    { label: "Projektet", href: "/projektet" },
    { label: "Referencat", href: "/referencat" },
    { label: "Punë të Lira", href: "/karriere" },
    { label: "Garancia", href: "/garancia" }
  ];

  const contact = [
    { label: "Adresa: Rr. Agim Ramadani, Prishtinë", href: "#", icon: "mdi:map-marker" },
    { label: "+383 44 893 566", href: "tel:+38344893566", icon: "mdi:phone" },
    { label: "info@pastrim-kimik-cahi.com", href: "mailto:info@pastrim-kimik-cahi.com", icon: "mdi:email" },
    { label: "Hënë - Premte: 8:00-18:00", href: "#", icon: "mdi:clock" },
    { label: "Shtunë: 9:00-15:00", href: "#", icon: "mdi:clock" }
  ];

  return (
    <footer className="bg-gray-900 text-white" id="kontakti">
      <div className="mx-auto max-w-7xl pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 - LOGO & INFO */}
          <div className='col-span-12 lg:col-span-4'>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Icon icon="mdi:clean" className="text-white text-2xl" />
              </div>
              <div>
                <h3 className='text-white text-3xl font-bold'>PASTRIM KIMIK <span className="text-blue-400">CAHI</span></h3>
                <p className="text-gray-400 text-sm mt-1">Shërbime Profesionale të Pastrimit</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6">
              Ofrojmë shërbime të specializuara të pastrimit kimik me teknologji të avancuar dhe staf të kualifikuar për shtëpi, zyra dhe objekte industriale.
            </p>
            
            {/* Social Media */}
            <div className='flex gap-4 mb-8'>
              <Link 
                href="https://facebook.com" 
                className="footer-icons bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Icon icon="mdi:facebook" className="text-white text-xl" />
              </Link>
              <Link 
                href="https://instagram.com" 
                className="footer-icons bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Icon icon="mdi:instagram" className="text-white text-xl" />
              </Link>
              <Link 
                href="https://wa.me/+38344893566" 
                className="footer-icons bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <Icon icon="mdi:whatsapp" className="text-white text-xl" />
              </Link>
              <Link 
                href="tel:+38344893566" 
                className="footer-icons bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors"
                aria-label="Telefon"
              >
                <Icon icon="mdi:phone" className="text-white text-xl" />
              </Link>
            </div>

            {/* Call to Action Button */}
            <a 
              href="tel:+38344893566" 
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              <Icon icon="mdi:phone" className="text-white text-xl" />
              <span>NA TELEFONONI TANI</span>
            </a>
          </div>

          {/* COLUMN-2 - SHËRBIMET */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <p className="text-white text-xl font-extrabold mb-6 flex items-center gap-2">
              <Icon icon="mdi:spray" className="text-blue-400" />
              <span>Shërbimet</span>
            </p>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href} 
                    className="text-gray-300 hover:text-white hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <Icon icon="mdi:chevron-right" className="text-blue-500" />
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN-3 - KOMPANIA */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-2">
            <p className="text-white text-xl font-extrabold mb-6 flex items-center gap-2">
              <Icon icon="mdi:office-building" className="text-blue-400" />
              <span>Kompania</span>
            </p>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href} 
                    className="text-gray-300 hover:text-white hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <Icon icon="mdi:chevron-right" className="text-blue-500" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN-4 - KONTAKTI */}
          <div className="col-span-12 lg:col-span-3">
            <p className="text-white text-xl font-extrabold mb-6 flex items-center gap-2">
              <Icon icon="mdi:contacts" className="text-blue-400" />
              <span>Kontakti</span>
            </p>
            <ul className="space-y-4">
              {contact.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icon icon={item.icon as any} className="text-blue-400 mt-1 flex-shrink-0" />
                  {item.href !== '#' ? (
                    <Link 
                      href={item.href} 
                      className="text-gray-300 hover:text-white hover:text-blue-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-gray-300">{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-xl font-bold mb-2">Abonohuni në Newsletter</h4>
              <p className="text-gray-400">Merrni këshilla dhe oferta ekskluzive për pastrim</p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Email adresa juaj" 
                className="px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none flex-grow md:w-64"
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
      <div className="bg-gray-950 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className='text-center md:text-start text-gray-400 text-sm'>
                © {new Date().getFullYear()} Pastrim Kimik CAHI - Të gjitha të drejtat e rezervuara
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/politika-e-privatesise">
                <span className="text-gray-400 hover:text-white text-sm transition-colors">
                  Politika e Privatësisë
                </span>
              </Link>
              <span className="hidden sm:block text-gray-600">|</span>
              <Link href="/kushtet-dhe-kushtet">
                <span className="text-gray-400 hover:text-white text-sm transition-colors">
                  Kushtet dhe Kushtet
                </span>
              </Link>
              <span className="hidden sm:block text-gray-600">|</span>
              <Link href="/faq">
                <span className="text-gray-400 hover:text-white text-sm transition-colors">
                  Pyetje të Shpeshta
                </span>
              </Link>
            </div>
          </div>
          
          {/* Payment Methods */}
          <div className="mt-6 flex justify-center items-center gap-4">
            <span className="text-gray-400 text-sm">Metodat e pagesës:</span>
            <div className="flex gap-2">
              <Icon icon="logos:visa" className="text-2xl" />
              <Icon icon="logos:mastercard" className="text-2xl" />
              <Icon icon="logos:paypal" className="text-2xl" />
              <Icon icon="mdi:cash" className="text-2xl text-green-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import Image from "next/image";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import { Icon } from "@iconify/react/dist/iconify.js";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  
  const navbarRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navbarOpen]);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 border-b border-gray-200 bg-white ${sticky ? "shadow-lg bg-white" : "shadow-none"}`}
    >
      <div className="lg:py-0 py-2">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) flex items-center justify-between px-4">
          {/* Logo Section */}
          <div
            className={`pr-4 lg:pr-8 border-r border-gray-300 duration-300 ${sticky ? "py-3" : "py-5"}`}
          >
            <div className="flex items-center gap-3">
              {/* Optional: Add cleaning company logo */}
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <img 
                  className="text-white text-xl" 
                  src="/logo.png"
                />
              </div>
              <div>
                <h1 className="font-bold text-lg text-blue-800">PASTRIM KIMIK CAHI</h1>
                <p className="text-xs text-gray-600">Shërbime Profesionale të Pastrimit</p>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex grow items-center gap-8 justify-center">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>

          {/* Contact Info & Mobile Menu Button */}
          <div
            className={`flex items-center gap-4 lg:gap-6 pl-4 lg:pl-8 border-l border-gray-300 duration-300 ${sticky ? "py-3" : "py-5"}`}
          >
            {/* Contact Phone Number */}
            <div className="hidden lg:flex flex-col items-end">
              <div className="flex items-center gap-2">
                <Icon 
                  icon="mdi:phone" 
                  className="text-blue-600 text-lg" 
                />
                <span className="font-semibold text-blue-800">+383 44 893 566</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">Na telefononi për ofertë</p>
            </div>

            {/* Call Button for Mobile/Tablet */}
            <a 
              href="tel:+38344893566"
              className="lg:hidden flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Icon icon="mdi:phone" className="text-white" />
              <span>Telefono</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-2 rounded-lg hover:bg-gray-100"
              aria-label="Toggle mobile menu"
            >
              {navbarOpen ? (
                <Icon icon="mdi:close" className="text-gray-700 text-2xl" />
              ) : (
                <Icon icon="mdi:menu" className="text-gray-700 text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {navbarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" />
        )}

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${navbarOpen ? "translate-x-0" : "translate-x-full"} z-50`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Icon icon="mdi:clean" className="text-white text-xl" />
                </div>
                <div>
                  <h2 className="font-bold text-lg text-blue-800">PASTRIM KIMIK CAHI</h2>
                  <p className="text-xs text-gray-600">Prishtinë</p>
                </div>
              </div>
              <button
                onClick={() => setNavbarOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label="Close menu"
              >
                <Icon icon="mdi:close" className="text-gray-700 text-2xl" />
              </button>
            </div>

            {/* Contact Info in Mobile Menu */}
            <div className="p-6 bg-blue-50 border-b">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Icon icon="mdi:phone" className="text-white text-2xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Na telefononi për ofertë</p>
                  <a 
                    href="tel:+38344893566" 
                    className="text-xl font-bold text-blue-800 hover:text-blue-600"
                  >
                    +383 44 893 566
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Shërbime profesionale të pastrimit kimik në Prishtinë dhe rrethinë
              </p>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto p-6">
              <div className="space-y-1">
                {headerData.map((item, index) => (
                  <MobileHeaderLink key={index} item={item} />
                ))}
              </div>

              {/* Additional Services Info */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Shërbimet tona:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Icon icon="mdi:check-circle" className="text-green-500" />
                    <span>Pastrim i thellë i tapicerieve</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="mdi:check-circle" className="text-green-500" />
                    <span>Pastrim i qilimave dhe shtrojave</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="mdi:check-circle" className="text-green-500" />
                    <span>Shërbime industriale</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon icon="mdi:check-circle" className="text-green-500" />
                    <span>Pastrim objektesh të tëra</span>
                  </li>
                </ul>
              </div>
            </nav>

            {/* Mobile Menu Footer */}
            <div className="p-6 border-t bg-gray-50">
              <a
                href="tel:+38344893566"
                className="w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Icon icon="mdi:phone" />
                <span>BËNI NJË POROSI TANI</span>
              </a>
              <p className="text-center text-sm text-gray-500 mt-3">
                Jemi të disponueshëm 24/7 për urgjenca
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

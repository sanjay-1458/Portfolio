import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

function Navbar() {
  const sideMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false);

  const accentHover = "hover:text-[#00bf8f]";
  const mobileAccentHover = "hover:text-[#302b63]";

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(0)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileLinkClick = () => {
    closeMenu();
  };

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <a href="#top">
          <Image
            src={assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt="Sanjay"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-300 ${
            isScroll ? "" : "bg-black/30 shadow-md backdrop-blur-sm"
          } `}
        >
          <li>
            <a
              className={`font-Ovo text-gray-300 ${accentHover} transition-colors`}
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={`font-Ovo text-gray-300 ${accentHover} transition-colors`}
              href="#about"
            >
              About me
            </a>
          </li>
          <li>
            <a
              className={`font-Ovo text-gray-300 ${accentHover} transition-colors`}
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className={`font-Ovo text-gray-300 ${accentHover} transition-colors`}
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className={`font-Ovo text-gray-300 ${accentHover} transition-colors`}
              href="#experience"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className={`font-Ovo text-gray-300 ${accentHover} transition-colors`}
              href="#coding"
            >
              Coding Profiles
            </a>
          </li>
          <li>
            <a
              className={`font-Ovo text-gray-300 ${accentHover} transition-colors`}
              href="#contact"
            >
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-6 py-2 border-none rounded-full ml-4 font-Ovo text-white 
                        bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] 
                        shadow-lg hover:scale-[1.05] transition-transform duration-300"
          >
            Connect{" "}
            <Image
              src={assets.arrow_icon}
              alt="arrow icon"
              className="w-3 invert"
            />{" "}
          </a>

          <button className="block md:hidden ml-3">
            <Image
              onClick={openMenu}
              src={assets.menu_black}
              alt="Menu"
              className="w-6 invert"
            />
          </button>
        </div>

        <ul
          ref={sideMenuRef}
          className="flex flex-col gap-4 py-20 px-10 fixed right-0 top-0 w-64 z-50 h-screen 
                     bg-gray-900 transition-transform duration-500 shadow-xl"
          style={{ transform: "translateX(16rem)" }}
        >
          <div onClick={closeMenu} className="absolute right-6 top-6">
            <Image
              src={assets.close_black}
              alt="Close"
              className="w-5 cursor-pointer invert"
            />
          </div>

          <li>
            <a
              className={`font-Ovo text-gray-200 ${mobileAccentHover} transition-colors`}
              onClick={handleMobileLinkClick}
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={`font-Ovo text-gray-200 ${mobileAccentHover} transition-colors`}
              onClick={handleMobileLinkClick}
              href="#about"
            >
              About me
            </a>
          </li>
          <li>
            <a
              className={`font-Ovo text-gray-200 ${mobileAccentHover} transition-colors`}
              onClick={handleMobileLinkClick}
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className={`font-Ovo text-gray-200 ${mobileAccentHover} transition-colors`}
              onClick={handleMobileLinkClick}
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className={`font-Ovo text-gray-200 ${mobileAccentHover} transition-colors`}
              onClick={handleMobileLinkClick}
              href="#experience"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className={`font-Ovo text-gray-200 ${mobileAccentHover} transition-colors`}
              onClick={handleMobileLinkClick}
              href="#coding"
            >
              Achievements
            </a>
          </li>
          <li>
            <a
              className={`font-Ovo text-gray-200 ${mobileAccentHover} transition-colors`}
              onClick={handleMobileLinkClick}
              href="#contact"
            >
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

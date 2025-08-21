import React from "react";
import { Search, MapPinCheckInside, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div className="fixed w-full top-0 left-0 z-50 bg-white">
      <nav className=" top-0 w-full hidden md:hidden lg:inline-block h-10 overflow-hidden bg-slate-800">
        <div className="marquee-animation flex h-full items-center justify-between whitespace-nowrap px-16">
          <div className="motto-mail flex items-center gap-16 ">
            <div className="flex items-center gap-1 text-gray-300">
              <MapPinCheckInside size={18} className="stroke-yellow-600" />
              <p className="text-sm">Motto: Knowledge is power</p>
            </div>
            <div className="mail flex items-center gap-2">
              <Mail size={18} className="stroke-yellow-600" />
              <p className="text-sm text-gray-300 italic">
                info@greenfieldacademy.com
              </p>
            </div>
          </div>
          <div className="opening-day text-gray-300 text-sm">
            <p>Opening Hours: Monday to saturday- 8am to 6pm</p>
          </div>
        </div>
      </nav>
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full top-0 bg-gradient-to-r from-slate-500 to-sky-950 md:bg-gradient-to-r md:from-white md:to-white flex items-center justify-center px-0 lg:px-20 border-b border-gray-200 lg:justify-between h-24 md:h-32 lg:h-24"
      >
        <div className="brand text-white md:text-gray-950 w-full flex justify-center md:justify-center lg:justify-start gap-2 items-center">
          <img
            className="w-10 h-10 md:h-12 md:w-12 lg:w-9 lg:h-9 "
            src="/assets/graduation-hat.png"
            alt="graduation hat"
          />
          <h1 className="flex relative text-xl md:text-4xl gap-2 lg:text-2xl font-bold ">
            Green{" "}
            <span>
              <img
                className="h-8 w-8 absolute md:mt-1 -ml-3"
                src="/assets/f.png"
                alt="f"
              />
            </span>
            <span className="ml-2">ield</span>
          </h1>
        </div>
        <div className="right-list hidden md:hidden lg:flex gap-10 items-center">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9">
              <img
                className="w-full h-full"
                src="/assets/telephone.png"
                alt="telephone"
              />
            </div>
            <div className="flex whitespace-nowrap flex-col">
              <p className="text-sm  leading-tight tracking-tight m-0 p-0 text-gray-400">
                Need help? Call us now
              </p>
              <p className="text-black font-black">08133044482</p>
            </div>
          </div>
          <button className="w-24 rounded h-10 text-sm hover:bg-orange-200 hover:scale-90 font-medium bg-yellow-400">
            Apply Now
          </button>
        </div>
      </motion.nav>
      <motion.nav
        initial={{ x: -90, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="top-0 last-navbar hidden px-20 md:hidden lg:flex justify-between items-center w-full h-14 border-b-2 border-gray-100"
      >
        <ul className="flex  gap-8 text-base font-medium">
          <li className="cursor-pointer hover:text-yellow-300">Home</li>
          <li className="cursor-pointer hover:text-yellow-300"><a href="#about">About</a></li>
          <li className="cursor-pointer hover:text-yellow-300">Admission</li>
          <li className="cursor-pointer hover:text-yellow-300">Teacher</li>
          <li className="cursor-pointer hover:text-yellow-300">Student</li>
          <li className="cursor-pointer hover:text-yellow-300">Apply</li>
          <li className="cursor-pointer hover:text-yellow-300"><a href="#services">Services</a></li>
          <li className="cursor-pointer hover:text-yellow-300"><a href="#contact">Contact</a></li>
        </ul>
        <Search className="cursor-pointer" />
      </motion.nav>
    </motion.div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Mail, MapPinCheckInside, Menu, Search } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-screen relative">
      <nav className="w-full hidden md:hidden lg:inline-block h-10 overflow-hidden bg-slate-800">
        <div className="marquee-animation flex h-full items-center justify-between whitespace-nowrap px-16">
          <div className="motto-mail flex items-center gap-16 ">
            <div className="flex items-center gap-1 text-gray-300">
              <MapPinCheckInside size={18} className="stroke-yellow-600" />
              <p className="text-sm">Motto: Knowledge is power</p>
            </div>
            <div className="mail flex items-center gap-2">
              <Mail size={18} className="stroke-yellow-600" />
              <p className="text-sm text-gray-300 italic">info@greenfieldacademy.com</p>
            </div>
          </div>
          <div className="opening-day text-gray-300 text-sm">
            <p>Opening Hours: Monday to saturday- 8am to 6pm</p>
          </div>
        </div>
      </nav>
      <nav className="w-full flex items-center justify-center px-0  lg:px-20 border-b border-gray-200 lg:justify-between h-24 md:h-32 lg:h-24">
        <div className="brand w-full flex justify-center md:justify-center lg:justify-start gap-2 items-center">
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
      </nav>
      <nav className="last-navbar hidden px-20 md:hidden lg:flex justify-between items-center w-full h-14 border-b-2 border-gray-100">
        <ul className="flex  gap-8 text-base font-medium">
          <li className="cursor-pointer hover:text-yellow-300">Home</li>
          <li className="cursor-pointer hover:text-yellow-300">About</li>
          <li className="cursor-pointer hover:text-yellow-300">Admission</li>
          <li className="cursor-pointer hover:text-yellow-300">Apply</li>
          <li className="cursor-pointer hover:text-yellow-300">News</li>
          <li className="cursor-pointer hover:text-yellow-300">Events</li>
          <li className="cursor-pointer hover:text-yellow-300">Contact</li>
        </ul>
        <Search className="cursor-pointer"/>
      </nav>
      <div className="flex justify-between md:flex mb-2 lg:hidden p-4 items-center">
        <Menu onClick={() => {
          console.log('Opening menu...')
          setIsOpen(true)
        }}  className=" h-7 w-7 md:h-12 md:w-12" />
        <Search className="w-7 h-7 md:h-12 md:w-12 "/>
        
      </div>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
      <main className="w-full h-[70vh] m-0 p-0">
        <div
          className="w-full h-full bg-cover m- bg-center bg-no-repeat flex items-center justify-center"
          style={{ backgroundImage: "url('/assets/class.jpg')" }}
        >
          <div className="bg-black opacity-50 text-white p-8 flex flex-col items-center justify-center text-center w-full h-full">
            <h1 className="flex whitespace-break-spaces lg:whitespace-nowrap text-2xl md:text-4xl lg:text-4xl font-bold mb-4">
              Welcome to Greenfield Academy
            </h1>
            <p className="flex text-lg font-normal whitespace-nowrap md:text-2xl lg:text-2xl lg:font-medium">
              Empowering minds, shaping futures
            </p>
            <button className="bg-green-400 w-30 h-12 text-base md:text-3xl hover:bg-amber-200 md:w-48 md:h-16 lg:h-12 lg:w-36 mt-6 rounded lg:text-xl">Get Started</button>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default LandingPage;

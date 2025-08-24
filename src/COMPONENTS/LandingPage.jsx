import React, { useState } from "react";
import { Menu, Search } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import About from "./About";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Services from "./Services";
import Testimony from "./Testimony";
import Contact from "./Contact";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Events from "./Events";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };
  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className="w-full min-h-screen relative">
      <Navbar />
      <motion.div
        initial={{ x: -90, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex fixed w-full justify-between top-24 mb-2 z-50 bg-white  text-black lg:hidden p-4 items-center"
      >
        <Menu
          onClick={() => {
            console.log("Opening menu...");
            setIsOpen(true);
          }}
          className=" h-7 w-7 md:h-12 md:w-12"
        />
        <Search className="w-7 h-7 md:h-12 md:w-12 " />
      </motion.div>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <motion.main
        variants={variant}
        initial="hidden"
        animate="visible"
        className="w-full h-[100vh] m-0 pt-24 lg:pt-48"
      >
        <motion.div
          className="w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{ backgroundImage: "url('/assets/class.jpg')" }}
        >
          <motion.div className="bg-black opacity-60 text-white p-8 flex flex-col items-center justify-center text-center w-full h-full">
            <motion.h1
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex whitespace-break-spaces lg:whitespace-nowrap text-2xl md:text-4xl lg:text-4xl font-bold mb-4"
            >
              Welcome to Greenfield Academy
            </motion.h1>
            <div className="school-brand flex text-lg font-normal whitespace-pre md:text-2xl lg:text-2xl lg:font-medium">
              {"Empowering minds, shaping futures".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={itemVariants}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            <button className="bg-slate-700 w-30 h-12 text-base md:text-3xl hover:bg-amber-200 md:w-48 md:h-16 lg:h-12 lg:w-36 mt-6 rounded lg:text-xl">
              Get Started
            </button>
          </motion.div>
        </motion.div>
      </motion.main>
      <About />
      <Gallery />
      <Events />
      <Services />
      <Testimony />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;

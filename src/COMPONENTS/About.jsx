import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { NotebookPen } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, rootMargin: "-100px" });
  return (
    <motion.section
      id="about"
      className="w-full h-full bg-[#1C6EA4] lg:bg-gray-50 lg:block py-10"
      ref={ref}
      initial={{ opacity: 0, y: 90, scale: 0.95, filter: "blur(4px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.6}}
    >
      <div
        className="lg:w-full mx-auto lg:mx-0 rounded-2xl shadow-2xl lg:rounded-none py-9 lg:py-0 w-[90%] lg:bg-gray-50 bg-white  place-items-center px-6 grid grid-cols-1 items-center">
        <div className="flex flex-col gap-4 items-center  place-items-center">
          <NotebookPen className="h-6 w-6 hidden lg:block md:h-10 md:w-10" />
          <img className="w-48 h-48 lg:hidden" src="/assets/about-school.jpg" alt="school compound" />
          <h1 className="text-xl font-medium md:text-3xl ">About Us</h1>
  
        </div>
        <div className="flex flex-col place-items-center  text-base justify-center px-6 md:px-72 text-center mb-4 py-7">
            <p className="text-gray-600 leading-tight mb-4">
              Greenfield Academy is committed to nuturing academic exellence,
              character development, and a love for learning. With modern
              facilities and dedicated teachers, we provide a safe and inpiring
              environment for every student.
            </p>
            <p className="text-gray-600 mb-4">
              Since our founding in 2005, we've helped thousands of students to
              achieve their dreams through innovative teaching and community
              engagement.
            </p>
          </div>
      </div>
    </motion.section>
  );
};

export default About;

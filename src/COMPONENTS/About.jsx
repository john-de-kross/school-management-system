import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { NotebookPen } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, rootMargin: "-100px" });
  return (
    <motion.section
      className="w-full h-auto bg-gray-50 py-10"
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full place-items-center px-6 grid grid-cols-1 items-center">
        <div className="flex flex-col gap-4 items-center  place-items-center">
          <NotebookPen className="h-6 w-6 md:h-10 md:w-10" />
          <h1 className="text-xl font-medium md:text-3xl">About Us</h1>
        </div>
        <div className="flex flex-col place-items-center text-base justify-center px-10 md:px-72 text-center mb-4 py-7">
            <p className="text-gray-600 mb-4">
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

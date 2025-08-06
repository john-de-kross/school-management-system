import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export const MobileMenu = ({ isOpen, setIsOpen }) => {
  const navVariants = {
    hidden: {
      opacity: 0,
      x: '100%',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        transition: "easeOut",
        duration: 0.4,
        staggerChildren: 0.1,
      },
    },

    exit: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.4,
      },
    },
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          className="absolute top-25 w-60 bg-white z-50 left-0 shadow p-4 space-y-4"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={navVariants}
        >
          {[
            "Home",
            "About",
            "Admission",
            "Apply",
            "News",
            "Events",
            "Contact",
          ].map((item, index) => (
            <motion.li
              key={index}
              className="text-base font-medium"
              variants={navVariants}
            >
              {item}
            </motion.li>
          ))}
          <X
            className="absolute top-2 right-0"
            onClick={() => setIsOpen(false)}
          />
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BarChartHorizontal,
  ClipboardPen,
  Coins,
  FolderEdit,
  Landmark,
  Users,
} from "lucide-react";

const Services = () => {
  const inViewRef = useRef(null);
  const userInView = useInView(inViewRef, { once: true, rootMargin: "-100px" });

  return (
    <motion.section
      id="services"
      ref={inViewRef}
      initial={{ scale: 0, opacity: 0 }}
      animate={userInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full hidden lg:block h-auto bg-white py-7"
    >
      <div className="w-full h-full grid grid-cols-3 gap-9 space-y-9 px-12">
        
        <div className="flex student-enrolment flex-col gap-2 px-6">
          <Landmark className="w-7 h-7" />
          <h1 className="text-xl font-medium">Classroom Management</h1>
          <p className="leading-loose text-base font-light">
            The student grading system provides a structured and transparent way
            to assess academic performance. It enables teachers to input grades,
            calculate averages, and generate comprehensive reports with ease.
          </p>
        </div>
        <div className="flex student-enrolment flex-col gap-2 px-6">
          <Users className="w-7 h-7" />
          <h1 className="text-xl font-medium">Parent Forum</h1>
          <p className="leading-loose text-base font-light">
            The student grading system provides a structured and transparent way
            to assess academic performance. It enables teachers to input grades,
            calculate averages, and generate comprehensive reports with ease.
          </p>
        </div>
        <div className="flex student-enrolment flex-col gap-2 px-6">
          <Coins className="w-7 h-7" />
          <h1 className="text-xl font-medium">School bill/fee Management</h1>
          <p className="leading-loose text-base font-light">
            The student grading system provides a structured and transparent way
            to assess academic performance. It enables teachers to input grades,
            calculate averages, and generate comprehensive reports with ease.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;

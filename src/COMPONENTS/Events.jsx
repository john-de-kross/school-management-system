import { CalendarDays } from "lucide-react";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Events = () => {
  const events = [
    {
      title: "Resumption Date",
      info: "School resumes on the 12 September 2025. All activities start the same day.",
    },

    {
      title: "Admission",
      info: "All the newly admitted students are expected to come with their passports, ID card and evidence of payment.",
    },

    {
      title: "Seminar",
      info: "There will be seminar on the 20th of september, all staff members and students are expected to be on their outing uniform. Attendence is compulsory",
    },
  ];
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  return (
      <section ref={ref} className="w-full bg-[#239BA7] md:bg-stone-400 py-8">
          <div className="flex justify-center gap-3 text-white items-center">
          <img className="w-7 h-7" src="/assets/calendar.png" alt="calender" />
          <span className="text-xl font-medium md:text-2xl">Upcoming Events</span>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        
        {events.map((event, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 60 }}
            animate={isInview ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
            key={index}
            className="card-event flex flex-col place-items-center items-center 
                text-center rounded-lg shadow-amber-50 mt-8 bg-white w-[80%] h-auto"
          >
            <h2 className="text-lg font-medium py-1">{event.title}</h2>
            <p className="text-gray-800 font-serif p-2">{event.info}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Events;

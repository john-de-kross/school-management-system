import { CalendarDays } from "lucide-react";
import React from "react";

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

const Events = () => {
  return (
    <section className="w-full md:hidden bg-[#239BA7] py-8">
      <div className="flex flex-col place-items-center">
        <div className="flex justify-center gap-3 text-white items-center">
          <img className="w-7 h-7" src="/assets/calendar.png" alt="calender" />
          <span className="text-xl font-medium">Upcoming Events</span>
        </div>
        {events.map((event, index) => (
          <div key={index} className="card-event flex flex-col place-items-center items-center text-center rounded-lg shadow-amber-50 mt-8 bg-white w-[80%] h-auto">
                <h2 className="text-lg font-medium py-1">{event.title}</h2>
                <p className="text-gray-800 font-serif p-2">
                    {event.info}
                </p>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;

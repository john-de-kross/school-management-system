import { Signal } from "lucide-react";
import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-white pt-4 md:pt-9"
    >
      <div className="get-in-touch w-full flex flex-col place-items-center gap-5">
        <Signal />
        <h2 className=" text-lg md:text-3xl lg:text-2xl mb-4 font-bold">
          Get in <span className="text-blue-500">Touch</span>
        </h2>
      </div>
      <div className="address-mail w-full grid grid-col lg:grid-cols-[40%_60%] py-3 px-7 lg:place-items-start md:py-9 lg:px-20 mt-2">
        <div className="address hidden md:flex flex-col place-items-start w-[100%]">
          <div className="customer-care flex flex-col gap-1">
            <p className="text-base lg:text-lg font-medium text-gray-800">Admin Contacts:</p>
            <p className="text-sm leading-loose font-light">
              +234 8068620634
            </p>
            <p className="text-sm leading-loose font-light">
              +234 8133044482
            </p>
            <p className="text-sm hidden md:flex leading-loose font-light">
              +234 8059025799
            </p>
          </div>
          <div className="office-address flex flex-col gap-1">
            <p className="test-base md:text-lg font-medium text-gray-800">Address:</p>
            <p className="text-sm leading-loose font-light">
              No.21 Ekenedirichukwu street Nguru
            </p>
            <p className="text-sm leading-loose font-light">
              Aboh-Mbaise, Imo.
            </p>
          </div>
          <div className="email-address flex flex-col gap-1">
            <p className="text-base md:text-lg font-medium text-gray-800">Email Address:</p>
            <p className="text-sm leading-loose font-light">
              Info@greenfieldacademy.com
            </p>
          </div>
          <div className="office-time flex flex-col gap-1">
            <p className="text-base md:text-lg font-medium text-gray-800">Office Time:</p>
            <p className="text-sm leading-loose font-light">
              8:00am To 4:00pm
            </p>
          </div>
        </div>
        <div className=" w-full lg:px-6 px-2">
          <form action="space-x-">
            <div className="flex flex-col md:grid md:grid-cols-2 space-x-5 space-y-5 gap-3">
              <input
                className="w-full text-sm rounded-lg lg:rounded-none md:text-base h-10 md:h-12 border p-2 outline-none border-gray-300"
                type="text"
                placeholder="Your name*"
              />
              <input
                className="w-full text-sm rounded-lg lg:rounded-none md:text-base h-10 md:h-12 border p-2 outline-none border-gray-300"
                type="email"
                placeholder="Your email*"
              />
              <input
                className="w-full text-sm rounded-lg lg:rounded-none md:text-base h-10 md:h-12 border p-2 outline-none border-gray-300"
                type="text"
                placeholder="Your subject.."
              />
              <input
                className="w-full text-sm rounded-lg lg:rounded-none md:text-base h-10 md:h-12 border p-2 outline-none border-gray-300"
                type="text"
                placeholder="Your phone number*"
              />
              <textarea
                className="col-span-2 text-sm md:text-base w-full border min-h-20 md:min-h-24 p-2 outline-none border-gray-300"
                id="text-area"
                placeholder="Your message.."
              ></textarea>
              <button className="bg-slate-700 col-end-2 font-normal text-white md:font-medium h-9 md:hover:bg-orange-300 w-32 md:w-40 md:h-10 rounded shadow">
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

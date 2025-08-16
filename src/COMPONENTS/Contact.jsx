import { Signal } from "lucide-react";
import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full hidden lg:block min-h-screen bg-white pt-9"
    >
      <div className="get-in-touch w-full flex flex-col place-items-center gap-5">
        <Signal />
        <h2 className="text-2xl mb-4 font-bold">
          Get in <span className="text-blue-500">Touch</span>
        </h2>
      </div>
      <div className="address-mail w-full grid grid-cols-[40%_60%] place-items-start py-9 px-20 mt-2">
        <div className="address flex flex-col place-items-start w-[100%]">
          <div className="customer-care flex flex-col gap-1">
            <p className="text-lg font-medium text-gray-800">Customer care:</p>
            <p className="text-base leading-loose font-light">
              +234 8068620634
            </p>
            <p className="text-base leading-loose font-light">
              +234 8133044482
            </p>
            <p className="text-base leading-loose font-light">
              +234 8059025799
            </p>
          </div>
          <div className="office-address flex flex-col gap-1">
            <p className="text-lg font-medium text-gray-800">Office Address:</p>
            <p className="text-base leading-loose font-light">
              No.21 Ekenedirichukwu street Nguru
            </p>
            <p className="text-base leading-loose font-light">
              Aboh-Mbaise, Imo.
            </p>
          </div>
          <div className="email-address flex flex-col gap-1">
            <p className="text-lg font-medium text-gray-800">Email Address:</p>
            <p className="text-base leading-loose font-light">
              Info@greenfieldacademy.com
            </p>
          </div>
          <div className="office-time  flex flex-col gap-1">
            <p className="text-lg font-medium text-gray-800">Office Time:</p>
            <p className="text-base leading-loose font-light">
              8:00am To 4:00pm
            </p>
          </div>
        </div>
        <div className=" w-full px-6 ">
          <form action="space-x-">
            <div className="grid grid-cols-2 space-x-5 space-y-5 gap-3">
              <input
                className="w-full h-12 border p-2 outline-none border-gray-300"
                type="text"
                placeholder="Your name*"
              />
              <input
                className="w-full h-12 border p-2 outline-none border-gray-300"
                type="email"
                placeholder="Your email*"
              />
              <input
                className="w-full h-12 border p-2 outline-none border-gray-300"
                type="text"
                placeholder="Your subject.."
              />
              <input
                className="w-full h-12 border p-2 outline-none border-gray-300"
                type="text"
                placeholder="Your phone number*"
              />
              <textarea
                className="col-span-2 w-full border min-h-24 p-2 outline-none border-gray-300"
                id="text-area"
                placeholder="Your message.."
              ></textarea>
              <button className="bg-slate-700 col-end-2 text-white font-medium w-40 h-10 rounded shadow">
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

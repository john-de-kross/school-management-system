import { ArrowLeft, Bell, MessageSquareMoreIcon, Search, X } from "lucide-react";
import React, { useState } from "react";
import {motion} from 'framer-motion'

const Overview = () => {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <section className="overview w-full p-5 bg-gray-300 md:bg-stone-100">
      <div className="header flex items-center justify-between mb-4">
        <div className="left  w-full  flex items-center justify-between md:justify-start relative gap-4">
          <button className="back-btn w-7 h-7 md:w-8 md:h-8  flex  bg-white rounded-lg items-center justify-center shadow-md">
            <ArrowLeft className="text-gray-600  w-4 h-4 md:w-5 md:h-5" />
          </button>
          <input
            className={`h-9 absolute transition-all duration-300 ${isClicked ? "w-full translate-x-0 md:static px-4  opacity-100": "w-0 translate-x-full opacity-0"} absolute md:opacity-100 md:translate-x-0 md:static ml-0 md:ml-0 md:w-48 md:flex rounded-2xl  md:px-2 outline-none bg-gray-200 md:bg-gray-300`}
            type="text"
            placeholder="Search"
          />
          <button
            onClick={() => setIsClicked(true)}
            className="search-btn w-8 h-9 md:w-9 md:h-9 z-40 bg-purple-950 md:bg-transparent md:absolute md:left-[200px] rounded-xl flex items-center justify-center md:flex-none shadow-md md:shadow-none">
            <Search
              className="w-5 h-5 cursor-pointer text-gray-200 md:text-gray-600 " />
          </button>
          <X onClick={() => setIsClicked(false)} className={`${isClicked ? 'opacity-70 ' : 'opacity-0'} absolute w-5  h-5 md:hidden right-10 `} />
        </div>
        <div className="right hidden md:flex items-center gap-4">
          <button className="notification-btn relative w-9 h-9 cursor-pointer bg-white rounded-full flex items-center justify-center shadow-md">
            <Bell className="text-gray-600 w-7 h-7" />
            <span className="flex justify-center items-center text-sm absolute mb-9 ml-5 w-4 h-4 text-white rounded-full bg-red-500">
              3
            </span>
          </button>
          <button className="w-9 h-9 flex justify-center items-center bg-white rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </button>
          <button className="w-9 h-9 flex justify-center items-center bg-white rounded-full shadow-md">
            <img className="w-7 h-7 rounded-full" src="/assets/learning.jpg" alt="my profile" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Overview;

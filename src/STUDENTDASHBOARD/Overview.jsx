import {
  ArrowLeft,
  Bell,
  CalendarCheck2,
  CalendarDaysIcon,
  ChevronDown,
  Link2,
  MessageSquareMoreIcon,
  Search,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cell, Pie, PieChart } from "recharts";
import Calender from "react-calendar";
import "react-calendar/dist/Calendar.css";

const data = [
  { name: "present", value: 400 },
  { name: "absent", value: 100 },
];

const colors = ["#E1AA36", "#C9CDCF"];

const Overview = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [value, setValue] = useState(new Date());
  return (
    <section className="overview w-full p-5 bg-gray-300 md:bg-stone-100">
      <div className="header flex items-center justify-between mb-9">
        <div className="left  w-full  flex items-center justify-between md:justify-start relative gap-4">
          <div className="flex gap-4 items-center">
            <button className="back-btn w-7 h-7 md:w-8 md:h-8  flex  bg-white rounded-lg items-center justify-center shadow-md">
              <ArrowLeft className="text-gray-600  w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button className="notifications-btn w-7 md:hidden h-7 flex  bg-white rounded-lg items-center justify-center">
              <Bell className="text-gray-500 w-4 h-4" />
            </button>
          </div>
          <input
            className={`h-12 md:h-9 absolute transition-all duration-300 ${
              isClicked
                ? "w-full translate-x-0 md:static px-4  opacity-100"
                : "w-0 translate-x-full opacity-0"
            } absolute md:opacity-100 md:translate-x-0 md:static ml-0 md:ml-0 md:w-48 md:flex rounded-2xl  md:px-2 outline-none bg-gray-200 md:bg-gray-300`}
            type="text"
            placeholder="Search"
          />
          <button
            onClick={() => setIsClicked(true)}
            className="search-btn w-10 h-12 md:w-9 md:h-9 z-40 bg-slate-600 md:bg-transparent md:absolute md:left-[200px] rounded-xl flex items-center justify-center md:flex-none shadow-md md:shadow-none"
          >
            <Search className="w-5 h-5 cursor-pointer text-gray-200 md:text-gray-600 " />
          </button>
          <X
            onClick={() => setIsClicked(false)}
            className={`${
              isClicked ? "opacity-70 " : "opacity-0"
            } absolute w-5  h-5 md:hidden right-14 `}
          />
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
            <img
              className="w-7 h-7 rounded-full"
              src="/assets/learning.jpg"
              alt="my profile"
            />
          </button>
        </div>
      </div>

      <div className="dashboard-info-row-1 flex w-full flex-col md:grid md:grid-cols-[50%_20%_30%]  gap-4 md:gap-6 md:justify-between mb-4">
        <div className="greetings w-full md:max-w-xl bg-white p-4 rounded-lg shadow-md">
          <div className="container w-full flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-">
            <div className="left w-full flex flex-col justify-center items-start gap-0.5">
              <h3 className="text-lg font-serif mb-2">
                Good Morning, John Doe
              </h3>
              <p className="text-gray-600 text-sm font-light">
                Welcome back! 🎉 Great to see you again
              </p>
              <p className="text-gray-600 text-sm font-light">
                Keep pushing towards your goals, every step counts.
              </p>
              <p className="text-gray-600 text-sm font-light"></p>
              <p className="text-gray-600 text-sm font-light">
                Start by reviewing your upcoming classes or checking recent
                update
              </p>
            </div>
            <div className="right w-full flex justify-center items-center ">
              <img
                className="md:w-52 md:h-52 w-36 h-36"
                src="/assets/study.jpg"
                alt="study"
              />
            </div>
          </div>
        </div>
        <div className="attendance-card  max-w-sm md:max-w-md  bg-white shadow-md rounded-lg ">
          <div className="flex flex-col md:flex-row   md:justify-between  p-4 mb-1">
            <h3 className="text-base font-serif">Attendance</h3>
            <Link2 className="hidden md:flex" />
          </div>
          <div className="flex flex-row-reverse justify-end gap-8 md:justify-start md:flex-col px-4">
            <div className="flex flex-col place-items-center justify-center gap-1 md:gap-0 md:justify-evenly md:flex-row ">
              <div className="left flex gap-1 md:gap-2 items-center">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                <span className="text-sm text-gray-900 font-light">
                  Present
                </span>
              </div>
              <div className="left flex gap-1 md:gap-2 items-center">
                <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                <span className="text-sm text-gray-900 font-light">Absent</span>
              </div>
            </div>
            <PieChart className="md:mx-auto mt-4 mb-8" width={100} height={100}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={50}
                fill="gray"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${entry.name}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>

          <div className="md:flex justify-between hidden px-2 mb-2">
            <div className="left bg-gray-200 cursor-pointer rounded-2xl w-24 justify-center h-7 flex gap-1 items-center">
              <CalendarDaysIcon className="w-3 h-3" />
              <p className="text-xs text-gray-950 font-normal">Aug 2025</p>
              <ChevronDown className="ml-1 mt-1 w-3 h-3" />
            </div>
            <div className="right review bg-gray-200 rounded-2xl h-7 w-20">
              <button className="w-full h-full rounded-2xl flex gap-1 justify-center items-center text-xs font-light">
                <CalendarCheck2 className="w-3 h-3" />
                <p className="text-xs font-normal text-gray-950">Review</p>
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-72 w-full bg-white rounded-lg shadow-md">
          <Calender onChange={setValue} value={value} />
        </div>
      </div>
    </section>
  );
};

export default Overview;

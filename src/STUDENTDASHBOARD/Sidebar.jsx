import {
  Book,
  BookIcon,
  BookOpenText,
  ChartNoAxesCombinedIcon,
  CheckCircle,
  ChevronDown,
  CircleAlert,
  GraduationCap,
  LayoutDashboard,
  Menu,
  Settings,
  User,
  X,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import MobileMenu from "./mobileMenu";
import { UseAppContext } from "../COMPONENTS/UseContext";
import { AnimatePresence, motion } from "framer-motion";

const Sidebar = () => {
  const { isOpen, setIsOpen } = UseAppContext();
  return (
    <div>
      <aside className="dashboard hidden w-52 h-screen rounded-lg md:flex gap-4 flex-col shadow-lg bg-white">
        <div className="w-full flex items-center p-4 gap-2">
          <div className="logo w-8 h-8">
            <img
              className="w-full h-full"
              src="/assets/graduation-hat.png"
              alt="graduation hat"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-medium brand">Greenfield</h2>
            <p className="leading-tight text-xs">Scientia est potentia</p>
          </div>
        </div>
        <ul className="flex dashboard flex-col p-4 gap-9 bg-purple-700 text-white">
          <li className="flex w-full gap-3 font-normal">
            <LayoutDashboard className="fill-stone-100 stroke-stone-100" />
            Dashboard
          </li>
        </ul>
        <ul className="items flex flex-col gap-7 leading-tight p-4 dashboards">
          <li className="subject flex gap-2 items-center">
            <Book className="w-5 h-5" />
            Subjects
          </li>
          <li className="flex gap-2 items-center">
            <ChartNoAxesCombinedIcon className="w-5 h-5" />
            Result
          </li>
          <li className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            Assignment
          </li>
          <li className="flex gap-2 items-center">
            <CheckCircle className="w-5 h-5" />
            Attendance
          </li>
          <li className="flex gap-2 items-center">
            <BookOpenText className="w-5 h-5" />
            Resources
          </li>
          <li className="flex gap-2 items-center">
            <User className="w-5 h-5" />
            Profile
          </li>
          <li className="flex gap-2 text-gray-500 items-center">Settings</li>
          <li className="flex gap-6 justify-between w-full text-gray-500 items-center">
            <div className="flex gap-2 items-center">
              <Settings className="w-5 h-5 text-gray-500" />
              Settings
            </div>
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </li>
          <li className="flex gap-2 text-red-500 items-center">
            <CircleAlert className="w-5 h-5 text-red-500" />
            Help & Support
          </li>
        </ul>
      </aside>
      <nav className="onMobile p-6 bg-gradient-to-r from-indigo-600 to-pink-500 via-purple-600 w-full md:hidden">
        <div className="nav-content w-full flex items-center justify-between mb-4">
          <h1 className="flex justify-center text-white text-xl font-medium p-1">
            Student Dashboard
          </h1>
          {isOpen ? (
            <button>
              <X
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 text-white"
              />
            </button>
          ) : (
            <Menu
              onClick={() => setIsOpen(true)}
              className="w-7 h-7 text-white"
            />
          )}
        </div>

        <AnimatePresence>
          <motion.div
            key="menu"
            initial={{height: 0, opacity: 0 }}
            animate={
              isOpen
                ? {height: 'auto', opacity: 1 }
                : {height: 0, opacity: 0 }
            }
            exit={{height: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`w-full overflow-hidden `}
           
          >
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </motion.div>
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Sidebar;

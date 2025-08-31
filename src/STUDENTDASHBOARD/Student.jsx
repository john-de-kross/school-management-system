import React from "react";
import Sidebar from "./Sidebar";
import Overview from "./Overview";

const Student = () => {
  return (
    <div className="student-dashboard w-full h-screen bg-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-[15%_85%]">
        <Sidebar />
        <Overview />
      </div>
    </div>
  );
};

export default Student;

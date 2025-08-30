import React from "react";
import Sidebar from "./Sidebar";


const Student = () => {
    return (
        <div className="student-dashboard w-full h-screen bg-gray-300">
            <div className="w-full grid grid-cols-1 md:grid-cols-[20%_50%_30%]">
                <Sidebar />
                <h1 className="text-2xl text-red-600">hello</h1>
            </div>

        </div>
    )
}

export default Student;

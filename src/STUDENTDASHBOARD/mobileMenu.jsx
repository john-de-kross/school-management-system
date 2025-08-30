import { Menu } from "lucide-react";
import React from "react";

const MobileMenu = ({ isOpen, setIsOpen }) => {

    return (
        <div className="w-full h-auto md:hidden">
            {isOpen && (
                <ul className="w-full h-auto text-white p-1 text-lg mobile-li flex flex-col gap-4">
                    <li>Dashboard</li>
                    <li>Subjects</li>
                    <li>Result</li>
                    <li>Assignment</li>
                    <li>Attendance</li>
                    <li>Message</li>
                    <li>Dashboard</li>
                    <li>Profile</li>
                    <li>Settings</li>
                </ul>
            )}
        </div>
    )
    
}

export default MobileMenu
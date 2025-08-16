import { Facebook, Twitter } from "lucide-react";
import React from "react";


function Footer() {
    return ( 
        <footer className="w-full hidden lg:block mx-auto min-h-80 bg-slate-900">
            <div className=" w-full flex flex-col place-items-center items-center py-20 gap-8">
                <div className="socials flex gap-6">
                    <a href="www.facebook.com" className="h-10 w-10 flex justify-center items-center rounded-full border-2 border-gray-400">
                        <Facebook className="fill-gray-200 stroke-gray-200 h-5 w-5"/>
                    </a>
                    <a href="www.twitter.com" className="h-10 w-10 flex justify-center items-center rounded-full border-2 border-gray-400">
                        <Twitter className="fill-gray-200 stroke-gray-200 h-5 w-5"/>
                    </a>
                </div>
                <div className="conditions flex gap-6">
                    <a
                        className="text-gray-500 hover:text-white text-lg font-sans"
                        href="terms%condition">
                        Terms & Condition
                    </a>

                    <span className="text-gray-500">|</span>

                    <a
                        className="text-gray-500 hover:text-white text-lg font-sans"
                        href="privacy">
                        Privacy
                    </a>
                    <span className="text-gray-500">|</span>
                    <a
                        className="text-gray-500 hover:text-white text-lg font-sans"
                        href="contact">
                        Contact Us
                    </a>

                </div>
                <div className="text-gray-500">
                    <p>
                        2025 © greenfieldacademy. All rights reserved
                    </p>

                </div>

            </div>


        </footer>
     );
}

export default Footer;
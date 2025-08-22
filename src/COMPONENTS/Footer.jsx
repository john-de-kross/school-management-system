import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";


function Footer() {
    return ( 
        <footer className="w-full lg:block mx-auto md:min-h-40 min-h-[55vh] bg-slate-900">
            <div className="mobile-footer-content flex md:hidden flex-col">
                <div className="address text-gray-400 p-2 text-base font-sans">
                    <h1 className="text-lg font-medium mb-1">Address:</h1>
                    <p className="text-base">No.25 Ekenedirichukwu street,</p>
                    <p className="text-base">off Okillton junction</p>
                    <p className="text-base">Zone 1, Imo State.</p>
                </div>
                <div className="address text-gray-400 p-2 text-base font-sans">
                    <h1 className="text-lg font-medium mb-1">Contact admin:</h1>
                    <p className="text-base font-serif">08068620634</p>
                    <p className="text-base font-serif">08133044482</p>   
                </div>
                <div className="socials flex gap-5 justify-center items-center py-2">
                    <a href="www.facebook.com" className="h-7 w-7 flex justify-center items-center rounded-full border-2 border-gray-400">
                        <Facebook className="fill-gray-200 stroke-gray-200 h-5 w-5"/>
                    </a>
                    <a href="www.twitter.com" className="h-7 w-7 flex justify-center items-center rounded-full border-2 border-gray-400">
                        <Twitter className="fill-gray-200 stroke-gray-200 h-5 w-5"/>
                    </a>
                    <a href="www.instagram.com" className="h-7 w-7 flex justify-center items-center rounded-full border-2 border-gray-400">
                        <Instagram className="stroke-gray-200 h-5 w-5"/>
                    </a>
                </div>
                <div className="conditions flex justify-center p-2 gap-2">
                    <a
                        className="text-gray-500 hover:text-white text-base font-sans"
                        href="terms%condition">
                        terms & condition
                    </a>

                    <span className="text-gray-500">|</span>

                    <a
                        className="text-gray-500 hover:text-white text-base font-sans"
                        href="privacy">
                        privacy
                    </a>
                    <span className="text-gray-500">|</span>
                    <a
                        className="text-gray-500 hover:text-white text-base font-sans"
                        href="contact">
                        contact us
                    </a>

                </div>
                <div className="text-gray-500 text-center text-sm">
                    <p>
                        2025 © greenfieldacademy. All rights reserved
                    </p>

                </div>



            </div>
            <div className=" w-full hidden md:flex  md:flex-col place-items-center items-center py-20 gap-8">
                <div className="socials flex gap-6">
                    <a href="www.facebook.com" className="h-10 w-10 flex justify-center items-center rounded-full border-2 border-gray-400">
                        <Facebook className="fill-gray-200 stroke-gray-200 h-5 w-5"/>
                    </a>
                    <a href="www.twitter.com" className="h-10 w-10 flex justify-center items-center rounded-full border-2 border-gray-400">
                        <Twitter className="fill-gray-200 stroke-gray-200 h-5 w-5"/>
                    </a>
                     <a href="www.instagram.com" className="h-10 w-10 flex justify-center items-center rounded-full border-2 border-gray-400">
                        <Instagram className="stroke-gray-200 h-5 w-5"/>
                    </a>
                </div>
                <div className="conditions hidden md:flex gap-6">
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
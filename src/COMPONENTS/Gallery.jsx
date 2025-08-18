import React, { useState } from "react";
import { motion } from "framer-motion";
function Gallery() {
    const gallery = [
        "/assets/student.jfif",
        "/assets/school-children.jpg",
        "/assets/school-lab.png",
        "/assets/computer.png",
        "/assets/sport.jfif",

    ];
    const [selectedImage, setSelectedImg] = useState(null);
    return ( 
        <section className="gallery w-full bg-stone-100 h-auto md:hidden">
            <div className="gallery-content flex flex-col pt-2 place-items-center">
                <h2 className="text-xl font-bold mb-4 text-blue-800">Gallery</h2>

            </div>
            <motion.div className="grid grid-cols-2 gap-4 px-7 place-items-center sm:grid-cols-3">
                {gallery.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Gallery ${index}`}
                        className="aspect-square w-32 h-32 rounded-lg border-[1px] border-amber-400 cursor-pointer hover:opacity-80"
                    />
                ))}

            </motion.div>

        </section>
     );
}

export default Gallery;
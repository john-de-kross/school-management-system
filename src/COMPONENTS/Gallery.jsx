import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Fullscreen, X } from "lucide-react";
function Gallery() {
  const gallery = [
    {
      image: "/assets/school-children.jpg",
      des: "The frontal view of the school premises. The citadel of learnining",
    },

    {
      image: "/assets/computer.png",
      des: "Snippet of one of the computer laboratories of the school",
    },
  ];
  const viewRef = useRef(null);
  const isView = useInView(viewRef, { root: "-100px", once: true });
  const [selectedImage, setSelectedImg] = useState(null);

  const handleNextImage = () => {
    const findViewedImg = gallery.findIndex(img => img.image === selectedImage);
    const nextImg = gallery.length - 1 > findViewedImg ? gallery[findViewedImg + 1]?.image : null
    setSelectedImg(nextImg);
  };
  
  const handlePrevImage = () => {
    const findViewedImg = gallery.findIndex(img => img.image === selectedImage);
    const prevImg = gallery.length > findViewedImg ? gallery[findViewedImg - 1]?.image : null;

    setSelectedImg(prevImg);
  };
  return (
    <section
      className="gallery w-full bg-stone-100 h-auto md:hidden"
      ref={viewRef}
    >
      <div className="gallery-content flex flex-col pt-4 mb-1 place-items-center">
        <h2 className="text-2xl text-gray-950 font-[700] text-shadow-gray-600  mb-4 ">School Gallery</h2>
      </div>
      <motion.div 
  className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-6 place-items-center"
>
  {gallery.map((image, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={isView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      className="w-64"
    >
      <div className="relative group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden cursor-pointer transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
        
        {/* Image */}
        <img
          src={image.image}
          alt={`Gallery ${index + 1}`}
          onClick={() => setSelectedImg(image.image)}
          className="w-full h-64 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay Icon */}
        <Fullscreen
          onClick={() => setSelectedImg(image.image)}
          className="absolute top-56 left-3 w-6 h-6 stroke-white opacity-0 group-hover:opacity-100 transition duration-300 transform hover:scale-125"
        />

        {/* Description */}
        <div className="p-3 text-center">
          <p className="text-gray-700 font-medium">{image.des}</p>
        </div>
      </div>
    </motion.div>
  ))}
</motion.div>

      {selectedImage && (
        <div className="fixed fullscreen w-screen inset-0 bg-black h-screen bg-opacity-90 z-50 flex items-center justify-center">
          <div className="fixed flex justify-center items-center top-2 right-2 w-7 h-7 rounded-full bg-blue-800">
             <X
            onClick={() => setSelectedImg(null)}
            className="text-gray-400 w-5 h-5"
          />
         </div>
          <img
            className="max-h-full object-contain w-full"
            src={selectedImage}
            alt="image"
          />

          <div className=" fixed text-white change-image flex justify-between w-full items-center">
            <ChevronLeft
              onClick={handlePrevImage}
              className="text-white w-7 h-7"
            />
            <ChevronRight onClick={handleNextImage} className="w-9 h-9" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;

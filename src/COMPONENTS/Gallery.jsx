import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Fullscreen } from "lucide-react";
function Gallery() {
  const gallery = [
    "/assets/student.jfif",
    "/assets/school-children.jpg",
    "/assets/school-lab.png",
    "/assets/computer.png",
    "/assets/sport.jfif",
    "/assets/learning.jpg",
  ];
  const viewRef = useRef(null);
  const isView = useInView(viewRef, { root: "-100px", once: true });
  const [selectedImage, setSelectedImg] = useState(null);

  const handleNextImage = () => {
    const viewedImage = selectedImage;
    const findViewedImg = gallery.indexOf(viewedImage);
    const nextImg = gallery[findViewedImg + 1];
    setSelectedImg(nextImg);
    };
    
    const handlePrevImage = () => {
    const viewedImage = selectedImage;
    const findViewedImg = gallery.indexOf(viewedImage);
    const nextImg = gallery[findViewedImg - 1];
    setSelectedImg(nextImg);
  };
  return (
    <section
      className="gallery w-full bg-stone-100 h-auto md:hidden"
      ref={viewRef}
    >
      <div className="gallery-content flex flex-col pt-2 place-items-center">
        <h2 className="text-xl font-bold mb-4 text-blue-800">Gallery</h2>
      </div>
      <motion.div className="grid relative grid-cols-2 gap-4 px-7 place-items-center sm:grid-cols-3">
        {gallery.map((image, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              key={index}
              src={image}
              alt={`Gallery ${index + 1}`}
              onClick={() => setSelectedImg(image)}
              className="aspect-square w-32 h-32 rounded-lg border-[1px] border-amber-400 cursor-pointer hover:opacity-80"
            />
            <Fullscreen
              onClick={() => setSelectedImg(image)}
              className="absolute stroke-white w-5 h-5 ml-2 -mt-6 hover:scale-125"
            />
          </motion.div>
        ))}
      </motion.div>

      {selectedImage && (
        <div className="fixed fullscreen w-screen top-0 left-0 h-screen bg-opacity-80 z-50  flex items-center justify-center">
          <Fullscreen
            onClick={() => setSelectedImg(null)}
            className="text-white top-20 absolute"
          />
          <img
            className="object-cover h-full w-full"
            src={selectedImage}
            alt="image"
          />

          <div className=" fixed text-white change-image flex justify-between w-full items-center">
            <ChevronLeft onClick={handlePrevImage} className="text-white" />
            <ChevronRight onClick={handleNextImage} />
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;

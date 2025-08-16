import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Parent",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "This school has transformed my child's learning experience. The teachers are amazing!",
  },
  {
    id: 2,
    name: "Sarah Lee",
    role: "Student",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "I love how engaging and fun the classes are. I’ve made so many friends here!",
  },
  {
    id: 3,
    name: "Michael Smith",
    role: "Teacher",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "The management system makes my job so much easier. Everything is well-organized.",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gray-50 hidden lg:block py-16" id="testimonials">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-6">What People Say</h2>

        <motion.div
          key={testimonials[index].id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-2xl p-6"
        >
          <img
            src={testimonials[index].image}
            alt={testimonials[index].name}
            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-500"
          />
          <p className="text-gray-600 italic mb-4">
            "{testimonials[index].text}"
          </p>
          <h3 className="font-semibold text-lg">{testimonials[index].name}</h3>
          <span className="text-sm text-gray-500">
            {testimonials[index].role}
          </span>
        </motion.div>

        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={prevTestimonial}
            className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            ◀
          </button>
          <button
            onClick={nextTestimonial}
            className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}

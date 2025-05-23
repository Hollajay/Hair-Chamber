import React from 'react'
import { useState } from 'react'
import slide1 from "../assets/sliderbg3.webp"
import slide2 from "../assets/sliderbg2.webp"
import slide3 from "../assets/sliderbg1.webp"


const slides = [
  {
    id: 1,
    image: slide1,
    subTitle: "Affordable Prices",
    title: "Perfect Style in Wigs",
    description: "Bring the freedom of multiple hairstyles and a completely natural look. High-quality & and perfect 0.03mm ultra-thin skin hair systems without side effects Enhance your beauty.",
    buttonText: "View Collections",
    contentPosition: "right",
  },
  {
    id: 2,
    image: slide2,
    subTitle: "Get your Stylish",
    title: "Modern Hair Wigs",
    description: "We are willing to make our customers happy and are ready to support your most bold and creative ideas in hairstyle and hair coloring! Feel free to express yourself through your looks!",
    buttonText: "View Collections",
    contentPosition: "left",
  },
  {
    id: 3,
    image: slide3,
    subTitle: "Beauty is What you Create",
    title: "Versatile Hair Wigs",
    description: "Gorgeous wig that you won't be able to tell isn't your own natural hair. High-quality full lace and frontal lace wigs made of natural human virgin hair, 200% density",
    buttonText: "View Collections",
    contentPosition: "right",
    overlayPosition: "left",
  },
];



export default function Slider() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const isLeft = slide.contentPosition === "left";
  const overlayLeft = slide.overlayPosition === "left";

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img src={slide.image} alt={slide.title} className="absolute top-0 left-0 w-full h-full object-cover z-0"/>
      {/* Optional Overlay */}
      {slide.overlayPosition && (<div className={`absolute top-0 h-full w-1/2 bg-black/40 z-10 ${overlayLeft ? "left-0" : "right-0"}`}/>)}
      <div className={`relative z-20 h-full flex items-center px-6 md:px-20 ${isLeft ? "justify-start" : "justify-end"}`}>
        <div className="text-white max-w-xl space-y-6 text-center">
          <p className="text-3xl md:text-3xl"style={{ fontFamily: "var(--font-additional-family)" }}>{slide.subTitle}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-300">{slide.title}</h1>
          <p className="text-lg">{slide.description}</p>
          <button className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700 transition">
            {slide.buttonText}
          </button>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 transform -translate-y-1/2 z-30 bg-white/80 text-black p-3 rounded-full hover:bg-blue-700"
      >
        {/* ◀ */}
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 z-30 bg-white/80 text-black p-3 rounded-full hover:bg-blue-700"
      >
        {/* ▶ */}
      </button>
    </div>
  );
}
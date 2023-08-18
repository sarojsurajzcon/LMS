import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image1 from "../../assets/1.svg";
import Image2 from "../../assets/2.svg";
import Image3 from "../../assets/3.svg";
import Image4 from "../../assets/4.svg";
import Image5 from "../../assets/5.svg";
import "./ImageCarousel.css";

// Array of images and their captions for the carousel
const images = [
  {
    src: Image1,
    caption: "Letter Creator Suite",
    subCaption: "Generate best-in-class letters in less than a minute",
  },
  {
    src: Image2,
    caption: "Attendance through Facial Recognition",
    subCaption: "Safe touch-less entry to the workplace with greytHR Visage",
  },
  {
    src: Image3,
    caption: "Simplify Communication",
    subCaption: "Communicate to Employees via Feeds, SMS, Email",
  },
  {
    src: Image4,
    caption: "Tasks and Checklists",
    subCaption: "Automate & streamline your daily tasks",
  },
  {
    src: Image5,
    caption: "Anytime, Anywhere Access",
    subCaption: "Employee Self Service at your Fingertips",
  },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Interval to change the current index of the displayed image
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

        // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[currentIndex].src}
            src={images[currentIndex].src}
            alt={images[currentIndex].caption}
            className="carousel-image"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.h4
            key={images[currentIndex].src}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="caption"
          >
            {images[currentIndex].caption}
          </motion.h4>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.p
            key={images[currentIndex].subCaption}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="subcaption"
          >
            {images[currentIndex].subCaption}
          </motion.p>
        </AnimatePresence>
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;

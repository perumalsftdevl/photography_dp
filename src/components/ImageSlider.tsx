"use client";

import { useEffect, useState } from "react";
import styles from "./ImageSlider.module.css";

const images = [
  "https://www.dipakstudios.com/gallery/15847955099a.jpg",
  "https://shaadiwish.com/blog/wp-content/uploads/2020/12/best-wedding-couple-portraits.jpg",
  "https://www.dipakstudios.com/gallery/15847955097a.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.slider}>
      <button className={styles.button} onClick={handlePrev}>
        &#10094;
      </button>
      <div className={styles.imageContainer}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={styles.image}
        />
      </div>
      <button className={styles.button} onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;

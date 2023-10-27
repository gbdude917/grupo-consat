"use client";

import React, { useState, useEffect } from "react";
import classes from "./ImageCarousel.module.css";

const images = [
  "/images/Carousel1.jpeg",
  "/images/Carousel2.jpeg",
  "/images/Carousel3.jpeg",
  "/images/Carousel4.png",
];

const headers = [
  "CON MÁS DE 25 AÑOS DE EXPERIENCIA",
  "BRINDAMOS SE​RVICIOS EN ÁREAS DE",
  "BRINDAMOS SERVICIOS EN ÁREAS DE",
  "",
];

const captions = [
  "En el ramo de la construcción y servicios de consultoría en ingeniería civil",
  "Geotecnia, Control de calidad, Cálculo y dictámenes estructurales",
  "Planes internos de protección civil, Diseño de pavimentos, Director responsable de obra, supervisión y construcción",
  "",
];

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  let interval: NodeJS.Timeout | null = null;

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    if (interval) clearInterval(interval); // Clear the interval when Next is clicked
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    if (interval) clearInterval(interval); // Clear the interval when Next is clicked
  };

  // Change the image every 8 seconds
  useEffect(() => {
    interval = setInterval(handleNextImage, 8000);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <div className={classes["image-carousel"]}>
      <div
        className={classes["image-container"]}
        style={
          {
            backgroundImage: `url(${images[currentImageIndex]})`,
          } as React.CSSProperties
        }
      >
        <button
          className={`${classes["carousel-button"]} ${classes["left-button"]}`}
          onClick={handlePrevImage}
        >
          <div className={classes.leftArrow} />
        </button>
        <div className={classes["image-caption"]}>
          <h2>{headers[currentImageIndex]}</h2>
          <div>{captions[currentImageIndex]}</div>
        </div>
        <button
          className={`${classes["carousel-button"]} ${classes["right-button"]}`}
          onClick={handleNextImage}
        >
          <div className={classes.rightArrow} />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;

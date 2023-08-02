import React, { useState, useEffect } from "react";
import "./SliderHome.scss";
import KA_bearbeitet from '../../Images/KAimMohnspark_bearbeitet.jpg';
import KA_unbearbeitet from '../../Images/KAimMohnspark.jpg';


const ImageSlider = (/* { images, intervalTime } */props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    /* const images = [
        {src:{ KA_bearbeitet }, alt:'image1'},
        {src:{ KA_unbearbeitet }, alt:'image2'},
        {src:{ KA_bearbeitet }, alt:'image3'}
      ]; */
      
    useEffect(() => {
      const sliderInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === props.images.length - 1 ? 0 : prevIndex + 1));
      }, props.intervalTime);
  
      return () => {
        clearInterval(sliderInterval);
      };
    }, [props.images.length, props.intervalTime]);
  
    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? props.images.length - 1 : prevIndex - 1));
    };
  
    const handleNextClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex === props.images.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
      <div className="auto-image-slider">
        <img { ...props.images[currentIndex] } alt={`Slide ${currentIndex + 1}`} />
        <div>
            <button onClick={handlePrevClick}>&lt;&lt;</button>
            <button onClick={handleNextClick}>&gt;&gt;</button>
        </div>
      </div>
    );
  };
  
  export default ImageSlider;
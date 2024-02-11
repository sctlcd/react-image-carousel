import React, { useState }  from 'react';
import './Carousel.css';
import { PiArrowFatLinesRightDuotone, PiArrowFatLinesLeftDuotone  } from "react-icons/pi";

export const Carousel = ({data}) => {
  const initialIndex = 0;
  const [image, setImage] = useState(initialIndex);

  const nextImage = () => {
    setImage(image === data.images.length - 1 ? initialIndex : image + 1);
  };

  const prevImage = () => {
    setImage(image === initialIndex ? data.images.length - 1 : image - 1);
  };

  return (
    <>
    <div className='carousel'>
      <PiArrowFatLinesLeftDuotone 
        className="arrow arrow-left"
        onClick={prevImage}
      />
      {data.images.map((item, idx) => {
        return (
          <img 
            src={item.src} 
            alt={item.alt} 
            key={idx} 
            className={image === idx ? "image" : "image image-hidden"}
          />);
      })}
      <PiArrowFatLinesRightDuotone 
        className="arrow arrow-right"
        onClick={nextImage}
      />
    </div>
    <span className='indexes'>
      {data.images.map((item, idx) => {
        return (
          <button 
            key={idx} 
            onClick={() => setImage(idx)}
            className={image === idx ? "index" : "index index-inactive"}
          />)
      })}
    </span>
    </>
  )
};

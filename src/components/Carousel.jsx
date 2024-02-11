import React, { useState }  from 'react';
import './Carousel.css';
import { PiArrowFatLinesRightDuotone, PiArrowFatLinesLeftDuotone  } from "react-icons/pi";

export const Carousel = ({data}) => {
  const [image, setImage] = useState(0);

  const nextImage = () => {
    setImage(image + 1);
  };

  const prevImage = () => {
    setImage(image - 1);
  };

  return (
    <>
    <div className='carousel'>
      <PiArrowFatLinesLeftDuotone className="arrow arrow-left" onClick={prevImage} />
      {data.images.map((item, idx) => {
        return (
          <img 
            src={item.src} 
            alt={item.alt} 
            key={idx} 
            className={image === idx ? "image" : "image image-hidden"}
          />);
      })}
      <PiArrowFatLinesRightDuotone className="arrow arrow-right" onClick={nextImage} />
    </div>
    <span className='indexes'>
      {data.images.map((item, idx) => {
        return (
          <button 
            key={idx} 
            onClick={null}
            className={image === idx ? "index" : "index index-inactive"}
          />)
      })}
    </span>
    </>
  )
};

import React from 'react';
import './Carousel.css';
import { PiArrowFatLinesRightDuotone, PiArrowFatLinesLeftDuotone  } from "react-icons/pi";

export const Carousel = ({data}) => {
  return (
    <div className='carousel'>
      <PiArrowFatLinesLeftDuotone className="arrow arrow-left" />
      {data.images.map((item, idx) => {
        return (
          <img 
            src={item.src} 
            alt={item.alt} 
            key={idx} 
            className='image' 
          />);
      })}
      <PiArrowFatLinesRightDuotone className="arrow arrow-right" />
    </div>
  )
};

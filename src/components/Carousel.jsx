import React from 'react';

export const Carousel = ({data}) => {
  return (
    <div>{data.images.map((item, idx) => {
      return <img src={item.src} alt={item.alt} key = {idx} />
    })}</div>
  )
};

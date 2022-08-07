import { Carousel } from 'antd';
import React from 'react';
import './index.scss';

const list = [
  'https://res.cloudinary.com/dgeblvtrm/image/upload/v1659807999/DQ%20Store/Banner/Banner1_pg9cox.webp',
  'https://res.cloudinary.com/dgeblvtrm/image/upload/v1659807999/DQ%20Store/Banner/Banner2_vxzawb.webp',
  'https://res.cloudinary.com/dgeblvtrm/image/upload/v1659807999/DQ%20Store/Banner/Banner3_mcvbmc.webp',
  'https://res.cloudinary.com/dgeblvtrm/image/upload/v1659807999/DQ%20Store/Banner/Banner4_khbpuy.webp',
];

function Banner() {
  return (
    <Carousel className="Sale-Off" autoplay>
      {list.map((item, index) => (
        <img className="Sale-Off-img" src={item} key={index} />
      ))}
    </Carousel>
  );
}

export default Banner;

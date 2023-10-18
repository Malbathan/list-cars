import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const BannerCarousel = ({banners}) => {
  console.log(banners)
  return (
    <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={3000} showThumbs={false}>
      <div>
        <img src={banners[1]} alt="Banner 1" />
      </div>
      <div>
        <img src={banners[2]} alt="Banner 2" />
      </div>
      <div>
        <img src={banners[3]} alt="Banner 3" />
      </div>
    </Carousel>
  );
};

export default BannerCarousel;
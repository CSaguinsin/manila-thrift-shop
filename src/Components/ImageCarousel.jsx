import React from 'react';
import Carousel from './Carousel';

import Sale from '../assets/grahphic designs/sale.png';
import sale2 from '../assets/grahphic designs/sale2.png';
import sale3 from '../assets/grahphic designs/sale3.png';
import sale4 from '../assets/grahphic designs/sale4.png';

const slides = [Sale, sale2, sale3, sale4];

const ImageCarousel = () => {
  return (
    <div>
      <div className="relative">
        <div className="w-full carousel-container">
          <Carousel slides={slides} />
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;

import React from 'react';
import {useState} from 'react';
import Logo from '../assets/logo/logo.png';
import displayimg from "../assets/assets/streetware 6.jpg";
import displayimg2 from  "../assets/assets/streetware 3.jpg";
import displayimg3 from "../assets/assets/streetware 5.jpg";
import Tshirts from './Tshirts';
import Pants from './Pants';
import ImageCarousel from './ImageCarousel';


const Home = () => {
  return (
    <>
      {/* Logo only section */}
      <section>
        <img className='Logo' src={Logo} alt="Logo" />
      </section>
      {/* end  */}

      {/* first section */}
      <div className='container'>
        <img className='image1' src={displayimg} alt='models' />
        <img className='image2' src={displayimg2} alt='models' />
        <img className='image3' src={displayimg3} alt='models' />
      </div>
      {/* end */}
      <Tshirts />
      <Pants />
      <ImageCarousel />
    </>
  );
};





  export default Home;


import React, { useState, useEffect } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Css/Tshirts.css';




// t shirts import
import product1 from '../assets/products/tshirts/product1.jpg';
import product2 from '../assets/products/tshirts/product2.png';
import product3 from '../assets/products/tshirts/product3.png';
import product4 from '../assets/products/tshirts/product4.png';
import product5 from '../assets/products/tshirts/product5.png';
import product6 from '../assets/products/tshirts/product6.png';
import product7 from '../assets/products/tshirts/product7.png';
import product8 from '../assets/products/tshirts/product8.png';
import product9 from '../assets/products/tshirts/product9.png';
import product10 from '../assets/products/tshirts/product10.png';
import RenderPaymentOnClick from './Payment Components/RenderPaymentOnClick';
// emd of t shirt import

const Tshirts = () => {
  useEffect(() => {
    AOS.init();
  }, []);

    const products = [
      {
        id: 1,
        name: 'CUT OUT TEE PINK & PURPLE COMBINATION',
        href: '#',
        price: '₱646.00',
        imageSrc: product1,
        imageAlt: 'cut out tee pink'
      },
      {
        id: 2,
        name: 'SHIFT OVERSIZE T-SHIRT BUY 2 GET 2 FOR FREE',
        href: '#',
        price: '₱359.99',
        imageSrc: product2,
        imageAlt: 'shift oversize tshirt'
      },
      {
        id: 3,
        name: 'CAMOU EASY SHIRT XX-L GREEN',
        href: '#',
        price: '₱500.00',
        imageSrc: product3,
        imageAlt: 'camou easy shirt'
      },
      {
        id: 4,
        name: 'INTUITION T-SHIRT 2002 EDITION',
        href: '#',
        price: '₱500.00',
        imageSrc: product4,
        imageAlt: 'camou easy shirt'
      },
      {
        id: 5,
        name: 'ESSENTIAL GRAPHIC T',
        href: '#',
        price: '₱800.00',
        imageSrc: product5,
        imageAlt: 'esse'
      },
      {
        id: 6,
        name: 'OCEAN GATE X-L SHIRT',
        href: '#',
        price: '₱150.00',
        imageSrc: product6,
        imageAlt: 'esse'
      },
      {
        id: 7,
        name: 'STYLES WHITE-SHIRT',
        href: '#',
        price: '₱350.00',
        imageSrc: product7,
        imageAlt: 'esse'
      },
      {
        id: 8,
        name: 'HAUTE BLACK OVERSIZE',
        href: '#',
        price: '₱379.00',
        imageSrc: product8,
        imageAlt: 'esse'
      },
      {
        id: 9,
        name: 'GUNZ N ROZES XXL SHIRT',
        href: '#',
        price: '₱379.00',
        imageSrc: product9,
        imageAlt: 'esse'
      },
      {
        id: 10,
        name: 'ZARA ROSES XL T SHIRT',
        href: '#',
        price: '₱379.00',
        imageSrc: product10,
        imageAlt: 'esse'
      },
      
    ];
    return (
      <>
        <h1 className="header">BEST PRODUCTS</h1>
        <h6 className="tshirt">T-SHIRTS</h6>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
  
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <a key={product.id} href={product.href} className="group" data-aos="fade-up">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                  <RenderPaymentOnClick />
                </a>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Tshirts;
import React from 'react';
import {useState} from 'react';
import Logo from '../assets/logo/logo.png';
import displayimg from "../assets/assets/streetware 6.jpg";
import displayimg2 from  "../assets/assets/streetware 3.jpg";
import displayimg3 from "../assets/assets/streetware 5.jpg";
import Carl_Logo from "../assets/logo/carl logo.png";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import Carousel from './Carousel';
import Collab from "../assets/logo/mnlzara.png";

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
// emd of t shirt import

// cargo pants import
import pants1 from '../assets/products/pants/product1.png';
import pants2 from '../assets/products/pants/product2.png';
import pants3 from '../assets/products/pants/product3.png';
import pants4 from '../assets/products/pants/product4.png';
import pants5 from '../assets/products/pants/product5.png';
import pants6 from '../assets/products/pants/product6.png';
import pants7 from '../assets/products/pants/product7.png';
import pants8 from '../assets/products/pants/product8.png';
// end of cargo pants import

// carousel imports
import Sale from '../assets/grahphic designs/sale.png';

// end 



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
    </>
  );
};


const TSHIRT = () => {
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
    <h1 className='header'>BEST PRODUCTS</h1>
    <h6 className='tshirt'>T-SHIRTS</h6>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                 />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Add to Cart!
                    </span>
              </button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const PANTS = () => {
  const products = [
    {
      id: 1,
      name: 'ADDIDAS CARGO PANTS WOMEN',
      href: '#',
      price: '₱446.00',
      imageSrc: pants1,
      imageAlt: 'cut out tee pink'
    },
    {
      id: 2,
      name: 'ZARA CARGO PANTS MEN',
      href: '#',
      price: '₱359.99',
      imageSrc: pants2,
      imageAlt: 'shift oversize tshirt'
    },
    {
      id: 3,
      name: 'DBTK CARGO PANTS WOMEN',
      href: '#',
      price: '₱500.00',
      imageSrc: pants3,
      imageAlt: 'camou easy shirt'
    },
    {
      id: 4,
      name: 'ZARA CARGO PANTS WOMEN',
      href: '#',
      price: '₱500.00',
      imageSrc: pants4,
      imageAlt: 'camou easy shirt'
    },
    {
      id: 5,
      name: 'ZARA CARGO PANTS KIDS',
      href: '#',
      price: '₱800.00',
      imageSrc: pants5,
      imageAlt: 'esse'
    },
    {
      id: 6,
      name: 'CARGO PANTS KIDS BUY 2 GET 2',
      href: '#',
      price: '₱150.00',
      imageSrc: pants6,
      imageAlt: 'esse'
    },
    {
      id: 7,
      name: 'KID OUTS CARGO PANTS MEN',
      href: '#',
      price: '₱350.00',
      imageSrc: pants7,
      imageAlt: 'esse'
    },
    {
      id: 8,
      name: 'UNIQLO CARGO PANTS WOMEN',
      href: '#',
      price: '₱379.00',
      imageSrc: pants8,
      imageAlt: 'esse'
    }
  ];

  return (
    <>
    <h6 className='tshirt'>CARGO PANTS</h6>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                 />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Add to Cart!
                    </span>
              </button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>

  )
}


const Mnl = () => {
  return (
  <section>
    {/* <img className='Collab' src={Collab} alt="Logo" /> */}
    {/* <h1 className='announcement'>SOMETHING BIG IS COMING THIS <span className='season'>DECEMBER!</span></h1> */}
  </section>
  )
}


const ImageCarousel = () => {
  const slides = [Sale];

  return (
    <div>
      <div className="relative">
        <div className="max-w-2xl carousel-container">
          <Carousel slides={slides} /> 
        </div>
      </div>
    </div>
  );
};


const Footer = () => {
  return (
    <>
        <footer className="footer footer-center p-10 bg-neutral text-primary-content">
        <div>
            <img width="200" fillRule="evenodd" clip-rule="evenodd" className="inline-block fill-current" src={Carl_Logo} />
            <p className="font-bold">
            MANILA THRIFT SHOP. <br/>Providing streetware since '15
            </p> 
            <p>Carl Saguinsin © 2023 - All right reserved</p>
        </div> 
        <div>
            <div className="grid grid-flow-col gap-4">
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
            </div>
        </div>
        </footer>
    </>
  )
}

export default Home;
export { PANTS };
export { TSHIRT };
export {Mnl};
export { Footer };
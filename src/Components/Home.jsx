import React from 'react';
import Logo from '../assets/logo/logo.png';
import displayimg from "../assets/assets/streetware 6.jpg";
import displayimg2 from  "../assets/assets/streetware 3.jpg";
import displayimg3 from "../assets/assets/streetware 5.jpg";

// Products import
import product1 from '../assets/products/tshirts/product1.jpg';
import product2 from '../assets/products/tshirts/product2.jpg';
import product3 from '../assets/products/tshirts/product3.jpg';
import product4 from '../assets/products/tshirts/product4.png';
// emd of products import


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


const Products = () => {
  const products = [
    {
      id: 1,
      name: 'CUT OUT TEE PINK',
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
      name: 'CAMOU EASY SHIRT',
      href: '#',
      price: '₱500.00',
      imageSrc: product3,
      imageAlt: 'camou easy shirt'
    }
  ];
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
export { Products };

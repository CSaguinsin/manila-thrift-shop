import React from 'react'
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

const Pants = () => {
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
        name: 'ZARA CARGO PANTS MEN WHITE',
        href: '#',
        price: '₱359.99',
        imageSrc: pants2,
        imageAlt: 'shift oversize tshirt'
      },
      {
        id: 3,
        name: 'DBTK CARGO PANTS WOMEN BLACK',
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
        name: 'ZARA CARGO PANTS KIDS UNISEX',
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
        name: 'KID OUTS CARGO PANTS MEN MILITARY WORK',
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

export default Pants;
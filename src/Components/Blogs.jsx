import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Css/Blogs.css';
import RenderUmbroOnClick from './Blogs/RenderUmbroOnClick';
import Logo from '../assets/logo/logo.png';
import Classy from '../assets/grahphic designs/blogpost5.jpg';
import Blogpost2 from '../assets/grahphic designs/blogpost2.jpg';
import Blogpost1 from '../assets/grahphic designs/blogpost1.png';
import Blogpost3 from '../assets/grahphic designs/blogpost3.jpg';
import Blogpost4 from '../assets/grahphic designs/blogpost4.jpg';
import Blogpost6 from '../assets/grahphic designs/blogpost6.jpg';
import Blogpost7 from '../assets/grahphic designs/blogpost7.jpg';

const Blogs = () => {
    useEffect(() => {
      AOS.init();
    }, []);
  

  return (
    <>
        <section>
            <img className='Logo' src={Logo} alt="Logo" />
            <h1 className='blogs'>BLOGS</h1>
        </section>

        <section>
        <div className='container'>
                <div className='left-column'>
                    <h1 className='title'>THE <span className='classy'>CLASSY</span>: WHY THRIFTSHOP IS THE BEST</h1>
                    <p>It’s easy to get stuck in a rut, especially in our daily routines.
                        Most days, we feel as though we’re on autopilot. We turn on our devices on impulse, consume content like our lives depended on it, and sleep in the wee hours of the morning. Despite the safety and convenience that routines provide us, don’t we all dream of breaking free?
                        We often think that the biggest changes in our lives have to be big and dramatic, like choosing a different career path, relocating to a different place, or even upending our whole lives. But, in reality, it can be as simple as changing one’s mindset. Saying yes can mean all the difference when we look back at our lives.
                        Sometimes we procrastinate our own dreams. Some think that delaying them means you’re also delaying your failure. But, as cliche as it may sound, our lives are a collection of our experiences—both the good and the bad. It’s important to take the first step. Whether you start small or start slowly, what matters is that you started. Today.</p>
                </div>
                <div className='right-column'>
                    <img className='Classy' src={Classy} alt='first blog' />
                </div>
            </div>
        </section>

        <section>
        <div className='container2' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="image-container" style={{ marginRight: '40px' }}>
                <img className='blogpost' src={Blogpost2} alt='blog' />
                <h3 className='header3'><span className='classy'>UMBRO</span>: ON A MISSION TO PROMOTE THRIFT <br /> CULTURE</h3>
                <RenderUmbroOnClick /> {/* This renders the button and handles the click event */}
         </div>
                <div className="image-container" style={{ marginLeft: '40px' }}>
                    <img className='blogpost' src={Blogpost3} alt='blog' />
                    <h3> <span className='classy'>DJ DUO CODY AND HUDSON </span>: ON CONQUERING <br />SELF-DOUBT</h3>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Click to learn more!
                    </span>
                    </button>
                </div>
                <div className="image-container" style={{ marginLeft: '40px' }}>
                    <img className='blogpost3' src={Blogpost4} alt='blog' />
                    <h3><span className='classy'>STREET WARE URBAN FASHION</span>:<br />  WHY GENZ IS MORE INTO STREETWARE</h3>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Click to learn more!
                    </span>
                    </button>
                </div>
        </div>

            
        <div className='container2' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: '50px' }}>
                <div className="image-container" style={{ marginRight: '40px' }}>
                    <img className='blogpost' src={Blogpost6} alt='blog' />
                    <h3>LEAVING OUR <span className='classy'>COMFORT ZONES</span>: COMFORT ZONE IS <br /> NOT THE BEST PLACE IF YOU WANT TO IMPROVE</h3>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Click to learn more!
                    </span>
                    </button>
                </div>
                <div className="image-container" style={{ marginLeft: '40px' }}>
                    <img className='blogpost' src={Blogpost7} alt='blog' />
                    <h3><span className='classy'>VENEM ON THRIFT SHOPS</span>: WHY VENEM BAND <br /> CHOOSE THRIFT SHOP TO BUY CLOTHES</h3>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Click to learn more!
                    </span>
                    </button>
                </div>
        </div>
        </section>
    </>
  )
}

export default Blogs
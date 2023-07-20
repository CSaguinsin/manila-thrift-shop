import React from 'react'
import Blogpost2 from '../../assets/grahphic designs/blogpost2.jpg';
import Classy from '../../assets/grahphic designs/blogpost5.jpg';
import Logo from '../../assets/logo/logo.png';
import '../Css/Umbro.css';

import Umbro1 from '../../assets/grahphic designs/umbro1.jpg';
import Umbro2 from '../../assets/grahphic designs/umbro2.jpg';
import Umbro3 from '../../assets/grahphic designs/umbro3.jpg';
import Umbro4 from '../../assets/grahphic designs/umbro4.jpg';
import Umbro5 from '../../assets/grahphic designs/umbro5.jpg';
import Umbro6 from '../../assets/grahphic designs/umbro6.jpg';

function Umbro() {
  return (
    <>
        <section>
            <img className='Logo' src={Logo} alt="Logo" />

        </section>

      <section>
        <div className='container'>
                <div className='left-column'>
                    <h1 className='title'><span className='classy'>UMBRO</span>:ON A MISSION TO PROMOTE THRIFT CULTURE</h1>
                    <p>UMBRO is a renowned brand on a mission to promote thrift culture through its sports apparel and gear. With a rich history dating back to 1924, UMBRO has consistently delivered high-quality products that embody the values of sustainability and responsible consumerism. By encouraging customers to invest in durable and timeless pieces, UMBRO aims to reduce wastefulness and contribute to a more environmentally conscious society. Through their commitment to thrift culture, UMBRO continues to inspire athletes and sports enthusiasts to make mindful choices in their purchasing habits, fostering a positive impact on both the sporting world and the environment.</p>
                </div>
                <div className='right-column'>
                    <img className='Classy' src={Blogpost2} alt='first blog' />
                </div>
            </div>
      </section>

      <section>
        <div class='image-container'>
          <img class='Umbro' src={Umbro1} alt='umbro' />
          <img class='Umbro' src={Umbro2} alt='umbro' />
          <img class='Umbro' src={Umbro3} alt='umbro' />
        </div>
    </section>

      <section>
        <div class='image-container'>
            <img className='Umbro' src={Umbro4} alt='umbro' />
            <img className='Umbro' src={Umbro5} alt='umbro' />
            <img className='Umbro' src={Umbro6} alt='umbro' />
        </div>
      </section>

    </>
  )
}

export default Umbro
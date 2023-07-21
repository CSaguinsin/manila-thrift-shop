import React from 'react'
import Logo from '../../assets/logo/logo.png';
import Blogpost7 from '../../assets/grahphic designs/blogpost7.jpg';
import '../Css/Umbro.css';

import Venem1 from '../../assets/grahphic designs/venem1.jpg';
import Venem2 from '../../assets/grahphic designs/venem2.jpg';
import Venem3 from '../../assets/grahphic designs/venem3.jpg';
import Venem4 from '../../assets/grahphic designs/venem4.jpg';
import Venem5 from '../../assets/grahphic designs/venem5.jpg';
import Venem6 from '../../assets/grahphic designs/venem6.jpg';


function Venem() {
  return (
    <>
        <section>
             <img className='Logo' src={Logo} alt="Logo" />
        </section>  

        <section>
            <div className='container'>
                <div className='left-column'>
                    <h1 className='title'><span className='classy'>VENEM ON THRIFT SHOPS</span>: WHY VENEM BAND CHOOSE THRIFT SHOP TO BUY CLOTHES</h1>
                    <p>Venem, the band, has found a unique and intriguing connection to thrift shops when it comes to their choice of buying clothes. Embracing the concept of sustainability and individuality, thrift shops offer an array of vintage and one-of-a-kind clothing pieces that align perfectly with Venem's artistic vision. By opting for thrift shops, the band not only reduces their environmental impact but also supports local communities and charitable causes. Moreover, these eclectic fashion finds from thrift shops allow Venem to craft distinctive stage personas that set them apart and enhance their stage presence, creating a captivating and authentic experience for their audience. In choosing thrift shops, Venem demonstrates their commitment to both creativity and conscious consumerism, making a meaningful statement beyond the realm of music.</p>
                </div>
                <div className='right-column'> 
                    <img className='Classy' src={Blogpost7} />
                </div>
            </div>
        </section>

        <section>
                <div class='image-containers'>
                    <img className='Umbro' src={Venem1} />
                    <img className='Umbro' src={Venem2} />
                    <img className='Umbro' src={Venem3} />
               </div>
        </section>

        <section>
                <div class='image-containers'>
                    <img className='Umbro' src={Venem4} />
                    <img className='Umbro' src={Venem5} />
                    <img className='Umbro' src={Venem6} />
               </div>
        </section>
    </>
  )
}

export default Venem
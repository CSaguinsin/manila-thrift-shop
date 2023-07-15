import React from 'react'
import Logo from '../assets/logo/logo.png';
import Order from '../assets/grahphic designs/HOW TO ORDER.png';
import './Css/Orderpage.css';

function Orderpage () {
  return (
    <>
     {/* Logo only section */}
      <section>
        <img className='Logo' src={Logo} alt="Logo" />
      </section>
     {/* end  */}

     {/* how to order graphic */}
     <section>
        <img className='Order' src={Order} alt='howtorder' />
     </section>
     {/* End */}

    </>
  );
};

export default Orderpage;
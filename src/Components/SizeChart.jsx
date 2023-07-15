import React from 'react'
import Regsize from "../assets/size chart/regular size chart.png";
import Largesize from "../assets/size chart/over size chart.png";
import Womencargo from "../assets/size chart/women cargopants chart.png";
import Mencargo from "../assets/size chart/men cargopants chart.png";
import Logo from '../assets/logo/logo.png';
import './Css/Sizechart.css';

function SizeChart() {
  return (
    <>
    {/* Logo only section */}
    <section>
        <img className='Logo' src={Logo} alt="Logo" />
    </section>
    {/* end  */}


    {/* Tshirt section */}
        <h1 className='Header'>T-SHIRT SIZE CHART</h1>
            <h6 className='header6'>Regular Size Chart</h6>
                <img className='Chart' src={Regsize} alt='Regular size' />
            <h6 className='header6'>Oversized Chart</h6>
                <img className='Chart'  src={Largesize} alt='Large Size' />
    {/* end  */}
    
    
    {/* Pants section */}
        <h1 className='Header'>PANTS SIZE CHART</h1>
            <h6 className='header6'>Women Cargo pants size chart</h6>
                <img className='Chart' src={Womencargo} alt='women cargo' />
            <h6 className='header6'>Men Cargo pants size chart</h6>
                <img className='Chart' src={Mencargo} alt='men cargo' />
    {/* end */}
    
    </>
  )
}

export default SizeChart
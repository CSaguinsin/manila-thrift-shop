import React from 'react'
import '../Css/Umbro.css';
import Logo from '../../assets/logo/logo.png';
import Blogpost4 from '../../assets/grahphic designs/blogpost4.jpg';


import Urban1 from '../../assets/grahphic designs/urban1.jpg';
import Urban2 from '../../assets/grahphic designs/urban2.jpg';
import Urban3 from '../../assets/grahphic designs/urban3.jpg';
import Urban4 from '../../assets/grahphic designs/urban4.jpg';
import Urban5 from '../../assets/grahphic designs/urban5.jpg';
import Urban6 from '../../assets/grahphic designs/urban6.jpg';


function UrbanFashion() {
  return (
    <>
        <section>
             <img className='Logo' src={Logo} alt="Logo" />
        </section>

        <section>
                <div className='container'>
                    <div className='left-column'>
                        <h1 className='title'><span className='classy'>STREET WARE URBAN FASHION</span>: WHY GENZ IS MORE INTO STREETWARE</h1>
                        <p>Streetwear urban fashion has become a dominant trend among Gen Z for several reasons. Firstly, it offers a unique blend of comfort and style, allowing young people to express themselves authentically while staying true to their individuality. Secondly, streetwear often embraces a more inclusive and diverse representation, resonating with Gen Z's values of equality and social consciousness. Thirdly, the influence of social media and celebrity culture has played a significant role in popularizing streetwear, with influencers and artists sporting these fashion trends on various platforms. Additionally, the rise of sustainable and ethical streetwear brands has attracted Gen Z, who prioritize eco-friendly and socially responsible fashion choices. Lastly, the streetwear aesthetic aligns with the fast-paced, digital era, making it a seamless fit for the tech-savvy and visually-oriented Gen Z demographic.</p>
                    </div>

                    <div className='right-column'>
                        <img className='Classy' src={Blogpost4} />
                    </div>
                </div>
        </section>

        <section>
            <div class='image-containers'>
                <img className='Umbro' src={Urban1} />
                <img className='Umbro' src={Urban2} />
                <img className='Umbro' src={Urban3} />
            </div>

            <div class='image-containers'>
                <img className='Umbro' src={Urban4} />
                <img className='Umbro' src={Urban5} />
                <img className='Umbro' src={Urban6} />
            </div>

        </section>
    </>
  )
}

export default UrbanFashion
import React from 'react';
import Logo from '../../assets/logo/logo.png';
import Blogpost3 from '../../assets/grahphic designs/blogpost3.jpg';
import '../Css/Umbro.css';

import DjDuo1 from "../../assets/grahphic designs/djduo1.jpg";
import DjDuo2 from '../../assets/grahphic designs/djduo2.jpg';
import DjDuo3 from '../../assets/grahphic designs/djduo3.jpg';
import DjDuo4 from '../../assets/grahphic designs/djduo4.jpg';
import DjDuo5 from '../../assets/grahphic designs/djduo5.jpg';
import DjDuo6 from '../../assets/grahphic designs/djduo6.jpg';


function DjDuo() {
  return (
    <>   
        <section>
             <img className='Logo' src={Logo} alt="Logo" />
        </section>

        <section>
                <div className='container'>
                    <div className='left-column'>
                        <h1 className='title'><span className='classy'>DJ DUO CODY AND HUDSON</span>: ON CONQUERING SELF-DOUBT</h1>
                        <p>DJ duo Cody and Hudson have embarked on a remarkable journey of conquering self-doubt through their music. With an electrifying blend of beats and melodies, they strive to inspire their listeners to overcome their own insecurities. Through their performances, they showcase the power of music in boosting confidence and breaking barriers. As role models in the industry, they encourage aspiring artists to embrace their uniqueness and unleash their true potential fearlessly. Cody and Hudson's story serves as a testament to the transformative impact of self-belief in achieving extraordinary success.</p>
                    </div>
                    <div className='right-column'> 
                        <img className='Classy' src={Blogpost3} />
                    </div>
                </div>
        </section>

        <section>
          <div class='image-containers'>
               <img className='Umbro' src={DjDuo1} about='DjDuo' />
               <img className='Umbro' src={DjDuo2} about='DjDuo' />
               <img className='Umbro' src={DjDuo3} about='DjDuo' />
          </div>

          <div class='image-containers'>
               <img className='Umbro' src={DjDuo4} about='DjDuo' />
               <img className='Umbro' src={DjDuo5} about='DjDuo' />
               <img className='Umbro' src={DjDuo6} about='DjDuo' />
          </div>
        </section>
    </>


  );
}

export default DjDuo;

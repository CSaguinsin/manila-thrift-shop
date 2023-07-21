import React from 'react'
import Logo from '../../assets/logo/logo.png';
import '../Css/Umbro.css';
import Blogpost6 from '../../assets/grahphic designs/blogpost6.jpg';


import Comfort1 from '../../assets/grahphic designs/comfort1.jpg';
import Comfort2 from '../../assets/grahphic designs/comfort2.jpg';
import Comfort3 from '../../assets/grahphic designs/comfort3.jpg';
import Comfort4 from '../../assets/grahphic designs/comfort4.jpg';
import Comfort5 from '../../assets/grahphic designs/comfort5.jpg';
import Comfort6 from '../../assets/grahphic designs/comfort6.jpg';

function ComfortZone() {
  return (
    <>
        <section>
             <img className='Logo' src={Logo} alt="Logo" />
        </section>   

        <section>
                <div className='container'>
                    <div className='left-column'>
                        <h1 className='title'>LEAVING OUR <span className='classy'>COMFORT ZONES</span>: COMFORT ZONE IS <br /> NOT THE BEST PLACE IF YOU WANT TO IMPROVE</h1>
                        <p>Stepping out of our comfort zones is a vital catalyst for personal growth and improvement. Remaining within the confines of our comfort zone may offer a sense of security, but it also limits our potential to evolve and develop new skills. True progress and self-discovery come when we embrace uncertainty and challenge ourselves to explore uncharted territories. By leaving our comfort zones, we open ourselves up to fresh perspectives, new opportunities, and the chance to overcome fears that may have held us back. Embracing discomfort fosters resilience and empowers us to reach heights we once deemed unattainable.</p>
                    </div>
                    <div className='right-column'> 
                        <img className='Classy' src={Blogpost6} />
                    </div>
                </div>
        </section> 

        <section>
                <div class='image-containers'>
                    <img className='Umbro' src={Comfort1} />
                    <img className='Umbro' src={Comfort2} />
                    <img className='Umbro' src={Comfort3} />
                </div>
        </section>

        <section>
                <div class='image-containers'>
                    <img className='Umbro' src={Comfort4} />
                    <img className='Umbro' src={Comfort5} />
                    <img className='Umbro' src={Comfort6} />
                </div>
        </section>
    </>
  )
}

export default ComfortZone
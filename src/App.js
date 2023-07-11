import './App.css';


import carousel1 from '../src/assets/grahphic designs/carousel1.jpg'
import carousel2 from '../src/assets/grahphic designs/carousel2.jpg'
import carousel3 from '../src/assets/grahphic designs/carousel3.jpg'


// Components
import Navbar from './Components/Navbar';
import Home, { TSHIRT, PANTS, Mnl, Footer } from './Components/Home';

import Carousel from './Components/Carousel';

const App = () => {
  const slides = [carousel1, carousel2, carousel3];

  return (
    <>
      <Navbar />
      <Home />
      <TSHIRT />
      <PANTS />
      <Mnl />
      <Carousel slides={slides} />
      <Footer />
    </>
  );
};

export default App;
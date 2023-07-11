import './App.css';


import Sale from '../src/assets/grahphic designs/sale.png';
import sale2 from '../src/assets/grahphic designs/sale2.png';
import sale3 from '../src/assets/grahphic designs/sale3.png';
import sale4 from '../src/assets/grahphic designs/sale4.png';


// Components
import Navbar from './Components/Navbar';
import Home, { TSHIRT, PANTS, Mnl, Footer } from './Components/Home';

import Carousel from './Components/Carousel';

const App = () => {
  const slides = [Sale, sale2, sale3, sale4];

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
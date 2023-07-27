import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Components
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Orderpage from './Components/Orderpage';
import SizeChart from './Components/SizeChart';
import Blogs from './Components/Blogs';
import ContactUs from './Components/Contact';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';


// Blogs components
import Umbro from './Components/Blogs/Umbro';
import DjDuo from './Components/Blogs/DjDuo';
import UrbanFashion from './Components/Blogs/UrbanFashion';
import ComfortZone from './Components/Blogs/ComfortZone';
import Venem from './Components/Blogs/Venem';
import Payment from './Components/Payment';
import Checkout1 from './Components/Checkout';
import Tshirts from './Components/Tshirts';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orderpage" element={<Orderpage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path='/size-chart' element={<SizeChart />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/Umbro' element={<Umbro />} />
        <Route path='/DjDuo' element={<DjDuo/>} />
        <Route path='/UrbanFashion' element={<UrbanFashion />} />
        <Route path='/ComfortZone' element={<ComfortZone />} />
        <Route path='/Venem' element={<Venem/>} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Checkout" element={<Checkout1 />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      <Newsletter />
      <Footer />
    </Router>
  );
};

export default App;

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
import ParentUmbro from './Components/Blogs/ParentUmbro';
import RenderUmbroOnClick from './Components/Blogs/RenderUmbroOnClick';


// Blogs components
import Umbro from './Components/Blogs/Umbro';
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
      </Routes>
      <Newsletter />
      <Footer />
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Orderpage from './Components/Orderpage';
import ContactUs from './Components/Contact';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Render the Navbar outside the Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orderpage" element={<Orderpage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Newsletter />
      <Footer />
    </Router>
  );
};

export default App;
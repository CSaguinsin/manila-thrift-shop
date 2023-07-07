import './App.css';

// Components
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { TSHIRT } from './Components/Home';
import { PANTS } from './Components/Home';
import { Footer } from './Components/Home';



function App() {
  return (
    <>
      <Navbar />
      <Home />
      <TSHIRT />
      <PANTS />
      <Footer />
    </>
  );
}


export default App;

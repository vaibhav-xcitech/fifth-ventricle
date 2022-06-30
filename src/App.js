import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './UI/Navbar/Navbar';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';
import Buy from './Components/Buy/Buy';
import Footer from './UI/Footer/Footer';
import BuyNow from './Components/Buy/BuyNow/BuyNow';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chestoBuy" element={<Buy />} />
        <Route path="/chestoBuy/buyNow" element={<BuyNow />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

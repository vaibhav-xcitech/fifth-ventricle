import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './UI/Navbar/Navbar';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';
import Buy from './Components/Buy/Buy';
import Footer from './UI/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/buy" element={<Buy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

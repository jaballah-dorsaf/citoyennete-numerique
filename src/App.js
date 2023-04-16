import './App.css';
import Header from './components/Header/Header';
import "./assets/js/script";
import About from './components/About/About';
import About2 from './components/About2/About2';
import About3 from './components/About3/About3';
import About4 from './components/About4/About4';
import About5 from './components/About5/About5';

import Services from './components/Services/Services';

import Qualities from './components/Qualities/Qualities';
import Features from './components/Features/Features';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <About2 />
      <About3 />
      <About4 />
      <About5 />

      <Services />
      <Qualities />
      <Features />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { LandingPage } from './components/pages/Landing/LandingPage';
import { About } from './components/pages/About/About';
import SlidePage from './components/pages/Slides/SlidePage';
import Footer from './components/pages/Footer/Footer';

function App({boxes}) {
  return (
    <div>
      <LandingPage/>
      <About/>
      <SlidePage/>
      <Footer/>
    
    </div>
  );
}

export default App;






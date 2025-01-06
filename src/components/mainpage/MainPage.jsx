import './MainPage.css';
import Home from '../home/Home';
import About from '../about/About';
import Experience from '../experience/Experience';

const MainPage = () => {
  return (
    <div className="main-page">
      <Home />
      <About />
      <Experience />
    </div>
  ); 
}

export default MainPage;
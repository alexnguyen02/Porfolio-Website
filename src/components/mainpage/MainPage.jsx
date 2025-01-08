import './MainPage.css';
import Home from '../home/Home';
import About from '../about/About';
import Experience from '../experience/Experience';
import Projects from '../projects/Projects'; 

const MainPage = () => {
  return (
    <div className="main-page">
      <Home />
      <About />
      <Experience />
      <Projects />
    </div>
  ); 
}

export default MainPage;
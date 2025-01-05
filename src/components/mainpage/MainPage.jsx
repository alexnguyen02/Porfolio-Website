import './MainPage.css';
import Home from '../home/Home';
import About from '../about/About';

const MainPage = () => {
  return (
    <div className="main-page">
      <Home />
      <About />
    </div>
  ); 
}

export default MainPage;
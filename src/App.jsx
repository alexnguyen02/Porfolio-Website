import './App.css'; 
import NavBar from './components/navbar/NavBar'; 
import MainPage from './components/mainpage/MainPage';

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <MainPage />
    </div>
  ); 
}

export default App

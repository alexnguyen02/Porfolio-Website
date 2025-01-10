import './App.css'; 
import SideBar from './components/sidebar/SideBar'; 
import MainPage from './components/mainpage/MainPage';

const App = () => {
  return (
    <div className='app'>
      <SideBar />
      <MainPage />
    </div>
  ); 
}

export default App

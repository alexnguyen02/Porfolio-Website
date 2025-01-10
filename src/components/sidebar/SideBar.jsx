import './SideBar.css'; 
import { useState, useEffect } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'; 

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState); 
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className='button-container'>
        <button className='menu-button' onClick={toggleMenu}>
          {isOpen
            ? <FontAwesomeIcon icon={faXmark} className='menu-icon'/>
            : <FontAwesomeIcon icon={faBars} className='menu-icon'/>
          }
        </button>
      </div>
      <div className={`sidebar-menu ${isOpen ? 'open' : 'closed'}`}>
          <a className='home-item'>Home</a>
          <a>About</a>
          <a>Experience</a>
          <a>Projects</a>
        <a className='contact-item'>Contact</a>
      </div>
    </div>
  );
};

export default SideBar;
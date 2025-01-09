import './SideBar.css'; 
import { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState); 
  }

  return (
    <div className='sidebar'>
      <button className='menu-button' onClick={toggleMenu}>
        {isOpen
          ? <FontAwesomeIcon icon={faXmark} className='menu-icon'/>
          : <FontAwesomeIcon icon={faBars} className='menu-icon'/>
        }
      </button>

      

    </div>
  );
};

export default SideBar;
import './NavBar.css'; 

const NavBar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <a href="">
          <li>About</li>
        </a>
        <a href="">
          <li>Experience</li>
        </a>
        <a href="">
          <li>Projects</li>
        </a>
        <a href="">
          <li>Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default NavBar;
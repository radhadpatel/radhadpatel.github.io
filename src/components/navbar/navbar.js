import React, { useState } from 'react';
import Logo from './logo.png';
import { Button } from './button.js';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown.js';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={Logo} alt="Radha Patel logo" className="navbar-logo"></img>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/projects'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Projects
              <FontAwesomeIcon icon={faCaretDown} className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/resume'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Resume
            </Link>
          </li>
          {/* <li>
            <Link
              to='.pages/contact-me'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Me
            </Link>
          </li> */}
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;

// const Navbar = () => {
//   return (
//     <>
//       <Nav>
//         <NavLink to="/">
//           <NavLogo>
//             <img src={Logo} alt="Radha's logo" />
//           </NavLogo>
//         </NavLink>
//         <Bars />
//         <NavMenu>
//           <NavLink to="/">
//             Home
//           </NavLink>
//           <NavLink to="/about" activeStyle>
//             About
//           </NavLink>
//           <NavLink to="/projects" activeStyle>
//             Projects
//           </NavLink>
//           <NavLink to="/resume" activeStyle>
//             Resume
//           </NavLink>
//         </NavMenu>
//         <NavBtn>
//           <NavBtnLink to='/contact'>Contact Me</NavBtnLink>
//         </NavBtn>
//       </Nav>
//     </>
//   )
// }

// export default Navbar;

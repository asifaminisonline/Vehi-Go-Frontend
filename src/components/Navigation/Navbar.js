/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebar(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const showSidebar = (event) => {
    event.stopPropagation();
    setSidebar(!sidebar);
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div
          className="navbar"
          style={{
            backgroundColor: '#060b26',
            position: 'fixed',
          
            width: '100%',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            paddingLeft: '10px',
            zIndex: '7',
          }}
        >
          <Link to="#" className="menu-bars" onClick={showSidebar}>
            <FaIcons.FaBars />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} style={{ zIndex: '10', }} ref={sidebarRef}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="/cars" className="menu-bars">
                {/* <AiIcons.AiOutlineClose /> */}
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

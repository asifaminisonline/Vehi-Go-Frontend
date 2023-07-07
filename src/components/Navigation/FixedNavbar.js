/* eslint-disable */
import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import SidebarData2 from './SidebarData2';
import './Navbar.css';

const FixedNavbar = () => { 
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className="nav-menu2">
            {SidebarData2.map((item, index) => {
              return (
                <div key={index} style={{ textDecoration: 'none' }}>
                <li  style={{ textDecorationLine: 'none' }}>
                  <Link to={item.path} className="nav-items">
                  <div className="icon">{item.icon}</div>
                    <div className="title">{item.title}</div>
                  </Link>
                  
                </li>
                </div>
              );
            })}
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default FixedNavbar;

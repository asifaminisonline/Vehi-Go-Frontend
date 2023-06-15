import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

const SidebarData2 = [
  {
    path: '/',
    icon: <AiIcons.AiFillHome className="icon" />,
    title: 'Home',
  },
  {
    path: '/cars/new',
    icon: <FaIcons.FaCartPlus className="icon" />,
    title: 'Add car',
  },
  {
    path: '/delete',
    icon: <FaIcons.FaTrash className="icon" />,
    title: 'Delete car',
  },
  {
    path: '/favorite',
    icon: <FaIcons.FaHeart className="icon" />,
    title: 'Favorites',
  },
  {
    path: '',
    icon: <FaIcons.FaPowerOff className="icon" />,
    title: 'Logout',
  },
];

export default SidebarData2;

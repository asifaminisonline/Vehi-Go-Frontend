/* eslint-disable */
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Add Car',
    path: '/cars/new',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',
  },
  {
    title: 'Remove Car',
    path: '/delete',
    icon: <FaIcons.FaTrash />,
    cName: 'nav-text',
  },
  {
    title: 'Favorites',
    path: '',
    icon: <FaIcons.FaHeart />,
    cName: 'nav-text',
  },
  {
    title: 'Logout',
    path: '',
    icon: <FaIcons.FaPowerOff />,
    cName: 'nav-text',
  },
];

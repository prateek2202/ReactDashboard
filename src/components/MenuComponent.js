import React from 'react';
import { FaCog, FaHamburger, FaCloud } from 'react-icons/fa';
import './MenuComponent.css';

const DashboardMenu = () => {
  const menuItems = [
    { icon: <FaCog />, text: 'Goals', bgColor: '#c0392b' },
    { icon: <FaHamburger />, text: 'Popular Dishes', bgColor: '#2980b9' },
    { icon: <FaCloud />, text: 'Menus', bgColor: '#16a085' },
  ];

  return (
    <div className="menu">
      {menuItems.map((item, index) => (
        <div className="menu-item" key={index}>
          <div className="icon" style={{ backgroundColor: item.bgColor }}>
            {item.icon}
          </div>
          <div className="text">{item.text}</div>
          <div className="arrow">➔</div>
        </div>
      ))}
    </div>
  );
};

export default DashboardMenu;

import React from 'react';
import logo from "../assets/images/logo.svg";
import "../admin.css"

const SideBar: React.FC = () => {
  return (
    <section className='sidebar'>
      <div className='side-center'>
        <ul className='side-links'>
          <li>Home</li>
          <li>About</li>
          <li>Add</li>
          <li>Remove</li>
        </ul>
      </div>

      <div>
        <img className="sidebarlogo" alt="not Found" src={logo} />
      </div>
    </section>
  );
};

export default SideBar;

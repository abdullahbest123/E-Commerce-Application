import React from 'react'
import logo from "../../../assets/images/logo.svg"
import { Link } from 'react-router-dom'
import Image from 'next/image';
import "../admin.css"

const navlink = [
  { name: 'Home', way: '/' },
  { name: 'About', way: '/' },
  { name: 'Product', way: '/' },
  { name: 'Login', way: '/' }
];

const Navbar = () => {
  return (
    <section className='navbar'>
      <Image layout="intrinsic" className="sidelogo" alt="notFound" src={logo} />

      <div className='nav-center'>
        <ul className='nav-links'>
          {navlink.map((s, index) => (
            <Link className='navlinks' to={s.way} key={index}>
              <li>{s.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div>
        <Image layout="intrinsic" className="navlogo" alt="notFound" src={logo} />
      </div>
    </section>
  );
};

export default Navbar;

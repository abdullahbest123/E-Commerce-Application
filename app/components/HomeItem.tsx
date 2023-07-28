'use client'
import React from 'react';
import { Link } from 'react-router-dom';
interface Button {
  name: string;
  link: string;
}

interface HomeItemProps {
  heading: string;
  buttons: Button[];
}
const HomeItem: React.FC<HomeItemProps> = (props) => {
  return (
    <div className="home">
      <h1 className="headingg">{props.heading}</h1>
      <ul className="homelist">
        {props.buttons.map((button, index) => (
          <li key={index}>
            {/* Use Link to handle navigation */}
            <Link to={button.link}><button className="btn homebtn">{button.name}</button></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default HomeItem;

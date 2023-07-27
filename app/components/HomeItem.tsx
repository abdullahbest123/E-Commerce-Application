import React from 'react';

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
            <button className="btn homebtn">{button.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeItem;

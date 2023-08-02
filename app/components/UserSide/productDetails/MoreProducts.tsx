import React from 'react';
import './css/MoreProducts.css'
const MoreProducts: React.FC = () => {
  return (
    <div className="containerMP">
      <div className="productsMP">
        <div className="imageMP">
          <img src="https://shorturl.at/hJLOU" alt="" />
        </div>
        <div className="informationMP">
          <p className="nameMP">BOTTLE</p>
          <p className="priceMP">25.55$</p>
          <ul className="qualitiesMP">
            <li>Combed Cotton</li>
            <li>Sumpia Cotton</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MoreProducts;

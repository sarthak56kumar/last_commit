import React from 'react';
import './Items.css'; 

const Items = ({ id, image, title, price,point, children }) => {
  return (
    <div className="item-card" key={id}>
      <img src={image} alt={title} className="item-image" />
      <h3 className="item-title">{title}</h3>
      <div className="item-price-container">
      <p className="item-price">${price}</p>
      <p className="item-points">{point}</p>
      </div>
      {children} {/* This allows for any children (like buttons) to be rendered here */}
    </div>
  );
};

export default Items;


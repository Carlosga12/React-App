

import React from 'react';

const Item = ({ item, onItemClick }) => {
  return (
    
    <div id="items" onClick={onItemClick}>
    <div className="item" onClick={onItemClick}></div>
      <h3>{item.name}</h3>
      <div >
        <img src={item.image} alt={item.name} className="imagen-diferenciales productos" style={{ maxWidth: '100%', height: 'auto', maxHeight: '300px' }} />
      </div>
    </div>

  );
};

export default Item;

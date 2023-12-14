

import React from 'react';

const Detail = ({ selectedItem }) => {
  return (
    <div id="Detail">
      {selectedItem && (
        <>
          <h3>El elemento seleccionado es {selectedItem.name} </h3>
          <img src={selectedItem.image} alt={selectedItem.name} style={{ maxWidth: '100%', height: 'auto' }} />
          <p>Datos:{selectedItem.description}</p>
          {/* Mostrar más detalles según sea necesario */}
          </>
      )}
   
    </div>
  );
};

export default Detail;
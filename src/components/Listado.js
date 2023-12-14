
import React, { useState, useRef } from 'react';
import Item from './Item';
import Detail from './Detail';

const Listado = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const detailRef = useRef(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    // Desplazar al componente Detail
    detailRef.current.scrollIntoView({ behavior: 'smooth' });
    setSelectedItem(item);
  };

    return (
      <>
          <h2 className="titulo-listado">Listado de ítems</h2>
          <div className="items-container">
            {items.map(item => (
              <Item key={item.id} item={item} onItemClick={() => handleItemClick(item)} />
            ))}
          </div>
          <div className="detail-container"ref={detailRef}> {/* Elimina el contenedor detail-container de aquí */}
        <Detail selectedItem={selectedItem} />
        </div>
      </>
    );
  };
  
  export default Listado;

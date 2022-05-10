import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import {Link} from 'react-router-dom';

function ItemDetail({item}) {

  const [cantidadDeProductos , setCantidadDeProductos] = useState (null);

  function addHandler(quantityToAdd){
    setCantidadDeProductos(quantityToAdd);
  }


  return (
    <div className='item-detail'>
      <div className='container'>
        <img className='img-detail' src={item.imgUrl} alt="imagen de producto" />
      </div>
      <div className='container'>
        <div className='item-container'>
            <h3>{item.title}</h3>
            <h4>Precio: ${item.precio}</h4>
        </div>
        <div>
            {cantidadDeProductos ? <button><Link to='/cart'> Terminar compra ({cantidadDeProductos} items)</Link></button>:
            <ItemCount initial={1} stock={5} onAdd={addHandler}/> 
            } 
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
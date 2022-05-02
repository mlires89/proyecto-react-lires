import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

function ItemDetail({item}) {
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
            <ItemCount initial={1} stock={5} onAdd={()=>{console.log('agregado al carrito')}}/> 
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
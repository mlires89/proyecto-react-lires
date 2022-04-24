import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css'

function ItemListContainer({greeting}) {
  return (
    <div className='item-list-container'>
        <h3> {greeting} </h3>
        <ItemCount initial={0} stock={5} onAdd={()=>{console.log('agregado al carrito')}}/> 
    </div>
  )
}

export default ItemListContainer;
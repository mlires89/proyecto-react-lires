import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import {Link} from 'react-router-dom';
import CartContext from '../../store/CartContext';

function ItemDetail({item}) {

  const cartCtx = useContext(CartContext);


  function addHandler(quantityToAdd){
    cartCtx.addProduct({quantity: quantityToAdd, ...item});
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
           <ItemCount initial={0} stock={item.stock} onAdd={addHandler} />
           {cartCtx.products.length ?
               <button className='button-rounded'>
                   <Link to='/cart' className='no-deco'>
                       Terminar compra ({ cartCtx.getCartQuantity() } items)
                   </Link>
               </button>:<></>
           } 
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
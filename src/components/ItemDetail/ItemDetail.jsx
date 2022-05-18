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
           <button onClick={() => console.log(cartCtx.products)} >Imprimir carrito</button>
           <button onClick={() => cartCtx.removeProduct(item.id)} >Remove product</button>
           <button onClick={() => cartCtx.clear()} >Clear</button>
           <button onClick={() => console.log(cartCtx.isInCart(item.id))} >Is in cart</button>
           <button onClick={() => console.log(cartCtx.getCartQuantity())} >Quantity</button>
           {cartCtx.products.length ?
               <button>
                   <Link to='/cart'>
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
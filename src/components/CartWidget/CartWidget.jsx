import React from 'react';
import carrito from './carrito.svg';
import './CartWidget.css'

function CartWidget() {
  return (
    <div >
        <img className='carrito-icon' src={carrito} alt="logo carrito" />
    </div>
  )
}

export default CartWidget
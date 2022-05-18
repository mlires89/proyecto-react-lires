import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import CartContext from '../../store/CartContext';
import CartItem from '../../components/CartItem/CartItem';
import './Cart.css';

function Cart() {
  const cartCtx = useContext (CartContext);
  return (
    <div className='carrito'>
      {cartCtx.products.map(p => <CartItem item={p} key={p.id}/>) }
      {cartCtx.products.length !=0 ?
        <div>
          <p>Total: ${cartCtx.getTotalPrice()}</p>
          <button className='button-rounded'> Terminar compra</button>
        </div> :
        <div>
          <h2>El carrito está vacío</h2>
          
            <Link className='link-no-decoration' to='/'> <button className='button-rounded'> Volver al inicio</button> </Link>
            
        </div>
      }    
      
    </div>
  )
}

export default Cart
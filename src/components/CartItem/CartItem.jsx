import React,{useContext} from 'react';
import CartContext from '../../store/CartContext';
import Bubble from '../Bubble/Bubble';
import './CartItem.css';

function CartItem({item}) {

    const cartCtx = useContext (CartContext);
  return (
    <div className='cart-item'>
        <Bubble> {item?.quantity}</Bubble>
        <div className='cart-img-containter'>
            <img  className='cart-img' src={item.imgUrl} alt="Imagen del producto" />
        </div>        
        <p>{item.title}</p>
        <p>${item.precio}</p>
        <Bubble isButton onBubbleClick={()=>cartCtx.removeProduct(item.id)}> - </Bubble>
    </div>
  )
}

export default CartItem
import React,{useContext}from 'react';
import { Link } from 'react-router-dom';
import Bubble from '../Bubble/Bubble';
import CartContext from '../../store/CartContext';
import './Item.css';

function Item({item}) {
  const cartctx = useContext(CartContext)
  return (
    <div className='card'>
        <img className='img-prod'src={item.imgUrl} alt="habano" />
        <Link className='link-no-decoration' to={'/item/' + item?.id}><button className='button-rounded'> Detalle</button></Link>
        <div className="card-container">
            <h4><b>{item.title}</b></h4>
            <p>$ {item.precio}</p>
        </div>
     </div>

  )
}

export default Item
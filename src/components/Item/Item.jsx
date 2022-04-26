import React from 'react';
import './Item.css';

function Item({item}) {
  return (
    <div className='card'>
        <img className='img-prod'src={item.imgUrl} alt="habano" />
        <div className="container">
            <h4><b>{item.title}</b></h4>
            <p>$ {item.precio}</p>
        </div>
     </div>

  )
}

export default Item
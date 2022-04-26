import React from 'react';
import './Item.css';

function Item({item}) {
  return (
    <div className='card'>
        <img src={item.imgUrl} alt="Avatar" style="width:100%"/>
        <div class="container">
            <h4><b>{item.title}</b></h4>
            <p>{item.precio}</p>
        </div>
     </div>

  )
}

export default Item
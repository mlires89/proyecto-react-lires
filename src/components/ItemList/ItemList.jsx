import React from 'react';
import Item from '../Item/Item';
import './ItemList.css'

function ItemList({arrayItems}) {
  return (
    <div className='item-list'>
        {arrayItems.map (item => <Item item={item} key={item.id}/>)}
    </div>
  )
}

export default ItemList
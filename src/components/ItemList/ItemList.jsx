import React from 'react';
import Item from '../Item/Item';

function ItemList({arrayItems}) {
  return (
    <div>
        {arrayItems.map (item => <Item item={item} key={item.id}/>)}
    </div>
  )
}

export default ItemList
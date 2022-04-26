import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'

function ItemListContainer({greeting}) {
  
  function traerProductos(){
    const myPromise = new Promise ((resolve,reject)=>{
      const productos = [
        {id: 1, title: 'Cohiba n° 4',precio: 2000 , imageUrl: 'https://ibb.co/ZT9FZ0j' },
        {id:2, title: 'Montecristo', precio: 1800, imageUrl:'https://ibb.co/Bff6fbK'},
        {id:3, title: 'Guantanamera', precio: 1200, imageUrl:'https://ibb.co/CzYdygc'}
      ];
      setTimeout(()=>{resolve (productos)}, 2000);
    });
    return myPromise;
  };

  traerProductos()
    .then(res => {const arrayProd = res});


  return (
    <div className='item-list-container'>

      <ItemList arrayItems={arrayProd}/>
      
    </div>
  )
}

export default ItemListContainer;
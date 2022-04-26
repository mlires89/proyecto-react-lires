import React,{useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'

function ItemListContainer({greeting}) {
  
  function traerProductos(){
    const myPromise = new Promise ((resolve,reject)=>{
      const productos = [
        {id: 1, title: 'Cohiba n° 4',precio: 2000 , imgUrl: 'https://i.ibb.co/WKCMTLh/cohiba.webp' },
        {id:2, title: 'Montecristo', precio: 1800, imgUrl:'https://i.ibb.co/511j1mx/montecristo.jpg'},
        {id:3, title: 'Guantanamera', precio: 1200, imgUrl:'https://i.ibb.co/mG2sKkj/guantanamera.jpg'}
      ];
      setTimeout(()=>{resolve (productos)}, 2000);
    });
    return myPromise;
  };
const [arrayProd,setProducts] = useState([]);
  traerProductos()
  .then(res=> setProducts(res));

;

  return (
    <div className='item-list-container'>

      <ItemList arrayItems={arrayProd}/>
      
    </div>
  )
}

export default ItemListContainer;
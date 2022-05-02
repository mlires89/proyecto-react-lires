import {React, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {

    function getItem (){
        const myPromise = new Promise ((resolve,reject)=>{
            const producto = {id:3, title: 'Guantanamera', precio: 1200, imgUrl:'https://i.ibb.co/mG2sKkj/guantanamera.jpg'};
        setTimeout(()=>{resolve (producto)}, 2000);
        });
        return myPromise;
    };

const [item,setItem] = useState({});
    
    getItem()
          .then(res=> setItem(res));
    

  return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer
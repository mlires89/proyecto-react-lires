import { useEffect } from 'react';
import {React, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

function ItemDetailContainer(itemID) {

    function getItem (id){
        const myPromise = new Promise ((resolve,reject)=>{
        const productsList = [
            {id: 1, title: 'Cohiba n° 4',precio: 2000 , imgUrl: 'https://i.ibb.co/WKCMTLh/cohiba.webp' },
            {id:2, title: 'Montecristo', precio: 1800, imgUrl:'https://i.ibb.co/511j1mx/montecristo.jpg'},
            {id:3, title: 'Guantanamera', precio: 1200, imgUrl:'https://i.ibb.co/mG2sKkj/guantanamera.jpg'}
        ]; 
        const producto = productsList.filter(item => item.id === parseInt(id));
        setTimeout(()=>{
            resolve (producto[0]);
        }, 2000);
        });
        return myPromise;
    };

const [item,setItem] = useState({});
const { id } = useParams();
useEffect(()=> {
    console.log(id);
    getItem(id)
        .then(res=>{
            setItem(res);
        })
        .catch(err =>{
            alert('Ocurrio un error')
        });
},[id]);
    

  return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer
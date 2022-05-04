import { useEffect } from 'react';
import {React, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

function ItemDetailContainer(itemID) {

    function getItem (id){
        const myPromise = new Promise ((resolve,reject)=>{
        const productsList = [
            {id: 1, 
                title: 'Cohiba n° 4',
                precio: 2000 , 
                category:'unidad',
                imgUrl: 'https://i.ibb.co/WKCMTLh/cohiba.webp' 
              },
              {
                id:2, 
                title: 'Montecristo',
                precio: 1800,
                category:'unidad',
                imgUrl:'https://i.ibb.co/511j1mx/montecristo.jpg'}
                ,
              {
                id:3, 
                title: 'Guantanamera', 
                precio: 1200, 
                category:'unidad',
                imgUrl:'https://i.ibb.co/mG2sKkj/guantanamera.jpg'
              },
              {
                id:4, 
                title: 'Guantanamera x 25', 
                precio: 5200, 
                category:'cajas',
                imgUrl:'https://i.ibb.co/xqst9KV/guantanamera-caja.jpg'
              },
              {
                id:5, 
                title: 'Cohiba maduro x 25', 
                precio: 10200, 
                category:'cajas',
                imgUrl:'https://i.ibb.co/f24q41b/cohiba-caja.jpg'
              },
              {
                id:6, 
                title: 'Humidor', 
                precio: 24200, 
                category:'accesorios',
                imgUrl:'https://i.ibb.co/bPMp49c/humidor.webp'
              },
              {
                id:7, 
                title: 'Encendedor', 
                precio: 3200, 
                category:'accesorios',
                imgUrl:'https://i.ibb.co/n3LBgtb/encendedor.jpg'
              },
              {
                id:8, 
                title: 'Cortador Cohiba', 
                precio: 2200, 
                category:'accesorios',
                imgUrl:'https://i.ibb.co/jyMnGBM/cortador.webp'
              }
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
import React,{useState} from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css'

function ItemListContainer({greeting}) {
  
  function traerProductos(category){
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
        imgUrl:'https://i.ibb.co/mG2sKkj/gu.jpg'
      },
      {
        id:5, 
        title: 'Cohiba maduro x 25', 
        precio: 10200, 
        category:'cajas',
        imgUrl:'https://i.ibb.co/mG2sKkj/gu.jpg'
      }
      ];
      const productsCategorized = category ? productsList.filter(item => item.category == categoryId) : productsList;
      setTimeout(()=>{
        resolve (productsCategorized)
      }, 2000);
    });
    return myPromise;
  };
const [arrayProd,setProducts] = useState([]);
const { categoryId } = useParams();

useEffect ( () => {
  traerProductos(categoryId)
  .then(res=> {
    setProducts(res)
  })
  .catch( err =>{
    alert('Ocurrio un error')
  });

},[categoryId])
;

  return (
    <div className='item-list-container'>

      <ItemList arrayItems={arrayProd}/>
      
    </div>
  )
}

export default ItemListContainer;
import React,{useState} from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import traerProductos from '../../store/firebase';
import './ItemListContainer.css'

function ItemListContainer({greeting}) {

  const [arrayProd,setProducts] = useState([]);
const { categoryId } = useParams();

useEffect ( () => {
  traerProductos(categoryId)
  .then(snapshot=> {
    setProducts(snapshot.docs.map(doc => {
      return{...doc.data(), id:doc.id}
    }))
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
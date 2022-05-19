import { useEffect } from 'react';
import {React, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { getItem } from '../../store/firebase';

function ItemDetailContainer(itemID) {

const [item,setItem] = useState({});
const { id } = useParams();
useEffect(()=> {
    getItem(id)
        .then(snapshot=>{
            setItem({...snapshot.data(),id: snapshot.id});
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
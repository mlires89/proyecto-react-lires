import React, {useState} from 'react';
import './ItemCount.css';



function ItemCount({stock, initial , onAdd}) {

    const [count, setCount] = useState (initial)

    function handleBtnMenos(){
       
        if (count > initial) {
        setCount (count - 1)
        }
    }
    
    function handleBtnMas (){
   
       if (count < stock){
            setCount (count + 1)
        }
    }
  return (
    <div className='item-count-container'>
        <div >
            <button className='button-handler' onClick={handleBtnMenos}>-</button>
            <input className='input-count' readOnly value={count} />
            <button className='button-handler' onClick={handleBtnMas}>+</button>
        </div>
            <button className='button-count-rounded' onClick={()=> onAdd(count)}> Agregar a carrito</button>
    </div>
  )
}

export default ItemCount
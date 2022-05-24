import React,{useState,useContext} from 'react';
import CartContext from '../../store/CartContext';
import { addDoc,collection,getFirestore} from 'firebase/firestore';
import './Checkout.css';
import Spinner from '../../components/Spinner/Spinner';


function Checkout() {
const [buyer,setBuyer] = useState ({
    Name:'',
    Email:'',
    Phone:''
});

const db = getFirestore();
const cartCtx = useContext(CartContext);
const {Name,Email,Phone} = buyer;
const [load,setLoad] = useState(false);


const handleInputChange = (e)=>{
    setBuyer(({
        ...buyer,
        [e.target.name]:e.target.value,    
    }))
}

const generateOrder = async (data) =>{
    setLoad(true);
    try{
        const col = collection (db, 'orders')
        console.log(col)
        const order = await addDoc(col,data)
        console.log('order',order)
        console.log('order', order.id)
        setLoad(false)
    } catch(error){
        console.log(error)
    }
}

const handleSubmit = e=>{
    e.preventDefault()
    const items = cartCtx.products.map ( e => {return {id:e.id , title: e.title , price: e.price , quantity: e.quantity}})
    const total = cartCtx.getTotalPrice();
    const dia = new Date();
    const data = {buyer,items,dia,total};
    console.log(data);
    generateOrder(data);
}





  return (

    <div className='co-container'>
    <h1>Finalizando compra</h1>
    <hr />
    <h4>Introduzca sus datos</h4>
    <br />
    
    {load ? <Spinner/> :
        <div>
        <form className='final-form' onSubmit={handleSubmit}>
            <input 
                type="text" 
                name='Name' 
                placeholder='Nombre' 
                value={Name} 
                onChange={handleInputChange}
                required
            />
            <input 
                type="email" 
                name='Email' 
                placeholder='Email' 
                value={Email}
                onChange={handleInputChange}
                required
            />
            <input 
                type="number"
                name='Phone' 
                placeholder='Telefono' 
                value={Phone}
                onChange={handleInputChange}
                required
            />
            <input type="submit" value="Finalizar Compra" />
        </form>
        </div>
    }
    </div>



  )
}

export default Checkout
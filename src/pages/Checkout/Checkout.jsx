import React,{useState,useContext} from 'react';
import CartContext from '../../store/CartContext';
import { addDoc,collection, getFirestore} from 'firebase/firestore';
import {Link} from 'react-router-dom';
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

const[orderId, setOrderId] = useState();


const handleInputChange = (e)=>{
    setBuyer(({
        ...buyer,
        [e.target.name]:e.target.value,    
    }))
}

const generateOrder = async(data) => {
    setLoad(true)
    try {
        const col = collection(db,"orders")
        const order = await addDoc(col,{data})
        cartCtx.clear()
        setOrderId (order.id)
    } catch (error) {
        console.log(error)
    }
    finally {setLoad (false)}
}




const handleSubmit = (e)=>{
    e.preventDefault()
    const items = cartCtx.products.map ( e => {return {id:e.id , title: e.title , price: e.precio , quantity: e.quantity}})
    const total = cartCtx.getTotalPrice();
    const date =  new Date();
    const data = {buyer,items, date,total};
    generateOrder(data);
}





  return (

    <div className='co-container'>
    <h1>Finalizando compra</h1>
    <hr/>
     
    {load ? <Spinner/> 
    
    :(!orderId&&
        <div>
        <h4>Introduzca sus datos</h4>
        <br/>
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
        </div>)
    }
        <div>
        {
             orderId&&(
                <div>
                    <h4>Compra Finalizada con Exito</h4>
                    <h4>{`Su código de compra es: ${orderId}`}</h4>
                    <Link to="/"><h5>Realizar otra compra</h5></Link>
                </div>
                )
        }
        </div>

    </div>



  )
}

export default Checkout
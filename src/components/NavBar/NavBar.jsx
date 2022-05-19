import React,{useContext} from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import CartContext from '../../store/CartContext';
import Bubble from '../Bubble/Bubble';
import Brand from '../../store/Brand.png'

function NavBar (props) {
    const crtCtx = useContext(CartContext)
        return (
            <nav className='navbar'>
               <NavLink to='/'><img src={Brand} alt="logo" /></NavLink> 
                <ul>
                   <li>
                        <NavLink to='/category/unidad'>Habanos por unidad</NavLink>
                    </li>
                    <li>
                        <NavLink to='category/cajas'>Cajas de habanos</NavLink>
                    </li>
                    <li>
                        <NavLink to='category/accesorios'>Accesorios</NavLink>
                    </li>
                </ul>

                <NavLink to='/cart'>
                    <CartWidget/>   
                </NavLink>
                    
                <div className='bubble-quantity'>
                    <Bubble>{crtCtx.getCartQuantity()}</Bubble>
                </div>
                
            </nav>
        );
}

export default NavBar;
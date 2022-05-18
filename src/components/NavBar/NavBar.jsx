import React,{useContext} from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import CartContext from '../../store/CartContext';
import Bubble from '../Bubble/Bubble';

function NavBar (props) {
    const crtCtx = useContext(CartContext)
        return (
            <nav className='navbar'>
               <NavLink to='/'><h1>Tienda de Habanos</h1></NavLink> 
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
                <Bubble>{crtCtx.getCartQuantity()}</Bubble>
               
            </nav>
        );
}

export default NavBar;
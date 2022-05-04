import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

function NavBar (props) {
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
                <CartWidget/>
            </nav>
        );
}

export default NavBar;
import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar (props) {
        return (
            <nav className='navbar'>
                <h1>Tienda de Habanos</h1>
                <ul>
                   <li>
                        <a href="#">Habanos por unidad</a>
                    </li>
                    <li>
                        <a href="#">Cajas de habanos</a>
                    </li>
                    <li>
                        <a href="#">Accesorios</a>
                    </li>
                </ul>
                <CartWidget/>
            </nav>
        );
}

export default NavBar;
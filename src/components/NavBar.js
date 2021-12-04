import React from 'react'
import CartWidget from './CartWidget';

function NavBar (){
    return (
        <header>
            <nav className="NavBar">
                <div>
                    <h1 className="LogoNav"><i class="fas fa-paw"></i>GARRITAS</h1>
                </div>
                <div className="MenuBox">
                    <div className="MenuItemBox"><a className="MenuItemLink" href="#">Home</a></div>
                    <div className="MenuItemBox"><a className="MenuItemLink" href="#">Nosotros</a></div>
                    <div className="MenuItemBox"><a className="MenuItemLink" href="#">Productos</a></div>
                    <div className="MenuItemBox"><a className="MenuItemLink" href="#">Contacto</a></div>
                </div>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar;

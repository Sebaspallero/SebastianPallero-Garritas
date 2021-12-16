import React from 'react'
import ItemCount from './ItemCount';
import producto1 from '../assets/producto1.jpg';
import producto2 from '../assets/producto2.jpg';
import producto3 from '../assets/producto3.jpg';
import producto4 from '../assets/producto4.jpg';
import producto5 from '../assets/producto5.jpg';
import producto6 from '../assets/producto6.jpg';
import producto7 from '../assets/producto7.jpg';
import producto8 from '../assets/producto8.jpg';
import producto9 from '../assets/producto9.jpg';
import producto10 from '../assets/producto10.jpg';
import producto11 from '../assets/producto11.jpg';
import producto12 from '../assets/producto12.jpg';
import producto13 from '../assets/producto13.jpg';
import producto14 from '../assets/producto14.png';
import producto15 from '../assets/producto15.png';
import producto16 from '../assets/producto16.jpg';
import producto17 from '../assets/producto17.png';
import producto18 from '../assets/producto18.png';
import producto19 from '../assets/producto19.png';



function Item (){
    
    const productos = [
        {Nombre: "New Zealand - Pollo", Precio: 80.50, src: producto1},
        {Nombre: "New Zealand - Carne", Precio: 90.50, src: producto2},
        {Nombre: "New Zealand - Carne Premium", Precio: 120.30, src: producto7},
        {Nombre: "New Zealand - Cordero", Precio: 100.50, src: producto3},
        {Nombre: "New Zealand - Premio Carne", Precio: 130.50, src: producto4},
        {Nombre: "New Zealand - Premio Cordero", Precio: 140.50, src: producto5},
        {Nombre: "New Zealand - Salmón", Precio: 140.50, src: producto6},
        {Nombre: "New Zealand - Atún", Precio: 140.50, src: producto8},
        {Nombre: "Corta Garras", Precio: 70, src: producto9},
        {Nombre: "Corta Garras Regulable", Precio: 90, src: producto10},
        {Nombre: "Shampú - Acondicionador", Precio: 230.70, src: producto11},
        {Nombre: "Shampú", Precio: 120.20, src: producto12},
        {Nombre: "Cepillo De Pelo", Precio: 89.9, src: producto13},
        {Nombre: "Mordedor S", Precio: 90.60, src: producto14},
        {Nombre: "Mordedor XL", Precio: 130.40, src: producto15},
        {Nombre: "Masticabe De Goma", Precio: 79.9, src: producto16},
        {Nombre: "Peluche Tiburón", Precio: 350, src: producto17},
        {Nombre: "Peluche Tortuga", Precio: 350, src: producto18},
        {Nombre: "Peluche Trucha", Precio: 350, src: producto19},
    ];

    return (
        <>
           {productos.map(({ Nombre, Precio,src }) => (
        <div className="contenedorProducto">
            <div className='imgProductoBox'>
                <img className='imgProducto' src={src} alt="Comida para perros"></img>
            </div>
            <p className='nombreProducto'>{Nombre}</p>
            <p className='precioProducto'>${Precio}</p>
            <ItemCount></ItemCount>
        </div>
      ))} 
      </>    
    )
}

export default Item;
import React from 'react'


function Item (){
    
    const productos = [
        {Nombre: "Eukanuba", Precio: 90.50, src: "../assets/producto1.jpg"},
        {Nombre: "Pedigree", Precio: 83.70, src: "../assets/producto2.jpg"},
        {Nombre: "Royal Canin", Precio: 120.40, src: "../assets/producto3.jpg"},
    ];

    return (
        <>
           {productos.map(({ Nombre, Precio,src }) => (
        <div className="contenedorProducto">
            <img className='imgProducto' src={src} alt="Comida para perros"></img>
            <p className='nombreProducto'>{Nombre}</p>
            <p className='precioProducto'>${Precio}</p>
        </div>
      ))} 
      </>    
    )
}

export default Item;
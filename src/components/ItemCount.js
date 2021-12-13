import React from 'react'
import { useState } from 'react';

function ItemCount ({initial = 0, stock = 5}){
    const [value, setValue] = useState(initial);

    const suma = () =>{
        if(value < stock) setValue ((prev)=> prev + 1);
        else alert ("Se alcanzó el limite permitido por compra")
    }

    const resta = () =>{
        if(value > initial) setValue ((prev)=> prev - 1);
        
    }

    return (
            <div className="contenedorCompra">
                <div className="contenedorContador">
                    <button className="contador" onClick={resta}>-</button>
                    <span className="cantidadProducto">{value}</span>
                    <button className="contador" onClick={suma}>+</button>
                </div>
                <button className="btnCarrito">Agregar Al Carrito</button>
            </div>   
    )
}

export default ItemCount;
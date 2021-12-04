import React from 'react'
import Common from './Common'

function ItemListContainer (){
    return (
             <section className="hero">
                 <div className="bienvenidaBox">
                     <h1 className="tituloBenvenida"><span className="tituloAccent">Hola</span> te damos la bienvenida</h1>
                    <Common.Btn text="Comprar"></Common.Btn>
                 </div>
             </section>
    )
}

export default ItemListContainer;
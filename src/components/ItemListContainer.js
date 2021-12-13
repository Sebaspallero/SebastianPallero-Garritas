import React from 'react'
import ItemCount from './ItemCount';

function ItemListContainer (){
    return (
        <section>
             <h2 className="tituloSeccion">Nuestros <span className="tituloAccent">Productos</span></h2>
                <ItemCount></ItemCount>
        </section>
             
    )
}

export default ItemListContainer;
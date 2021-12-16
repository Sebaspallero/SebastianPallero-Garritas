import React from 'react'
import ItemCount from './ItemCount';
import ItemList from './ItemList';

function ItemListContainer (){
    return (
        <section>
             <h2 className="tituloSeccion">Nuestros <span className="tituloAccent">Productos</span></h2>
                <ItemList></ItemList>
                <ItemCount></ItemCount>
        </section>
             
    )
}

export default ItemListContainer;
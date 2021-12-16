import React from 'react'
import ItemList from './ItemList';
import ItemCategorySelector from './ItemCategorySelector'

function ItemListContainer (){
    return (
        <section>
             <h2 className="tituloSeccion">Nuestros <span className="tituloAccent">Productos</span></h2>
                <ItemCategorySelector/>
                <ItemList></ItemList>
        </section>
             
    )
}

export default ItemListContainer;
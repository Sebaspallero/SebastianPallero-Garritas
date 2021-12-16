const common = {
    Btn : ({text})=>(<a className="btn">{text}</a>),
    Item : (props)=>(
        <div className="contenedorProducto">
            <div className='imgProducto'>{props.nombre}</div>
            <p className='nombreProducto'>{props.nombre} Eukanuba</p>
            <p className='precioProducto'>{props.precio} $23.5</p>
        </div>
    )
}
export default common;
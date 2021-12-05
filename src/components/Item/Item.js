import React from 'react';
import ItemCount from '../ItemListContainer/ItemCount';

const Item = ({ product }) => {

    const handleOnAdd = () => {
        console.log(`Agregaste el producto ${product.titulo} al carrito.`)
    }

    return (
        <div className="col-12 col-md-4 mb-3 mt-3 mr-3 ml-3 text-center">
            <div className="card bg-dark">
                <div className='card-header'>
                    <h5 className='card-plataform'>{product.plataforma}</h5>
                </div>
                <img src={product.portada} alt={product.titulo} />
                <div className="card-body">
                    <h4 className='card-title'>{product.titulo}</h4>
                    <p>
                        Categoria: {product.categoria}
                    </p>
                    <p>
                        Precio: ${product.precio}
                    </p>
                    <ItemCount stock={product.stock} onAdd={handleOnAdd} />
                </div>
                <div className="card-footer">
                    <button className="btn btn-secondary">Ver detalle</button>
                </div>
            </div>
        </div>
    )
}

export default Item




import React, { useState } from 'react';
import PropTypes from 'prop-types';


const ItemCount = ({ stock, onAdd }) => {

    const [count, setCount] = useState(1);
    const btnIncrease = () => setCount(count + 1)
    const btnDecrease = () => setCount(count - 1)

    if (count > 1 && count < stock) {
        return (
            <div className='item-count'>
                <h5>{count}</h5>
                <div className='container'>
                    <div className='container mt-2 mb-2'>
                        <button className="btn btn-decrease btn-secondary" onClick={btnDecrease}>-</button>
                        <button className="btn btn-increase btn-secondary" onClick={btnIncrease}>+</button>
                    </div>
                    <button className="btn btn-add btn-secondary" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        )
    } else if (count === 1) {
        return (
            <div className='item-count'>
                <h5>{count}</h5>
                <div className='container'>
                    <div className='container mt-2 mb-2'>
                        <button className="btn btn-decrease btn-secondary" disabled onClick={btnDecrease}>-</button>
                        <button className="btn btn-increase btn-secondary" onClick={btnIncrease}>+</button>
                    </div>
                    <button className="btn btn-add btn-secondary" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        )
    } else if (count === stock) {
        return (
            <div className='item-count'>
                <h5>{count}</h5>
                <div className='container'>
                    <div className='container mt-2 mb-2'>
                        <button className="btn btn-decrease btn-secondary" onClick={btnDecrease}>-</button>
                        <button className="btn btn-increase btn-secondary" disabled onClick={btnIncrease}>+</button>
                    </div>
                    <button className="btn btn-add btn-secondary" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        )
    } else {
        return;
    }

}

ItemCount.propTypes = {
    stock: PropTypes.number,
}
ItemCount.defaultProps = {
    stock: 1,
}

export default ItemCount


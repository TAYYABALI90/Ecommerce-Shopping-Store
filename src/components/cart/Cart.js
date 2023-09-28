import React, { useState, useEffect } from 'react';

//Action Types File
import * as actionTypes from '../../constant/actionTypes';

//CartState File
import { CartState } from '../../context/Context';

//CSS File
import './cart.css';

const Cart = () => {

    const { state: { cart }, imagesOfProducts, dispatch } = CartState();

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const cartTotal = cart.reduce((acc, curr) => acc + Number(curr.price) * curr.quantity, 0);
        setTotal(cartTotal);
    }, [cart]);

    return (

        <div className='cart'>

            <div className="cart-header">

                <h1>
                    Subtotal ({cart.length}){' '}
                    {cart.length === 1 ? "Item" : "Items"}
                </h1>

                <small>
                    Checkout the total amount you have spent{' '}
                    <i className="bi bi-arrow-bar-right">
                        <span>{`$${total}`}</span>
                    </i>
                </small>

            </div>

            {cart.map((product, index) => (

                <div key={product.id} className='cart-table'>

                    <div>
                        <span>#</span> <span>{index + 1}</span>
                    </div>
                    <div>
                        <span>Product Image</span> <img src={imagesOfProducts(index)} alt="" />
                    </div>
                    <div>
                        <span>Product Name</span> <span>{product.name}</span>
                    </div>
                    <div>
                        <span>Product Price</span> <span>${product.price}</span>
                    </div>
                    <div>
                        <span>Product Delivery</span> <span>{product.fastDelivery ? 'Fast Delivery' : '4 Days Delivery'}</span>
                    </div>

                    <div>
                        <span>Remove From Cart</span>
                        <button type='button' className='delete-btn' onClick={() => {
                            dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: product })
                        }}>
                            <i className='bi bi-cart-dash' />
                        </button>
                    </div>

                    <div className="dropdown">

                        <button className="dropdown-toggle quantity-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-plus-circle" /> Product Quantity {product.quantity}
                        </button>

                        <ul className="dropdown-menu">

                            {[...Array(product.inStock).keys()].map((x) => (

                                <li key={x + 1}>

                                    <a className="dropdown-item" href="#" onClick={(e) =>

                                        dispatch({
                                            type: actionTypes.CHANGE_CART_QUANTITY,
                                            payload: { id: product.id, quantity: x + 1 }
                                        })}>

                                        Increase {x + 1}

                                    </a>

                                </li>

                            ))}

                        </ul>

                    </div>

                </div>

            ))}

        </div>

    )

}

export default Cart;
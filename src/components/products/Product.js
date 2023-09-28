import React from 'react';

//CartState File
import { CartState } from '../../context/Context';

//Action Types Variables
import * as actionTypes from '../../constant/actionTypes';

//CSS Styles
import './products.css';

const Product = ({ product, index, imagesOfProducts }) => {

    const { state: { cart }, dispatch } = CartState();

    const cartSome = cart.some((item) => item.id === product.id);

    const objectOfFunctions = {
        handleAddToCart: () => { dispatch({ type: actionTypes.ADD_TO_CART, payload: product }) },
        handleRemoveFromCart: () => { dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: product }) },
    };

    return (

        <div className='product-cards'>

            <small>InStock {product.inStock}</small>

            <img src={imagesOfProducts(index)} className="card-img-top" alt="Product Images" />

            <div className="product-cards-body">

                <h1 className="product-cards-title">{product.name}</h1>

                <p className="product-cards-text">

                    <span className='dollar-span'>
                        $<span className='price-span'>{product.price.split('.')[0]}</span>
                    </span>

                    <span className='fast-delivery'>
                        {product.fastDelivery ? 'Fast Delivery' : '4 Days Delivery'}
                    </span>

                </p>

                <div className="rating">

                    <label className="form-check-label rating" htmlFor="flexCheckDefault">
                        Ratings:
                    </label>

                    {[...Array(5)].map((_, i) => (

                        <div key={i}>

                            {product.ratings > i ? (
                                <i className='bi bi-star-fill active' />
                            ) : (
                                <i className='bi bi-star notActive' />
                            )}

                        </div>

                    ))}

                </div>

                {cartSome ? (
                    <button type='button' onClick={objectOfFunctions.handleRemoveFromCart}>
                        <i className='bi bi-cart-dash' />Remove From Cart
                    </button>
                ) : (
                    <button type='button' disabled={!product.inStock} onClick={objectOfFunctions.handleAddToCart}>
                        <i className='bi bi-cart-plus' />
                        {product.inStock ? 'Add To Cart' : 'Out Of Stock'}
                    </button>
                )}

            </div>

        </div>

    )

}

export default Product;
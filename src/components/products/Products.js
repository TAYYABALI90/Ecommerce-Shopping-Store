import React from 'react';

import { CartState } from '../../context/Context';

//Product Component
import Product from './Product';

//CSS Styles
import './products.css';

const Products = () => {

    const {
        state: { products },
        productState: { byStock, byFastDelivery, byRating, sort, searchQuery },
        imagesOfProducts } = CartState();

    const transformedProducts = () => {

        let sortedProducts = products;

        if (sort) {
            sortedProducts = sortedProducts.sort((a, b) =>
                sort === "lowToHigh" ? a.price - b.price : b.price - a.price);
        };

        if (!byStock) {
            sortedProducts = sortedProducts.filter((sortedProduct) => sortedProduct.inStock);
        };

        if (byFastDelivery) {
            sortedProducts = sortedProducts.filter((sortedProduct) => sortedProduct.fastDelivery);
        };

        if (byRating) {
            sortedProducts = sortedProducts.filter((sortedProduct) => sortedProduct.ratings >= byRating);
        };

        if (searchQuery) {
            sortedProducts = sortedProducts.filter((sortedProduct) =>
                sortedProduct.name.toLowerCase().includes(searchQuery));
        };

        return sortedProducts;

    };

    return (

        <>

            <div className='products-header'>
                <h1>Some features that Made us Unique</h1>
                <small>Who are in extremely love with eco friendly system</small>
            </div>

            <div className='product-cards-container'>

                {transformedProducts().map((product, index) => (

                    //Passing the product and its image to Product Component
                    <Product key={product.id} product={product} index={index} imagesOfProducts={imagesOfProducts} />

                ))}

            </div>

        </>

    )

}

export default Products;
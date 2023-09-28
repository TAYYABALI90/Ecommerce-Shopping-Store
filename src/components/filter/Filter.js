import React from 'react';

//Action Types File
import * as actionTypes from '../../constant/actionTypes';

//CartState File
import { CartState } from '../../context/Context';

//Star Rating Component
import Rating from '../rating/Rating';

//CSS File
import './filter.css';

const Filter = () => {

    const { productState: { byStock, byFastDelivery, byRating, sort }, productDispatch } = CartState();

    const objectOfFunctions = {
        sortByAscending: () => productDispatch({ type: actionTypes.SORT_BY_PRICE, payload: 'lowToHigh' }),
        sortByDescending: () => productDispatch({ type: actionTypes.SORT_BY_PRICE, payload: 'highToLow' }),
        sortByStock: () => productDispatch({ type: actionTypes.FILTER_BY_STOCK }),
        sortByFastDelivery: () => productDispatch({ type: actionTypes.FILTER_BY_DELIVERY }),
        sortByRating: (i) => productDispatch({ type: actionTypes.FILTER_BY_RATING, payload: i + 1 }),
        clearFilters: () => productDispatch({ type: actionTypes.CLEAR_FILTERS })
    };

    return (

        <div className="filter-products">

            <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                Filter Products
            </button>

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">

                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                        Filter Products</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>

                <div className="offcanvas-body">

                    <p>Tick what that fit's you best.</p>

                    <div className="form-check">

                        <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            checked={sort === "lowToHigh" ? true : false}
                            onChange={objectOfFunctions.sortByAscending} />

                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Ascending Order
                        </label>

                    </div>

                    <div className="form-check">

                        <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            checked={sort === "highToLow" ? true : false}
                            onChange={objectOfFunctions.sortByDescending} />

                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Descending Order
                        </label>

                    </div>

                    <div className="form-check">

                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                            checked={byStock}
                            onChange={objectOfFunctions.sortByStock} />

                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Out Of Stock
                        </label>

                    </div>

                    <div className="form-check">

                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                            checked={byFastDelivery}
                            onChange={objectOfFunctions.sortByFastDelivery} />

                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Fast Delivery
                        </label>

                    </div>

                    <Rating rating={byRating} onClick={objectOfFunctions.sortByRating} />

                    <button type='button' onClick={objectOfFunctions.clearFilters}>
                        <i className='bi bi-x-octagon' /> Clear Filters
                    </button>

                </div>

            </div>

        </div>

    )

}

export default Filter;
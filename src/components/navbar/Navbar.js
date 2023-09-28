import { Link } from 'react-router-dom';

//CartState File
import { CartState } from '../../context/Context';

//Action Types File
import * as actionTypes from '../../constant/actionTypes';

//Component
import Filter from '../filter/Filter';

//CSS File
import './navbar.css';

const Navbar = () => {

    const { state: { cart }, productDispatch } = CartState();

    const handleSearchQuery = (e) => {
        productDispatch({
            type: actionTypes.FILTER_BY_SEARCH,
            payload: e.target.value
        });
    };

    return (

        <section>

            <header className="logo-header">

                <h1>Catch Your Choice</h1>

                <Link to='/cart' className="cart">
                    <i className="bi bi-cart"><span>{cart.length}</span></i>
                    <button type='button' disabled={!cart.length > 0}>
                        {cart.length > 0 ? "What's In Cart?" : "Cart Is Empty"}
                    </button>
                </Link>

            </header>

            <nav className="navbar navbar-expand-lg">

                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item dropdown px-3">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Home+
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Door Shop</a></li>
                                    <li><a className="dropdown-item" href="/">Jewellery Shop</a></li>
                                    <li><a className="dropdown-item" href="/">Cake Shop</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown px-3">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shop+
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="/" className="dropdown-item">Shop</a></li>
                                    <li><a href="/" className="dropdown-item">Shop Details</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown px-3">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pages+
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">About</a></li>
                                    <li><a className="dropdown-item" href="/">Faq</a></li>
                                    <li><a className="dropdown-item" href="/">Wishlist</a></li>
                                    <li><a className="dropdown-item" href="/">Cart</a></li>
                                    <li><a className="dropdown-item" href="/">Account</a></li>
                                    <li><a className="dropdown-item" href="/">Checkout</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown px-3">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Blog+
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Blog</a></li>
                                    <li><a className="dropdown-item" href="/">Blog Details</a></li>
                                </ul>
                            </li>

                            <li className="nav-item px-3">
                                <a className="nav-link" href="/">Contact us</a>
                            </li>

                        </ul>

                        <form className="d-flex" role="search">
                            <button type="button"><i className="bi bi-search" /></button>
                            <input className="form-control me-2" onChange={handleSearchQuery} placeholder="Search a product." />
                        </form>

                    </div>

                </div>

            </nav>

            <Filter />

        </section>

    )

};

export default Navbar;
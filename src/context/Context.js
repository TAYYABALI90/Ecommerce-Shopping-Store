import { createContext, useContext, useReducer } from "react";

//Product Images
import product1 from './product-1.jpg';
import product2 from './product-2.jpg';
import product3 from './product-3.jpg';
import product4 from './product-4.jpg';
import product5 from './product-5.jpg';
import product6 from './product-6.jpg';
import product7 from './product-7.jpg';
import product8 from './product-8.jpg';
import product9 from './product-9.jpg';
import product10 from './product-10.jpg';
import product11 from './product-11.jpg';
import product12 from './product-12.jpg';

//Faker
import { faker } from '@faker-js/faker';

//Reducers
import { cartReducer, productReducer } from "./Reducer";

//Creating A Context Inside Cart Variable Using createContext()
const Cart = createContext();

faker.seed(100);

const Context = ({ children }) => {

    //A products Array Which Will Generate Some Random Information In 30 Products
    const products = [...Array(30)].map(() => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5])
    }));

    //Create A state, dispatch And Putting The products, cart As An Object Inside useReducer()
    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    });

    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: ''
    });

    //Function For Adding Default Images For All The Products
    const imagesOfProducts = (index) => {
        const indexOfImages = index % 12;
        const images = [
            product1,
            product2,
            product3,
            product4,
            product5,
            product6,
            product7,
            product8,
            product9,
            product10,
            product11,
            product12
        ];
        return images[indexOfImages];
    };

    return (

        <Cart.Provider value={{ state, dispatch, productState, productDispatch, imagesOfProducts }}>
            {children}
        </Cart.Provider>

    )

};

//Creating A CartState Function And Using Cart Variable As A useContext() In It
export const CartState = () => { return useContext(Cart) };

export default Context;
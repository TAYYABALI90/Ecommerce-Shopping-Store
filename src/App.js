//Navbar Component
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Components
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';

function App() {

  return (

    <BrowserRouter>

      <div className="App">

        <Navbar />

        <Routes>

          <Route path='/' exact element={<Products />} />

          <Route path='/cart' exact element={<Cart />} />

        </Routes>

      </div>

    </BrowserRouter>

  );

}

export default App;
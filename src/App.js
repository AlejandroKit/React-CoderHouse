import './App.css';
import './style/style.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContainer from './components/CartContainer';
import { CartProvider } from './context/cartContext';

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<CartContainer />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;

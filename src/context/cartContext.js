import { createContext, useState } from 'react';
import { productsList } from '../data';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCartList = (prodId, count) => {
        setCartList((cartList) => {
            const product = productsList.find((e) => e.id == prodId);
            product.quantity = count;
            return cartList.concat(product);
        });
    };

    const context = {
        cartList,
        addToCartList,
    };

    return <CartContext.Provider value={context}>{children}</CartContext.Provider>;
};
export default CartProvider;

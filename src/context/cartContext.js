import { createContext, useState } from 'react';
import { productsList } from '../data';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const isInCart = (id) => {
        let res = [];
        cartList.forEach((e) => {
            if (e.id == id) {
                res = [1];
            }
        });
        return res.length;
    };

    const addToCartList = (prodId, count) => {
        if (isInCart(prodId)) {
            const product = productsList.find((e) => e.id == prodId);
            product.quantity = product.quantity + count;
        } else {
            setCartList((cartList) => {
                const product = productsList.find((e) => e.id == prodId);
                product.quantity = count;
                return cartList.concat(product);
            });
        }
    };

    const context = {
        cartList,
        addToCartList,
    };

    return <CartContext.Provider value={context}>{children}</CartContext.Provider>;
};
export default CartProvider;

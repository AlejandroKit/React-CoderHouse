import { createContext, useState } from 'react';
import { productsList } from '../data';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const [empty, setEmpty] = useState(true);

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
                product.index = cartList.length;
                return cartList.concat(product);
            });
        }
        setEmpty(false);
    };

    const totalProd = () => {
        let total = 0;
        cartList.forEach((e) => {
            total = total + e.quantity;
        });
        return total;
    };

    const makeEmpty = () => {
        setEmpty(!empty);
    };

    const context = {
        cartList,
        empty,
        addToCartList,
        totalProd,
        makeEmpty,
    };

    return <CartContext.Provider value={context}>{children}</CartContext.Provider>;
};
export default CartProvider;

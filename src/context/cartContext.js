import { createContext, useState } from 'react';
import { productsList } from '../data';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    let totalPrecio = 0;
    cartList.forEach((e) => {
        totalPrecio = totalPrecio + parseInt(e.price) * parseInt(e.quantity);
    });

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

    const removeFromCart = (id) => {
        const cartListCopy = [...cartList];
        for (let i = 0; i < cartListCopy.length; i++) {
            if (cartListCopy[i].id == id) {
                cartListCopy.splice(i, 1);
            }
        }
        setCartList(cartListCopy);
    };

    const totalProd = () => {
        let total = 0;
        cartList.forEach((e) => {
            total = total + e.quantity;
        });
        return total;
    };

    const context = {
        cartList,
        totalPrecio,
        addToCartList,
        removeFromCart,
        totalProd,
    };

    return <CartContext.Provider value={context}>{children}</CartContext.Provider>;
};
export default CartProvider;

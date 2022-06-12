import { addDoc, collection, doc, getDoc, getFirestore } from 'firebase/firestore';
import { createContext, useState } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [total, setTotal] = useState(0);
    const [cartList, setCartList] = useState([]);
    const [userData, setUserData] = useState([]);
    const [idCompra, setIdCompra] = useState('');
    const [isLoged, setIsLoged] = useState(false);

    let totalPrecio = 0;
    cartList.forEach((e) => {
        totalPrecio = totalPrecio + parseInt(e.price) * parseInt(e.quantity);
    });

    const isInCart = (id) => {
        let res = [];
        cartList.forEach((e) => {
            if (e.fireId === id) {
                res = [1];
            }
        });
        return res.length;
    };

    const addToCartList = (prodId, count) => {
        if (isInCart(prodId)) {
            const product = cartList.find((e) => e.fireId === prodId);
            product.quantity = product.quantity + count;
        } else {
            setCartList((cartList) => {
                let product = {};
                const db = getFirestore();
                const itemRef = doc(db, 'items', prodId);
                getDoc(itemRef).then((snapshot) => {
                    if (snapshot.exists()) {
                        product = { fireId: snapshot.id, ...snapshot.data(), quantity: count };
                        cartList.push(product);
                        setTotal(total + product.quantity);
                    }
                });
                return cartList;
            });
        }
    };

    const removeFromCart = (id) => {
        const cartListCopy = [...cartList];
        for (let i = 0; i < cartListCopy.length; i++) {
            if (cartListCopy[i].fireId === id) {
                cartListCopy.splice(i, 1);
                setTotal(total - cartList[i].quantity);
            }
        }
        setCartList(cartListCopy);
    };

    const setOrder = async () => {
        if (isLoged === true) {
            const itemsWithoutImg = cartList.map((e) => ({ id: e.id, title: e.name, quantity: e.quantity }));
            const compra = {
                buyer: userData,
                item: itemsWithoutImg,
                total: totalPrecio,
            };

            const db = getFirestore();
            const compraCollection = collection(db, 'orders');

            const response = await addDoc(compraCollection, compra);
            cartList.forEach((e) => {
                console.log(e);
            });
            setIdCompra(`${response.id}`);
            setCartList([]);
            setTotal(0);
        }
    };

    const context = {
        total,
        cartList,
        userData,
        setUserData,
        idCompra,
        isLoged,
        setIsLoged,
        totalPrecio,
        addToCartList,
        removeFromCart,
        setOrder,
    };

    return <CartContext.Provider value={context}>{children}</CartContext.Provider>;
};
export default CartProvider;

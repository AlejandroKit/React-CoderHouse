import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import CartCard from './CartCard';
import EmptyCart from './EmptyCart';

const CartContainer = () => {
    const { cartList, totalPrecio, removeFromCart } = useContext(CartContext);

    return (
        <div className="w-full px-2 flex flex-col flex-wrap content-center">
            {cartList.length == 0 ? (
                <EmptyCart />
            ) : (
                cartList.map((e) => {
                    return (
                        <div className="py-3 w-1/2 border-b-2" key={e.id}>
                            <CartCard id={e.id} name={e.name} price={e.price} imageURL={e.imageURL} quantity={e.quantity} func={removeFromCart} />
                        </div>
                    );
                })
            )}
            <div className="mt-3 flex justify-between">
                <Link to={'/'}>
                    <button className="btn p-2 btn-success">Volver a comprar</button>
                </Link>
                <strong className="text-right text-xl">TOTAL: ${totalPrecio}</strong>
            </div>
        </div>
    );
};
export default CartContainer;

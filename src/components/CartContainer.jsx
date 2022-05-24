import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import CartCard from './CartCard';
import EmptyCart from './EmptyCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const CartContainer = () => {
    const { cartList, totalPrecio, removeFromCart } = useContext(CartContext);
    const [compraFinalizada, setCompraFinalizada] = useState(false);
    const [idCompra, setIdCompra] = useState('');

    const user = {
        name: 'Jorge',
        phone: '+54 351 123 4567',
        email: 'jorge@gmail.com',
    };

    const itemWithoutImg = cartList.map((e) => ({ id: e.id, title: e.name, quantity: e.quantity }));

    const setOrder = async () => {
        const compra = {
            buyer: user,
            item: itemWithoutImg,
            total: totalPrecio,
        };

        console.log(compra);

        const db = getFirestore();
        const compraCollection = collection(db, 'orders');

        const response = await addDoc(compraCollection, compra);
        console.log(response.id);
        setCompraFinalizada(true);
        setIdCompra(`${response.id}`);
    };

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
                    <button className="btn p-2 btn-outline btn-success">Volver a comprar</button>
                </Link>
                <strong className="text-right text-xl">TOTAL: ${totalPrecio}</strong>
            </div>
            {/* <button className="btn btn-warning mt-5" onClick={setOrder}>
                Terminar compra
            </button> */}
            <label onClick={setOrder} for="my-modal-3" className="btn btn-success mt-5 modal-button">
                Terminar Compra
            </label>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label for="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">
                        X
                    </label>
                    <h3 className="text-lg font-bold">Felicidades, tu compra se ejecuto correctamente</h3>
                    <p className="py-4">
                        Tu ID de compra es: <strong>{idCompra}</strong>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default CartContainer;

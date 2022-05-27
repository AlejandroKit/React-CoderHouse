import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import CartCard from './CartCard';
import EmptyCart from './EmptyCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const CartContainer = () => {
    const { cartList, totalPrecio, removeFromCart } = useContext(CartContext);
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

        const db = getFirestore();
        const compraCollection = collection(db, 'orders');

        const response = await addDoc(compraCollection, compra);
        setIdCompra(`${response.id}`);
    };

    return (
        <div className="cartContainer w-full flex flex-col flex-wrap content-center">
            <div className="cartList p-5 flex flex-col flex-wrap content-center">
                {cartList.length == 0 ? (
                    <EmptyCart />
                ) : (
                    cartList.map((e) => {
                        return (
                            <div className="py-3 w-full border-b-2" key={e.id}>
                                <CartCard id={e.id} name={e.name} price={e.price} imageURL={e.imageURL} quantity={e.quantity} func={removeFromCart} />
                            </div>
                        );
                    })
                )}
                <div className="mt-3 flex justify-between">
                    <Link to={'/'}>
                        <button className="btn p-2 btn-outline btn-success">Volver a comprar</button>
                    </Link>
                    <strong className="cart__totalPrice text-right text-xl">TOTAL: ${totalPrecio}</strong>
                </div>
                <label onClick={setOrder} for="my-modal-3" className="btn btn-info mt-5 modal-button">
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
        </div>
    );
};
export default CartContainer;

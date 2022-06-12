import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import CartCard from './CartCard';
import EmptyCart from './EmptyCart';
import SignIn from './SignIn';
import ConfirmPurchaseModal from './ConfirmPurchaseModal';

const CartContainer = () => {
    const { cartList, idCompra, isLoged, totalPrecio, removeFromCart } = useContext(CartContext);

    return (
        <div className="cartContainer w-full flex flex-col flex-wrap content-center">
            <div className="cartList p-5 flex flex-col flex-wrap content-center">
                {cartList.length === 0 ? (
                    <EmptyCart />
                ) : (
                    cartList.map((e) => {
                        return (
                            <div className="py-3 w-full border-b-2" key={e.fireId}>
                                <CartCard fireId={e.fireId} name={e.name} price={e.price} imageURL={e.imageURL} quantity={e.quantity} func={removeFromCart} />
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
                <label htmlFor="my-modal-3" className="btn btn-info mt-5 modal-button">
                    Terminar Compra
                </label>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                {isLoged === true ? <ConfirmPurchaseModal idCompra={idCompra} /> : <SignIn />}
            </div>
        </div>
    );
};
export default CartContainer;

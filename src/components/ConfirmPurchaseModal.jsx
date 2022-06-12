import { useContext, useEffect } from 'react';
import { CartContext } from '../context/cartContext';

const ConfirmPurchaseModal = ({ idCompra }) => {
    const { setIsLoged, setOrder } = useContext(CartContext);

    useEffect(() => {
        setOrder();
    }, []);

    return (
        <div className="modal">
            <div className="modal-box relative">
                <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                    onClick={() => {
                        setIsLoged(false);
                    }}
                >
                    X
                </label>
                <h3 className="text-lg font-bold">Felicidades, tu compra se ejecuto correctamente</h3>
                <p className="py-4">
                    Tu ID de compra es: <strong>{idCompra}</strong>
                </p>
            </div>
        </div>
    );
};
export default ConfirmPurchaseModal;

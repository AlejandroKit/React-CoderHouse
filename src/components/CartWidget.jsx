import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';

const CartWidget = () => {
    const { totalProd, cartList, empty } = useContext(CartContext);
    const [total, setTotal] = useState(totalProd());

    useEffect(() => {
        setTotal(totalProd());
    }, [empty]);

    useEffect(() => {
        setTotal(totalProd());
    }, [cartList]);

    return (
        <div className="dropdown dropdown-end">
            <label className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <Link to={'/cart'}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="badge badge-sm indicator-item">{total == 0 ? '0' : total}</span>
                    </Link>
                </div>
            </label>
        </div>
    );
};
export default CartWidget;

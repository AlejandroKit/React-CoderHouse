import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import Item from './Item';

const CartContainer = () => {
    const { cartList } = useContext(CartContext);

    return (
        <div className="w-full px-2 flex flex-wrap justify-start">
            {cartList.map((e) => {
                return (
                    <div className="relative" key={e.id}>
                        <span className="badge badge-lg badge-success absolute z-10 top-2 right-7 text-xl">{e.quantity}</span>
                        <Item id={e.id} name={e.name} price={e.price} imageURL={e.imageURL} stock={e.stock} />
                    </div>
                );
            })}
        </div>
    );
};
export default CartContainer;

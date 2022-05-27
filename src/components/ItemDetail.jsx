import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ id, name, price, imageURL, stock }) => {
    const { addToCartList } = useContext(CartContext);
    const [isInCart, setIsInCart] = useState(false);
    const [count, setCount] = useState(1);

    const onAdd = (count) => {
        setIsInCart(true);
        setCount(count);
        addToCartList(id, count);
    };

    return (
        <div key={id} className="itemDetailContainer flex m-10">
            <div className="w-full">
                <img className="h-full object-cover" src={imageURL} alt="" />
            </div>
            <div className="detail__description ml-10 flex flex-col">
                <h2 className="text-8xl text-left">{name}</h2>
                <p className="my-10 text-2xl text-left grow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cum, inventore accusantium ut aperiam quo fugiat ratione maxime quod quas expedita obcaecati asperiores. Numquam blanditiis facilis rem repellat, iusto incidunt.</p>

                {isInCart ? (
                    <div className="grow w-2/4 flex flex-col text-left">
                        <div className="alert alert-success shadow-lg mb-5">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{`Your purchase has been confirmed! Compraste ${count} productos`}</span>
                            </div>
                        </div>
                        <Link to={'/cart'} className="text-left btn btn-outline btn-success">
                            Terminar mi compra
                        </Link>
                    </div>
                ) : (
                    <div className="grow w-2/4">
                        <ItemCount func={onAdd} stock={stock} />
                    </div>
                )}

                <strong className="text-right text-3xl text-lime-500">Price: ${price}</strong>
            </div>
        </div>
    );
};
export default ItemDetail;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = (props) => {
    const [isInCart, setIsInCart] = useState(false);
    const [count, setCount] = useState(1);

    console.log(isInCart);

    const onAdd = (count) => {
        setIsInCart(true);
        setCount(count);
    };

    return (
        <>
            <div className="w-full">
                <img className="h-full object-cover" src={props.imageURL} alt="" />
            </div>
            <div className="ml-20 flex flex-col">
                <h2 className="text-7xl text-left">{props.name}</h2>
                <p className="my-10 text-2xl text-left grow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cum, inventore accusantium ut aperiam quo fugiat ratione maxime quod quas expedita obcaecati asperiores. Numquam blanditiis facilis rem repellat, iusto incidunt.</p>

                {isInCart ? (
                    <div className="grow w-2/4 flex flex-col text-left">
                        {/* <span className="text-xl">Agregaste items al carrito</span> */}
                        <div className="alert alert-success shadow-lg mb-5">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{`Your purchase has been confirmed! Compraste ${count} productos`}</span>
                            </div>
                        </div>
                        <Link to={'/cart'} className="text-left btn btn-outline btn-success">
                            Ver el carrito
                        </Link>
                    </div>
                ) : (
                    <div className="grow w-2/4">
                        <ItemCount func={onAdd} stock={props.stock} />
                    </div>
                )}

                <strong className="text-right text-3xl text-lime-500">Price: ${props.price}</strong>
            </div>
        </>
    );
};
export default ItemDetail;

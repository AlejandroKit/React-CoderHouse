import { useState } from 'react';

const ItemCount = ({ func, stock }) => {
    const [count, setCount] = useState(1);
    var stock = stock;

    const subCount = () => {
        count <= 1 ? setCount(count) : setCount(count - 1);
    };

    const addCount = () => {
        count == stock ? setCount(count) : setCount(count + 1);
    };

    return (
        <>
            <div className="bg-zinc-100 text-gray-700 flex border border-zinc-400 rounded-xl px-5 mb-5 pb-1">
                <button className="text-3xl" onClick={subCount}>
                    -
                </button>
                <strong className="grow text-3xl text-center">{count}</strong>
                <button className="text-3xl" onClick={addCount}>
                    +
                </button>
            </div>
            <button onClick={() => func(count)} className="btn btn-outline btn-info btn-sm w-full">
                BUY
            </button>
        </>
    );
};
export default ItemCount;

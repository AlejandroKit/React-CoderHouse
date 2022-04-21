import { useState } from 'react';

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);
    var stock = props.stock;

    const subCount = () => {
        count <= 0 ? setCount(count) : setCount(count - 1);
    };

    const addCount = () => {
        count == stock ? setCount(count) : setCount(count + 1);
    };

    return (
        <>
            <div className="flex mt-2">
                <button onClick={subCount}>-</button>
                <strong className="grow">{count}</strong>
                <button onClick={addCount}>+</button>
            </div>
            <button className="btn btn-outline btn-sm">BUY</button>
        </>
    );
};
export default ItemCount;

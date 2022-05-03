import ItemDetail from './ItemDetail';
import { productsList } from '../data';
import { useEffect, useState } from 'react';

const ItemDetailContainer = () => {
    const [items, setItem] = useState([]);

    const loadingProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsList);
        }, 2000);
    });

    // console.log(loadingProducts);

    const getItem = async () => {
        try {
            const result = await loadingProducts;
            setItem(result);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getItem();
    }, []);

    return (
        <div className="flex flex-col justify-center">
            {items.map((s) => (
                <div key={s.id} className="flex m-10 mt-0">
                    <ItemDetail name={s.name} price={s.price} imageURL={s.imageURL} />
                </div>
            ))}
        </div>
    );
};
export default ItemDetailContainer;

import ItemDetail from './ItemDetail';
import { productsList } from '../data';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [items, setItem] = useState([]);
    const { itemId } = useParams();

    let productsListFiltred;

    if (itemId == undefined) {
        productsListFiltred = productsList;
    } else {
        productsListFiltred = productsList.filter((p) => p.id == itemId);
    }

    const loadingProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsListFiltred);
        }, 1000);
    });

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
    }, [itemId]);

    return (
        <div className="flex flex-col justify-center">
            {items.map((s) => (
                <div key={s.id} className="flex m-10 mt-10">
                    <ItemDetail name={s.name} price={s.price} imageURL={s.imageURL} stock={s.stock} />
                </div>
            ))}
        </div>
    );
};
export default ItemDetailContainer;

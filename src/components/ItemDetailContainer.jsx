import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});

    const getItem = () => {
        const db = getFirestore();
        const itemRef = doc(db, 'items', itemId);
        getDoc(itemRef).then((snapshot) => {
            if (snapshot.exists()) {
                setItem({ fireId: snapshot.id, ...snapshot.data() });
            }
        });
    };

    useEffect(() => {
        getItem();
    }, [itemId]);

    return (
        <div className="flex flex-col justify-start">
            <ItemDetail id={item.id} name={item.name} price={item.price} imageURL={item.imageURL} stock={item.stock} />
        </div>
    );
};
export default ItemDetailContainer;

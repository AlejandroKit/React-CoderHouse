import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);

    const sortForId = (a, b) => {
        if (a.id < b.id) {
            return -1;
        } else if (b.id < a.id) {
            return 1;
        }
        return 0;
    };

    const getProducts = () => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'items');
        getDocs(itemsCollection).then((snapshot) => {
            const prodList = [];
            snapshot.docs.forEach((s) => {
                prodList.push({ fireId: s.id, ...s.data() });
            });
            setProducts(prodList);
            if (categoryId !== undefined) {
                let productsListFiltred;
                productsListFiltred = prodList.filter((p) => p.category == categoryId);
                setProducts(productsListFiltred);
            }
        });
    };
    products.sort(sortForId);

    useEffect(() => {
        getProducts();
    }, [categoryId]);

    return (
        <div className="w-full min-h-screen">
            <ItemList productsList={products} />
        </div>
    );
};
export default ItemListContainer;

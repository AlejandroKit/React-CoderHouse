import Item from './Item';
import { productsList } from '../data';
import { useEffect, useState } from 'react';

const ItemList = ({ category }) => {
    const [products, setProducts] = useState([]);
    let productsListFiltred;

    // console.log(categoryID);
    if (category == undefined) {
        productsListFiltred = productsList;
    } else {
        productsListFiltred = productsList.filter((p) => p.category == category);
    }

    const loadingProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsListFiltred);
            // console.log(productsListFiltred);
        }, 1000);
    });

    const getProducts = async () => {
        try {
            const result = await loadingProducts;
            setProducts(result);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getProducts();
    }, [category]);

    return (
        <div className="w-full px-2 flex flex-wrap justify-start">
            {products.length ? (
                products.map((product) => {
                    return (
                        <div key={product.id}>
                            <Item id={product.id} name={product.name} price={product.price} imageURL={product.imageURL} stock={product.stock} />
                        </div>
                    );
                })
            ) : (
                <h2 className="text-5xl">Estamos trayendo los productos de la fabrica...</h2>
            )}
        </div>
    );
};
export default ItemList;

import Item from './Item';
import { productsList } from '../data';
import { useEffect, useState } from 'react';

const ItemList = () => {
    const [products, setProducts] = useState([]);

    const loadingProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsList);
        }, 2000);
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
    }, []);

    return (
        <div className='flex justify-center'>
            {products.length ?( 
                products.map((product) => {
                    return <div key={product.id}>
                        <Item 
                        id={product.id} 
                        name={product.name} 
                        price={product.price} 
                        imageURL={product.imageURL} 
                        stock={product.stock} />
                    </div>
                })
            ) : (
                <h2 className='text-5xl'>Estamos trayendo los productos de la fabrica...</h2>
            ) }
        </div>
    );
};
export default ItemList;

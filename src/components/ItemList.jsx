import { Link } from 'react-router-dom';
import Item from './Item';

const ItemList = ({ productsList }) => {
    const products = productsList;

    return (
        <div className="w-full px-2 flex flex-wrap justify-start">
            {products.length ? (
                products.map((product) => {
                    return (
                        <div key={product.id}>
                            <Link to={`/item/${product.fireId}`} className="card-title">
                                <Item id={product.id} name={product.name} price={product.price} imageURL={product.imageURL} />
                            </Link>
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

import { Link } from 'react-router-dom';
import Item from './Item';

const ItemList = ({ productsList }) => {
    return (
        <div className="w-full px-4 flex flex-wrap justify-start">
            {productsList.length ? (
                productsList.map((product) => {
                    return (
                        <div className="mx-4 mb-5" key={product.id}>
                            <Link to={`/item/${product.fireId}`} className="card-title">
                                <Item name={product.name} price={product.price} imageURL={product.imageURL} />
                            </Link>
                        </div>
                    );
                })
            ) : (
                <div className="h-screen">
                    <h2 className="text-5xl text-amber-500">Estamos trayendo los productos de la fabrica...</h2>
                </div>
            )}
        </div>
    );
};
export default ItemList;

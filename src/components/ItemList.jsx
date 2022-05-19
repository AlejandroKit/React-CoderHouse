import Item from './Item';

const ItemList = ({ productsList }) => {
    const products = productsList;
    console.log(products);

    return (
        <div className="w-full px-2 flex flex-wrap justify-start">
            {products.length ? (
                products.map((product) => {
                    return (
                        <div key={product.id}>
                            <Item fireId={product.fireId} id={product.id} name={product.name} price={product.price} imageURL={product.imageURL} />
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

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const { categoryId } = useParams();
    console.log(categoryId);

    return (
        <div className="w-full">
            <ItemList category={categoryId} />
        </div>
    );
};
export default ItemListContainer;

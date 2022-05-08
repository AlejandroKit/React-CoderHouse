import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import './style/card.css';

const Item = (props) => {
    return (
        <div className="card w-72 bg-base-100 shadow-xl mx-5 mb-5">
            <div className="h-52 flex justify-center">
                <img className="object-cover object-center" src={props.imageURL} alt="Shoes" />
            </div>
            <div className="card-body">
                <Link to={`/item/${props.id}`} className="card-title">
                    {props.name}
                    <div className="badge badge-secondary">NEW</div>
                </Link>
                <div className="card-actions justify-end">
                    <strong>$ {props.price}</strong>
                </div>
            </div>
        </div>
    );
};
export default Item;

import { Link } from 'react-router-dom';
import './style/card.css';

const Item = ({ name, price, imageURL }) => {
    return (
        <div className="card w-72 bg-base-100 shadow-xl mx-5 mb-5">
            <div className="h-52 flex justify-center">
                <img className="object-cover object-center" src={imageURL} alt="Shoes" />
            </div>
            <div className="card-body">
                {name}
                <div className="badge badge-secondary">NEW</div>
                <div className="card-actions justify-end">
                    <strong className="text-2xl">$ {price}</strong>
                </div>
            </div>
        </div>
    );
};
export default Item;

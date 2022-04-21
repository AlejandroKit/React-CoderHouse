import { Children } from 'react';
import ItemCount from './ItemCount';
import './style/card.css';

const Card = (props) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-5">
            <figure>
                <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {props.title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <ItemCount stock={props.stock} initial={props.initial} />
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">
                        <i>{props.tags[0]}</i>
                    </div>
                    <div className="badge badge-outline">
                        <i>{props.tags[1]}</i>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Card;

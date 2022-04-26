import ItemCount from "./ItemCount";
import './style/card.css';


const Item = (props) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-5">
            <div className="h-52 flex justify-cente">
                <img className="object-cover object-center" src={props.imageURL} alt="Shoes" />
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {props.name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <ItemCount stock={props.stock}/>
                <div className="card-actions justify-end">
                    <strong className="price">$ {props.price}</strong>
                </div>
            </div>
        </div>
    );
};
export default Item;

const Item = ({ name, price, imageURL }) => {
    return (
        <div className="card w-72 bg-base-100 shadow-xl">
            <div className="h-52 flex justify-center">
                <img className="object-cover object-center" src={imageURL} alt="Shoes" />
            </div>
            <div className="card-body">
                <span className="text-amber-500">{name}</span>
                <div className="badge">NEW</div>
                <div className="card-actions justify-end">
                    <strong className="text-2xl">$ {price}</strong>
                </div>
            </div>
        </div>
    );
};
export default Item;

const CartCard = ({ fireId, name, price, imageURL, quantity, func }) => {
    return (
        <div className="flex">
            <div className="h-40 w-40">
                <img className="h-full w-full" src={imageURL} alt="" />
            </div>
            <div className="ml-5 flex flex-col grow text-amber-500">
                <h2 className="text-4xl">{name}</h2>
                <span className="text-xl grow">Llevas:{quantity}</span>
                <strong>${price}</strong>
            </div>
            <button
                className="btn btn-error btn-outline self-center"
                onClick={() => {
                    func(fireId);
                }}
            >
                Eliminar
            </button>
        </div>
    );
};
export default CartCard;

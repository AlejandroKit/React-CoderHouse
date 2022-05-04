const ItemDetail = (props) => {
    return (
        <>
            <div className="w-full">
                <img className="h-full object-cover" src={props.imageURL} alt="" />
            </div>
            <div className="mx-10 flex flex-col">
                <h2 className="text-7xl text-left">{props.name}</h2>
                <p className="my-10 text-2xl text-left grow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cum, inventore accusantium ut aperiam quo fugiat ratione maxime quod quas expedita obcaecati asperiores. Numquam blanditiis facilis rem repellat, iusto incidunt.</p>
                <strong className="text-right text-3xl text-lime-500">Price: ${props.price}</strong>
            </div>
        </>
    );
};
export default ItemDetail;

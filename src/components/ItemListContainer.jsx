import Card from './Card';

const ItemListContainer = (props) => {
    return (
        <>
            <h1>Hola {props.name}, espero esto sea suficiente :)</h1>
            <div className="flex p-10">
                <Card title="Nike Air Jordan 1" tags={['Nike', 'Urban']} stock="4" initial="2"></Card>
                <Card title="Nike X OffWhite" tags={['Nike', 'OffWhite']} stock="5" initial="1"></Card>
                <Card title="Adidas" tags={['Adidas', 'Sport']} stock="10" initial="0"></Card>
                <Card title="Fila" tags={['Fila', 'Urban']} stock="15" initial="2"></Card>
            </div>
        </>
    );
};
export default ItemListContainer;

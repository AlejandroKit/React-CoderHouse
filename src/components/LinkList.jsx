import { Link } from 'react-router-dom';

const LinkList = () => {
    return (
        <ul className="menu menu-horizontal p-0 z-10 text-xl">
            <li>
                <Link to={'/'}>Inicio</Link>
            </li>
            <li>
                <Link to={'/category/sneakers'}>Sneakers</Link>
            </li>
            <li>
                <Link to={'/category/buzos'}>Buzos</Link>
            </li>
            <li>
                <Link to={'/category/gorras'}>Gorras</Link>
            </li>
        </ul>
    );
};
export default LinkList;

import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import LinkList from './LinkList';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 text-amber-500">
            <div className="flex-1">
                <Link to={'/'} className="navbar__title btn btn-ghost normal-case text-4xl">
                    Str€€t-W€aring
                </Link>
            </div>
            <div className="nav">
                <LinkList />
                <CartWidget />
            </div>
        </div>
    );
};
export default NavBar;

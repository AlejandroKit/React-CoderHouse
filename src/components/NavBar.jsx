import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import LinkList from './LinkList';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                {/* <a className="btn btn-ghost normal-case text-xl">Str€€t-W€aring</a> */}
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">
                    Str€€t-W€aring
                </Link>
            </div>
            <div className="flex-none">
                <LinkList />
                <CartWidget />
                <div className="dropdown dropdown-end dropdown-hover">
                    <label className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" />
                        </div>
                    </label>
                    <ul className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default NavBar;

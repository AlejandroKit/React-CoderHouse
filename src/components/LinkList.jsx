const LinkList = () => {
    return (
        <ul className="menu menu-horizontal p-0">
            <li>
                <a>Inicio</a>
            </li>
            <li>
                <a>
                    Celulares
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                </a>
                <ul className="p-2 bg-base-100">
                    <li>
                        <a>Xiaomi</a>
                    </li>
                    <li>
                        <a>Samsung</a>
                    </li>
                </ul>
            </li>
            <li>
                <a>Componentes</a>
            </li>
        </ul>
    );
};
export default LinkList;

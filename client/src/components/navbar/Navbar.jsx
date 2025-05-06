import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import RouteContext from '../../context/RouteContext';
import { AuthContext } from '../../context/AuthContext';
import './Navbar.css';
function Navbar (){
    const {route,onRouteChange} = useContext(RouteContext);
    const {onLogout} = useContext(AuthContext);
    return (
        <nav>
            <ul className="nav-list">
                <li className={"nav-item " } >
                    <NavLink to="/">Home</NavLink>
                </li>
                <li >
                    <NavLink to="/stand">Stands</NavLink>
                </li>
                <li >
                    <NavLink to="/product">Products</NavLink>
                </li>
                <li >
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li className={"nav-item "}>
                    <button onClick={onLogout}>Logout</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
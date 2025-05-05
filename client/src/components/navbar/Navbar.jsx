import { useContext } from 'react';
import RouteContext from '../../context/RouteContext';
import { AuthContext } from '../../context/AuthContext';
import './Navbar.css';
function Navbar (){
    const {route,onRouteChange} = useContext(RouteContext);
    const {onLogout} = useContext(AuthContext);
    return (
        <nav>
            <ul className="nav-list">
                <li className={"nav-item "+(route==="home" ? "active": "") } >
                    <button onClick={()=>onRouteChange("home")}>Home</button>
                </li>
                <li className={"nav-item "+(route==="stand" ? "active": "") }>
                    <button onClick={()=>onRouteChange("stand")}>Stands</button>
                </li>
                <li className={"nav-item "+(route==="product" ? "active": "") }>
                    <button onClick={()=>onRouteChange("product")}>Productos</button>
                </li>
                <li className={"nav-item "+(route==="login" ? "active": "") }>
                    <button onClick={()=>onRouteChange("login")}>Login</button>
                </li>
                <li className={"nav-item "}>
                    <button onClick={onLogout}>Logout</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
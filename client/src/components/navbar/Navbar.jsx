import { removeToken } from '../../utils/localStorage';
import './Navbar.css';
function Navbar ({route,onRouteChange}){

    const handleLogout = ()=>{
        removeToken();
        onRouteChange("home");
    }
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
                    <button onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
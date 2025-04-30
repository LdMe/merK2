import './Navbar.css';
function Navbar ({route,onRouteChange}){


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
            </ul>
        </nav>
    )
}

export default Navbar;
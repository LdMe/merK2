import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { AuthProvider } from "../../context/AuthContext";
function Root() {
    return (
        <AuthProvider>
            <header>
                <Navbar />
            </header>
            <main>
                <h1>Merk2</h1>
                <Outlet />
            </main>
            <footer>

            </footer>
        </AuthProvider>
    )
}

export default Root;
import { createContext,useContext,useState } from "react";
import { login } from "../utils/api/auth";
import { saveToken,removeToken } from "../utils/localStorage";
import RouteContext from "./RouteContext";

const AuthContext = createContext({
    userData: {},
    onLogin: async () => { },
    onLogout: () => { }
})

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    const {onRouteChange} = useContext(RouteContext);
    const handleLogin = async (email, password) => {
        const result = await login(email, password);
        if (result.error) {
            removeToken();
            return result.error;{onRouteChange}
        } else {
            console.log("login", result)
            setUserData(result.user);
            saveToken(result.token);
            onRouteChange("home");
            return null;
        }
    }
    const handleLogout = () => {
        removeToken();
        setUserData(null);
        onRouteChange("home");
    }
    return (
        <AuthContext value={{userData:userData,onLogin:handleLogin,onLogout:handleLogout}}>
            {children}
        </AuthContext>
    )
}

export {
    AuthContext,
    AuthProvider
}
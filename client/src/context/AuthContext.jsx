import { createContext,useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/api/auth";
import { saveToken,removeToken } from "../utils/localStorage";

const AuthContext = createContext({
    userData: {},
    onLogin: async () => { },
    onLogout: () => { }
})

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    const handleLogin = async (email, password) => {
        const result = await login(email, password);
        if (result.error) {
            removeToken();
            return result.error;
        } else {
            console.log("login", result)
            setUserData(result.user);
            saveToken(result.token);
            navigate("/");
            return null;
        }
    }
    const handleLogout = () => {
        removeToken();
        setUserData(null);
        navigate("/");
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
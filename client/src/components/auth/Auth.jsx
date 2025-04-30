import { useState } from "react";

import  {login} from "../../utils/api/auth";

function Auth ({onLogin}) {
    const [isRegister,setIsRegister] = useState(false);
    const [error,setError] = useState(null);
    const [userData,setUserData] = useState({
        email: "",
        password:""
    })
    const handleUserPassword = (e) =>{
        const newPassword = e.target.value;
        console.log("user password",newPassword)
        const newState = {...userData,password:newPassword}
        setUserData(newState);
    }
    const handleUserEmail = (e) =>{
        const newEmail = e.target.value;
        console.log("user Email",newEmail)
        const newState = {...userData,email:newEmail}
        setUserData(newState);
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        // sin formulario controlado, sacariamos los datos de los inputs
        console.log("login",userData);
        const result = await onLogin(userData.email,userData.password);
        setError(result);
    }
    return (
        <section className="auth-section">
            <h1>Login</h1>
            <p className="error">{error}</p>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id= "email" value={userData.email} onChange={handleUserEmail} />
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" value={userData.password} onChange={handleUserPassword}/>
                <button>Acceder</button>
            </form>
        </section>
    )
}

export default Auth;
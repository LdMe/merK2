import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
const Greeting = ()=>{
    const {userData}  = useContext(AuthContext);
    return(
      <>
        {userData && <h1>Hola {userData.name}</h1>}
      </>  
    )
}

export default Greeting;
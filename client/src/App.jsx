import { useEffect, useState } from 'react';
import { login } from './utils/api/auth';
import { removeToken, saveToken } from './utils/localStorage';
import Navbar from './components/navbar/Navbar';
import ProductList from './components/productList/ProductList';
import StandList from './components/standList/StandList';
import Auth from './components/auth/Auth';
import './App.css'



function App() {
  const [route, setRoute] = useState("home");
  const [userData,setUserData] = useState(null);

  const handleLogin = async (email,password) => {
    const result = await login(email,password);
    if(result.error){
      removeToken();
      return result.error;
    }else{
      console.log("login",result)
      setUserData(result.user);
      saveToken(result.token);
      setRoute("home");
      return null;
    }
  }
  const handleRouteChange = (newRoute) =>{
    setRoute(newRoute);
  }
  const routes = {
    home : <h1>Merk2</h1>,
    stand: <StandList  onRouteChange={handleRouteChange}/>,
    product: <ProductList  onRouteChange={handleRouteChange}/>,
    login: <Auth onLogin={handleLogin}/>
  }
  return (
    <>
      <Navbar route={route} onRouteChange={handleRouteChange}/>
      {userData && <h1>Hola {userData.name}</h1>}
      {routes[route]}
    </>
  )
}

export default App

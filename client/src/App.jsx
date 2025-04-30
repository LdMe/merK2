import { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import ProductList from './components/productList/ProductList';
import StandList from './components/standList/StandList';
import './App.css'

const routes = {
  home : <h1>Merk2</h1>,
  stand: <StandList />,
  product: <ProductList />
}

function App() {
  const [route, setRoute] = useState("home");

  const handleRouteChange = (newRoute) =>{
    setRoute(newRoute);
  }
  return (
    <>
      <Navbar route={route} onRouteChange={handleRouteChange}/>
      {routes[route]}
    </>
  )
}

export default App

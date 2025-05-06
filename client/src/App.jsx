import { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import ProductList from './pages/productList/ProductList';
import StandList from './pages/standList/StandList';
import Auth from './components/auth/Auth';
import RouteContext from './context/RouteContext';
import { AuthProvider } from './context/AuthContext';
import './App.css'
import Greeting from './components/greeting/Greeting';



function App() {
  const [route, setRoute] = useState("home");


  const handleRouteChange = (newRoute) => {
    setRoute(newRoute);
  }
  const routes = {
    home: <h1>Merk2</h1>,
    stand: <StandList />,
    product: <ProductList />,
    login: <Auth />
  }
  return (
    <>
      <RouteContext value={{ route: route, onRouteChange: handleRouteChange }} >
        <AuthProvider>
          <Navbar />
          <Greeting />
          {routes[route]}
        </AuthProvider>
      </RouteContext>
    </>
  )
}

export default App

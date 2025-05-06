import {createBrowserRouter} from 'react-router-dom';
import Root from './pages/root/Root';
import ProductList from './pages/productList/ProductList';
import StandList from './pages/standList/StandList';
import Auth from './pages/auth/Auth';

import { getAllProducts } from './utils/api/product';
import { getAllStands } from './utils/api/stand';

const router  = createBrowserRouter([
    {
        path : "/",
        element: <Root />,
        children: [
            {
                path: "/product",
                element: <ProductList />,
                loader: getAllProducts
            },
            {
                path: "/stand",
                element: <StandList />,
                loader: getAllStands
            },
            {
                path: "/login",
                element: <Auth />,
            }
        ]
    },
    
])

export default router;
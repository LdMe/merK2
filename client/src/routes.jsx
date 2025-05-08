import {createBrowserRouter} from 'react-router-dom';
import Root from './pages/root/Root';
import ProductList from './pages/product/productList/ProductList';
import StandList from './pages/standList/StandList';
import Auth from './pages/auth/Auth';

import { getAllProducts,getProductById } from './utils/api/product';
import { getAllStands } from './utils/api/stand';
import NewProduct from './pages/product/newProduct/NewProduct';
import ShowProduct from './pages/product/showProduct/ShowProduct';
import EditProduct from './pages/product/editProduct/EditProduct';

const router  = createBrowserRouter([
    {
        path : "/",
        element: <Root />,
        children: [
            {
                path: "product",
                element: <ProductList />,
                loader: getAllProducts,
                children:[
                    
                ]
            },
            {
                path: "product/new",
                element: <NewProduct />,
                loader: getAllStands

            },
            {
                path: "product/:id",
                element: <ShowProduct />,
                loader: ({params}) => getProductById(params.id)

            },
            {
                path: "product/:id/edit",
                element: <EditProduct />,
                loader: async ({params}) => {
                    const productDataDefault = await getProductById(params.id);
                    const stands = await getAllStands();
                    return {productDataDefault,stands};
                
                }

            },
            {
                path: "stand",
                element: <StandList />,
                loader: getAllStands
            },
            {
                path: "login",
                element: <Auth />,
            }
        ]
    },
    
])

export default router;
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Home from "./pages/home"
import RootLayout from "./layouts/rootlayout"
import Login from "./pages/login"
import Register from "./pages/register"
import SingleProduct from "./pages/singleproduct"
import Cart from "./pages/cart"
import Productlayout from "./layouts/productlayout"
import Products from "./pages/products"
import ProductsCategory from "./pages/productscategory"

import Store from "./store/store"
import {Provider} from 'react-redux'
import { getProducts } from "./slices/productSlice"
import { getUser } from "./slices/authSlice"

import 'react-toastify/dist/ReactToastify.css';


function App() {
   
  const token = localStorage.getItem('token') ||''; 
  
  Store.dispatch(getProducts());
  Store.dispatch(getUser(token))
  
  const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path="/" element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="register" element={<Register/>}/>

          <Route path="login" element={<Login/>}/>

          <Route path="products" element={<Productlayout/>}>
            <Route index element={<Products/>}/>
            <Route path="type/:type" element={<ProductsCategory/>}/>
            <Route path="product/:id" element={<SingleProduct/>}/>
          </Route>
          <Route path="cart" element={<Cart/>}/>
       </Route>
    )
  )

  return (
    <div className="App">
      <Provider store={Store}>
          <RouterProvider router={router}/>
      </Provider>
    </div>
  )
}

export default App

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


import Order from './pages/order'
import PrivateRoute from './private/privateroute'
import Search from './pages/search'
import Success from './pages/success'
import ErrorPage from './pages/errorpage'

import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from 'react'


function App() {
   
  const token = localStorage.getItem('token') ||''; 
  
  Store.dispatch(getProducts());
  Store.dispatch(getUser(token))

  useEffect(()=>{
    Aos.init()
  },[])

 
  
  const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path="/" errorElement={<ErrorPage/>} element={<RootLayout/>}>

          <Route index element={<Home/>}/>
          <Route path="register" element={<Register/>}/>

          <Route path="login" element={<Login/>}/>

          <Route path="products" errorElement={<ErrorPage/>} element={<Productlayout/>}>
            <Route index element={<Products/>}/>
            <Route path="type/:type" element={<ProductsCategory/>}/>
            <Route path="product/:id"  element={<SingleProduct/>}/>
          </Route>

          <Route path="cart" element={<Cart/>}/>
          <Route path="order" element={<PrivateRoute><Order/></PrivateRoute>}/>
          <Route path='search/:query' element={<Search/>} />
          <Route path='success' element={<Success/>} />
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

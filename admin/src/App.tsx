import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'


import RootLayout from "./layouts/rootlayout"

import store from "./store/store"
import {Provider} from 'react-redux'



import Login from './pages/login';
import Home from './pages/home';
import Create from './pages/create';
import Edit from './pages/edit';
import PrivateRoute from './private/privateRoute';
import { getUser } from './slices/authSlice';
import Users from './pages/users';
import Orders from './pages/orders';



function App() {

  const token = localStorage.getItem('adminToken') ||''; 

  store.dispatch(getUser(token))
   
  const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path="/" element={<RootLayout/>}>

          <Route index element={
            <PrivateRoute>
                 <Home/>
            </PrivateRoute>
          
          }/>
          <Route path='new' element={<Create/>}/>  

          <Route path='edit/:id' element={<Edit/>}/>  

          <Route path="login" element={<Login/>}/>

          <Route path='users' element={<Users/>}/>  

          <Route path='orders' element={<Orders/>}/>  

          {/* <Route path="products" element={<Productlayout/>}>
            <Route index element={<Products/>}/>
            <Route path="type/:type" element={<ProductsCategory/>}/>
            <Route path="product/:id" element={<SingleProduct/>}/>
          </Route> */}

          {/* <Route path="cart" element={<Cart/>}/>
          <Route path="order" element={<PrivateRoute><Order/></PrivateRoute>}/>
          <Route path='search/:query' element={<Search/>} />
          <Route path='success' element={<Success/>} /> */}
       </Route>
    )
  )

  return (
    <div className="App">
      <Provider store={store}>
         <RouterProvider router={router}/>
      </Provider>
    </div>
  )
}

export default App

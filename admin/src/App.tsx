import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css';
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
import Sales from './pages/sales';
import Reports from './pages/reports';
import Analytics from './pages/analytics';
import ErrorPage from './pages/errorpage';

import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from 'react';




function App() {

  const token = localStorage.getItem('adminToken') ||''; 

  store.dispatch(getUser(token))

  useEffect(()=>{
     Aos.init()
  },[])
   
  const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path="/" errorElement={<ErrorPage/>} element={<RootLayout/>}>

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
          <Route path='sales' element={<Sales/>}/>
          <Route path='reports' element={<Reports/>}/>
          <Route path='analytics' element={<Analytics/>}/>
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

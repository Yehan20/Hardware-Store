import Home from "./pages/home"
import { GlobalStyles } from "./styled/default"
import {BrowserRouter,createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from "./layouts/rootlayout"
import Login from "./pages/login"
import Register from "./pages/register"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path="/" element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
       </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App

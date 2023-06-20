import Home from "./pages/home"
import { GlobalStyles } from "./styled/default"
import {BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyles/>
         <Home/>
      </BrowserRouter>
    </div>
  )
}

export default App

import {BrowserRouter, Route, Routes} from "react-router-dom"
import Front from "./components/frontend/Front"
import Login from "./components/frontend/Login"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Front/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App

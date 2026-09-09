import {BrowserRouter, Route, Routes} from "react-router-dom"
import Front from "./components/frontend/Front"
import Login from "./components/frontend/Login"
import Otp from "./components/frontend/Otp"
import { Language } from "./components/frontend/Language"
import Consent from "./components/frontend/Consent"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Front/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Otp" element={<Otp/>}/>
      <Route path="/language" element={<Language/>}/>
      <Route path="/consent" element={<Consent/>} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App

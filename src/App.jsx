import {BrowserRouter, Route, Routes} from "react-router-dom"
import Front from "./components/frontend/Front"
import Login from "./components/frontend/Login"
import Otp from "./components/frontend/Otp"
import { Language } from "./components/frontend/Language"
import Consent from "./components/frontend/Consent"
import Steps from "./components/frontend/Steps"
import Mode from "./components/frontend/Mode"
import Ayush from "./components/ayushman/Ayush"
import General from "./components/general/General"
import  HaveRep  from "./components/reports/HaveRep"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Front/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Otp" element={<Otp/>}/>
      <Route path="/language" element={<Language/>}/>
      <Route path="/consent" element={<Consent/>} />
      <Route path="/steps" element={<Steps/>} />
      <Route path="/mode" element={<Mode/>} />
      <Route path="/ayush" element={<Ayush/>}/>
      <Route path="/general" element={<General/>} />
      <Route path="/haverepo" element={<HaveRep/>} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App

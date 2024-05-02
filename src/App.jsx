import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Welcome from "./pages/Welcome.jsx";
import Create from "./pages/signin.jsx"
import './app.css'

function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
      <Route index element={<Welcome/>}/>
      <Route path="/welcome" element={<Welcome/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/sign-in" element={<Create/>}/>


      </Routes>
        </BrowserRouter>
    </div>
    
    

  );
}
export default App

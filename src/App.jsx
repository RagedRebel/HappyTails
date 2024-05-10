import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Welcome from "./pages/Welcome.jsx";
import Create from "./pages/signin.jsx"
import Petinfo from "./pages/petInfo.jsx";
import Thankyou from "./pages/thankyou.jsx";
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
      <Route path="/:id" element={<Petinfo/>}/>
      <Route path="/thank-you" element={<Thankyou/>}/>


      </Routes>
        </BrowserRouter>
    </div>
    
    

  );
}
export default App

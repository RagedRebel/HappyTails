import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Welcome from "./pages/Welcome.jsx";

function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
      <Route index element={<Welcome/>}/>
      <Route path="/welcome" element={<Welcome/>}/>
      <Route path="/home" element={<Home/>}/>


      </Routes>
        </BrowserRouter>
    </div>
    
    

  );
}
export default App

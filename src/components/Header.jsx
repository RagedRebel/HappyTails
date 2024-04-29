import logo from "../assets/happytails.png"
import Dropdown from "./Dropdown.jsx";

function Header(){

    return(
   
        <div className="flex bg-rose-600 h-20 justify-between items-center mb-5"> 
            <div className="flex items-center">
            <img src={logo} alt="logo img" className="size-20 " ></img>
            <p className="text-white text-5xl font-bold font-logo text-center" >HappyTails</p>
            </div>
            <div className="relative mr-5">
            <Dropdown/>
            </div>
        </div>
    
             
        
    );
}
export default Header
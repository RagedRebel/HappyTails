import logo from "./assets/happytails.png"
import Dropdown from "./Dropdown.jsx";

function Header(){

    return(
        <div className="bg-rose-600 h-20 flex justify-start items-center mb-5">
            <img src={logo} alt="logo img" className="size-20 " ></img>
            <p className="text-white text-5xl font-bold font-logo text-center" >HappyTails</p>
            <Dropdown/>
        </div>
             
        
    );
}
export default Header
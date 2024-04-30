import Footer from "../components/Footer";
import Login from "../components/Login";
import Image from "../assets/welcome.jpeg"
import '../app.css'


function Welcome(){
    return(
        <div className="bg-rose-600 overscroll-none">
        <Login/>
        <Footer/>
        </div>);
}
export default Welcome;
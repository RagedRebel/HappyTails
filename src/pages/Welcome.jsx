import Footer from "../components/Footer";
import Login from "../components/Login";
import '../app.css'


function Welcome(){
    return(
        <div className="bg-rose-600">
        <Login/>
        <Footer/>
        </div>);
}
export default Welcome;
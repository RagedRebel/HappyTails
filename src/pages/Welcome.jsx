import Footer from "../components/Footer";
import '../app.css'


function Welcome(){
    return(
        <>
        <p>Welcomeeee</p>
        <Footer/>
        <a href="/home" target="_self">
        <button className="bg-teal-300 " >Log in</button>
        </a>
        </>
    );
}
export default Welcome
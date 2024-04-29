import Footer from "../components/Footer";


function Welcome(){
    return(
        <>
        <p>Welcomeeee</p>
        <Footer/>
        <a href="/home" target="_self">
        <button className="bg-teal-300 border-e-white" >Log in</button>
        </a>
        </>
    );
}
export default Welcome
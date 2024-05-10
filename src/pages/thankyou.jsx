import Footer from "../components/Footer";
import {Link} from "react-router-dom"
function Thankyou(){
    return(
        <>
        <div className="flex-col justify-center items-center inline-flex w-screen h-screen pb-12 bg-rose-600">
            <p className="font-logo text-9xl font-semibold">Thank you for adopting a pet!</p>
        <Link to={'/home'}>
            <button className=" bg-indigo-700 rounded-full text-white text-semibold m-3 p-1.5 w-auto h-auto hover:bg-purple-950 transition ease-in-out duration-300 hover:scale-110">
                Back to Home
            </button>
        </Link>
        </div>
        <Footer/>
        </>
    );
}

export default Thankyou;
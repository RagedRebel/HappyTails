import supabase from "../Supabase";
import {Link} from "react-router-dom"


function Petdesc({pet}){

    const handleAdopt=async()=>{
        const{data,error}=await supabase
        .from('pets')
        .delete()
        .eq('id',pet.id)

    if (error){
        console.log(error)
    }
    if(data){
        <Link to={'/thank-you'}/>
        console.log(data)
    }
    }
    return(
    
    <div className="flex-col justify-start items-center pb-12 w-screen h-screen inline-flex bg-rose-600">
    <div className="place-self-start ">
    <a href="/home" target="_self">
        <p className="  text-black text m-4 hover:text-sky-500 hover:underline text-lg" >←Back to Home</p>
    </a> 
    </div>
    <div className=" border-zinc-500 flex-col justify-between items-center inline-flex border rounded p-4 mt-4  shadow-lg w-4/5 h-4/5 bg-slate-300">
        <img className="aspect-video max-h-64 rounded-sm shadow-md" src={pet.pet_img} alt="Image" />
        <h2 className="text-5xl font-petname">{pet.pet_name}</h2>
        <p className="text-xl italic">{pet.pet_type} : {pet.pet_breed}</p>
        <p className="text-xl italic">Age : {pet.Age} years</p>

    
        <button className=" bg-sky-500 rounded-full text-black m-3 p-1.5 w-auto h-auto hover:bg-emerald-400 transition ease-in-out duration-300 hover:scale-110 " onClick={handleAdopt}>Adopt Pet</button>
      </div>
    </div>
    
    );

}
export default Petdesc
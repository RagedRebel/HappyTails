
function Petdesc({pet}){
    return(
    
    <div className="flex-col justify-start items-center pb-12 w-screen h-screen inline-flex bg-rose-600">
    <div className="place-self-start ">
    <a href="/home" target="_self">
        <p className="  text-black text m-4 hover:text-sky-500 hover:underline text-lg" >←Back to Home</p>
    </a> 
    </div>
    <div className="border-black flex-col justify-middle items-center inline-flex border rounded p-4 mt-4  shadow-lg w-4/5 h-4/5 bg-slate-300">
        <img className="aspect-video max-h-64 rounded-sm shadow-md" src={pet.pet_img} alt="Image" />
        <h2 className="text-5xl font-sans font-semibold p-10 ">{pet.pet_name}</h2>
        <p className="text-gray-600 text-sm italic">{pet.pet_breed}</p>
        <button className=" bg-sky-500 rounded-full text-black m-3 p-1.5 w-auto h-auto hover:bg-emerald-400 transition ease-in-out duration-300 hover:scale-110 ">Adopt Pet</button>
      </div>
    </div>
    
    );

}
export default Petdesc
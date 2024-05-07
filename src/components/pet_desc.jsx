
function Petdesc({pet}){
    return(
      <>
    <div className="flex justify-center items-center pb-12 h-screen bg-rose-600">
    <a href="/home" target="_self">
        <button className="  text-black text p-2 hover:text-sky-500 hover:underline place-self-start " >←Back to Home</button>
    </a> 
    <div className="border-black flex-col justify-middle items-center inline-flex border rounded p-4  shadow-lg w-4/5 h-4/5 bg-slate-300">
        <img className="aspect-video max-h-64 rounded-sm shadow-md" src={pet.pet_img} alt="Image" />
        <h2 className="text-5xl font-sans font-semibold p-10 ">{pet.pet_name}</h2>
        <p className="text-gray-600 text-sm italic">{pet.pet_breed}</p>
      </div>
      </div>
    </>
    );

}
export default Petdesc
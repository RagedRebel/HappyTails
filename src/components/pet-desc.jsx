
function Petdesc({pet}){
    return(
    <div className="flex justify-center items-center m-auto h-screen bg-slate-200 shadow-md rounded-lg border-2 border-gray-400">
        
        <p className=" text-amber-500 font-logo">{pet.pet_name}</p>
    </div>
    );

}
export default Petdesc
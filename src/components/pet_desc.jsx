
function Petdesc({pet}){
    return(
    <div className="border-black flex-col justify-center items-center inline-flex border rounded p-2  shadow-lg">
        <img className="size-20 rounded-full " src={pet.pet_img} alt="Image" />
        <h2 className="text-xl font-sans font-semibold">{pet.pet_name}</h2>
        <p className="text-gray-600 text-sm italic">{pet.pet_breed}</p>
      </div>
    );

}
export default Petdesc
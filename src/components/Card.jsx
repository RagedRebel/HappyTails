import '../app.css'
import {Link} from "react-router-dom"


function Card({pet}) {
  return (
    <Link to={'/'+pet.id}>
    <div className="border-black flex-col justify-center items-center inline-flex  w-32 border rounded p-2 mt-10 mx-2 shadow-lg transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 ">
      <img className="size-20 rounded-full " src={pet.pet_img} alt="Image" />
      <h2 className="text-xl font-sans font-semibold">{pet.pet_name}</h2>
      <p className="text-gray-600 text-sm italic">{pet.pet_breed}</p>
    </div>
    </Link>
   
  );
}

export default Card;

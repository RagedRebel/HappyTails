import dog from "./assets/germanshepherd.jpeg";


function Card() {
  return (
    <div className="border-black flex flex-col justify-center items-center w-32  border rounded p-2 m-2 shadow-lg">
      <img className="h-20 w-20 rounded-full " src={dog} alt="Image" />
      <h2 className="text-xl">Dog</h2>
      <p className="text-gray-600 text-sm">German Shepherd</p>
    </div>
  );
}

export default Card;

import dog from "./assets/germanshepherd.jpeg";


function Card() {
  return (
    <>
      <h2 className="text-xl font-bold bg-red-700">Dog</h2>
      <p className="text-gray-600 bg-red-800">German Shepherd</p>
      <img className="h-10 w-10" src={dog} alt="Image" />
    </>
  );
}

export default Card;

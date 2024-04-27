import dog from "./assets/germanshepherd.jpeg";


function Card() {
  return (
    <div className="border-black flex-col justify-center items-center inline-flex  w-32 border rounded p-2 m-2 shadow-lg transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 ">
      <img className="size-20 rounded-full " src={dog} alt="Image" />
      <h2 className="text-xl font-sans font-semibold">Dog</h2>
      <p className="text-gray-600 text-sm italic">German Shepherd</p>
    </div>
  );
}

export default Card;

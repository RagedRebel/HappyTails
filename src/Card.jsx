import dog from "./assets/germanshepherd.jpeg";


function Card() {
  return (
    <>
      <h2>Dog</h2>
      <p className="text-gray-600">German Shepherd</p>
      <img className="h-10 w-10" src={dog} alt="Image" />
    </>
  );
}

export default Card;

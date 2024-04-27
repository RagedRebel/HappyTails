import dog from "./assets/germanshepherd.jpeg"

function Card(){
    
    return(
        <div className="card">
            <h2 className="card-title">Dog</h2>
            <p className="card-text">German Shepherd</p>
            <img className="card-pic" alt="Image"src={dog}></img>
        </div>
    );

}
export default Card
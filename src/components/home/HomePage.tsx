import car1 from "../../assets/1.jpg";
import car2 from "../../assets/2.jpg";
import car3 from "../../assets/3.jpg";


const HomePage = () => {
    return (
        <>
            <h1 className="text-center m-5">Home Page</h1>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={car1} className="d-block w-100" alt="1.jpg"/>
    </div>
    <div className="carousel-item">
      <img src={car2} className="d-block w-100" alt="2.jpg"/>
    </div>
    <div className="carousel-item">
      <img src={car3} className="d-block w-100" alt="3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}

export default HomePage
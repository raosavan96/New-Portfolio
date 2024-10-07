import Carousel from "react-bootstrap/Carousel";
import myImg from "../images/sawan.png";

function CarouselSec() {
  const prevIconStyle = {
    backgroundColor: "white", // White left arrow
    width: "20px",
    height: "20px"
  };

  const nextIconStyle = {
    position: "absolute",
    top: "0", // Red right arrow
    width: "20px",
    height: "20px"
  };

  return (
    <Carousel
      data-bs-theme="dark"
      indicators={true}
      controls={true}
      prevIcon={
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
          style={prevIconStyle}
        />
      }
      nextIcon={
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
          style={nextIconStyle}
        />
      }
    >
      <Carousel.Item className="h-screen pt-5">
        <div className="grid grid-cols-2 ">
          <div className="col-span-1 mt-5">
            <h1 className="text-white text-6xl">01</h1>
            <h2 className="text-white mt-3">Fullstack Project</h2>
            <p className="text-neutral-600 mt-3 text-base pe-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
              facere quia quis reiciendis quam nihil? Recusandae placeat
              obcaecati doloremque numquam quam adipisci tenetur iusto
              exercitationem.
            </p>

            <h6 className="text-green-400">Html 5, Css 3, JavaScript</h6>
            <div className="border-b-stone-700 mt-5 border-b-2"></div>
          </div>
          <div className="col-span-1">
            <img src={myImg} />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSec;

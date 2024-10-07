import Carousel from "react-bootstrap/Carousel";
import dvgImg from "../images/dvg.png";
import infoImg from "../images/infogear.png";
import wethImg from "../images/weather.png";
import todoImg from "../images/todo.png";
import addImg from "../images/addcart.png";
import "./CarouselCss.css";
import UrlBtn from "./UrlBtn/UrlBtn";

function CarouselSec() {
  const projectData = [
    {
      id: "01",
      proName: "Fullstack Project",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, facere quia quis reiciendis quam nihil? Recusandae placeat obcaecati doloremque numquam quam adipisci tenetur iusto exercitationem.",
      tech: "Html 5, Css 3, JavaScript",
      img: dvgImg
    },
    {
      id: "02",
      proName: "Fullstack Project",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, facere quia quis reiciendis quam nihil? Recusandae placeat obcaecati doloremque numquam quam adipisci tenetur iusto exercitationem.",
      tech: "Html 5, Css 3, JavaScript",
      img: infoImg
    },
    {
      id: "03",
      proName: "Fullstack Project",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, facere quia quis reiciendis quam nihil? Recusandae placeat obcaecati doloremque numquam quam adipisci tenetur iusto exercitationem.",
      tech: "Html 5, Css 3, JavaScript",
      img: wethImg
    },
    {
      id: "04",
      proName: "Fullstack Project",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, facere quia quis reiciendis quam nihil? Recusandae placeat obcaecati doloremque numquam quam adipisci tenetur iusto exercitationem.",
      tech: "Html 5, Css 3, JavaScript",
      img: todoImg
    },
    {
      id: "05",
      proName: "Fullstack Project",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, facere quia quis reiciendis quam nihil? Recusandae placeat obcaecati doloremque numquam quam adipisci tenetur iusto exercitationem.",
      tech: "Html 5, Css 3, JavaScript",
      img: addImg
    }
  ];

  const prevIconStyle = {};

  const nextIconStyle = {};

  return (
    <>
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
        {projectData.map((value) => (
          <Carousel.Item className="p-3 md:p-5">
            <div className=" grid grid-cols-2  ">
              <div className="col-span-2 md:col-span-1  mt-5 md:pe-5 projSec_1">
                <h1 className="text-white text-6xl proDesri">{value.id}</h1>
                <h2 className="text-white mt-3">{value.proName}</h2>
                <p className="text-neutral-600 mt-3 text-base md:pe-5">
                  {value.desc}
                </p>

                <h6 className="text-green-400">{value.tech}</h6>
                <div className="border-b-stone-700 mt-5 border-b-2" />

                <div className="flex gap-3 mt-5">
                  <UrlBtn />
                </div>
              </div>
              <div className="col-span-2 flex justify-center items-center md:col-span-1 mt-5 md:px-5 projSec_2">
                <img className="project_img" src={value.img} alt="" />
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default CarouselSec;

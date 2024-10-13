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
      proName: "DVG Soft",
      desc: "This frontend project for 'DVG Soft' was built using HTML5, CSS3, Bootstrap 5, and JavaScript. It features a clean, responsive layout showcasing various services offered by the company.",
      tech: "Html 5, Css 3, Bootstrap  5, JavaScript",
      img: dvgImg,
      url: "https://dvgsoft.com/"
    },
    {
      id: "02",
      proName: "Infogear",
      desc: "Infogear Technology is a powerful blend of technology and security solutions, which caters to the diverse needs of both private businesses and government agencies in Tanzania.",
      tech: "Html 5, Css 3, Bootstrap  5, JavaScript",
      img: infoImg,
      url: "https://infogear.co.tz/"
    },
    {
      id: "03",
      proName: "Weather Info",
      desc: "This React.js project uses the OpenWeather API to provide real-time weather data for any searched city. It features dark and light mode options, displays key weather information like temperature, and is design with React js (jsx), Tailwind, and JavaScript.",
      tech: "React Js, Tailwind , JavaScript",
      img: wethImg,
      url: "https://weather-info-git-master-sawan-s-projects.vercel.app/",
      gitUrl: "https://github.com/raosavan96/WeatherInfo.git"
    },
    {
      id: "04",
      proName: "My Task",
      desc: "This project is a task management application built using React.js, JavaScript, Tailwind CSS, and CSS3. It allows users to add, edit, and delete tasks, with features to track task completion. Additionally, it includes a dark and light mode for enhanced user experience. The project showcases dynamic state management using Redux and a responsive UI styled with Tailwind.",
      tech: "React Js, Tailwind , JavaScript",
      img: todoImg,
      url: "https://todo-git-main-sawan-s-projects.vercel.app/",
      gitUrl: "https://github.com/raosavan96/Todo.git"
    },
    {
      id: "05",
      proName: "E-commerce ",
      desc: "This e-commerce project is built using React.js, Redux, JavaScript, and Tailwind CSS. It features a dynamic product listing with options to add items to the cart, remove them, and create a wishlist. The site provides a smooth user experience with essential e-commerce functionalities, such as managing the shopping cart and completing purchases. Tailwind CSS ensures a modern, responsive design while Redux manages the state efficiently for seamless user interactions.",
      tech: "React Js, Redux, Tailwind , JavaScript",
      img: addImg,
      url: "https://add-cart-sawan-s-projects.vercel.app/",
      gitUrl: "https://github.com/raosavan96/AddCart.git"
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
        {projectData.map((value, index) => (
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
                  <UrlBtn urlValue={value} />
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

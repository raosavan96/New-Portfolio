import React from "react";
import CvBtn from "./CvBtn/CvBtn";
import SocialIcon from "./SocialIcon/SocialIcon";
import "./MainFront.css";
import { Link } from "react-router-dom";
import mainImg from "../../images/sawan.png";
import crBig from "../../images/cr-big.png";
import crSmall from "../../images/cr-small.png";
import ProfBio from "./ProfBio/ProfBio";
import Title from "./Title/Title";

function MainFront() {
  const socialIcon = [
    {
      iconUrl: "fa-brands fa-github text-green-400",
      to: "https://github.com/raosavan96"
    },
    {
      iconUrl: "fa-brands fa-linkedin-in text-green-400",
      to: "https://www.linkedin.com/in/savan-yadav-47607a272/"
    },
    {
      iconUrl: "fa-brands fa-whatsapp text-green-400",
      to: "https://wa.me/9636447793"
    },
    {
      iconUrl: "fa-brands fa-twitter text-green-400",
      to: "https://x.com/Savan9636"
    }
  ];

  const imgSec = [
    {
      imgUrl: mainImg,
      altImg: ""
    },
    {
      imgUrl: crBig,

      altImg: ""
    },
    {
      imgUrl: crSmall,

      altImg: ""
    }
  ];

  const profBio = [
    {
      count: 1,
      nameProf: "Over years of  experience"
    },

    {
      count: 8,
      nameProf: "Technologies know"
    }
  ];

  return (
    <>
      <div class="grid grid-cols-10 gap-4 pt-16">
        <div className="img_sec_per1 animate__animated   animate__fadeInLeft  col-span-10 md:col-span-6">
          <p className="text-neutral-500 w-full text-xl md:text-start">
            <Title />
          </p>
          <h1 className="text-4xl  text-white hello_im">Hello I'm</h1>
          <h1 className="xl:text-6xl lg:text-5xl text-green-400 ">
            Sawan Kumar Yadav
          </h1>
          <p className="text-neutral-600 text-sm tracking-wide mt-3">
            I am a frontend developer with over one year of experience and
            expertise in HTML5, CSS3, Bootstrap 5, and Tailwind CSS for
            responsive web design. Proficient in JavaScript and React.js, I
            create dynamic and interactive user interfaces. Additionally, I have
            experience with jQuery to enhance website functionality and utilize
            Figma and Photoshop for UI/UX design and graphic editing. I am
            currently learning the MERN Stack to expand my development skills.
          </p>

          <div className="flex mt-5 items-center flex-col md:flex-row">
            <div>
              <CvBtn />
            </div>
            <div className="lg:ms-5 md:ms-4 btns_secn_social flex gap-3">
              {socialIcon.map((value) => (
                <Link to={value.to} target="blanck">
                  <SocialIcon icons={value} />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="img_sec_per2 col-span-10 md:col-span-4 h-auto">
          <div className="img_sec animate__animated  animate__bounceIn m-auto overflow-hidden rounded-full  position-relative">
            <img
              src={mainImg}
              alt=""
              className="position-absolute  top-0 left-0 w-full h-full"
            />
            <img
              src={crBig}
              alt=""
              className="position-absolute rotate_back top-0 left-0 w-full h-full"
            />
            <img
              src={crSmall}
              alt=""
              className="position-absolute rotate top-0 left-0 w-full h-full"
            />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 pt-8 ">
        {profBio.map((value) => (
          <div className="col-span-4 md:col-span-1 animate__animated animate__fadeInUp  sm:col-span-2">
            <ProfBio prof={value} />
          </div>
        ))}
      </div>
    </>
  );
}

export default MainFront;

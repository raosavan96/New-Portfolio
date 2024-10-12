import React from "react";
import CvBtn from "./CvBtn/CvBtn";
import SocialIcon from "./SocialIcon/SocialIcon";
import "./MainFront.css";
import { Link } from "react-router-dom";
import mainImg from "../../images/sawan.png";
import crBig from "../../images/cr-big.png";
import crSmall from "../../images/cr-small.png";
import ProfBio from "./ProfBio/ProfBio";

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
      to: ""
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
      nameProf: "Years of  experience"
    },
    {
      count: 4,
      nameProf: "Projects completed"
    },
    {
      count: 4,
      nameProf: "Technologies know"
    },
    {
      count: 233,
      nameProf: "Code commits"
    }
  ];

  return (
    <>
      <div class="grid grid-cols-10 gap-4 pt-16">
        <div className="img_sec_per1 col-span-10 md:col-span-6">
          <p className="text-neutral-500 text-xl md:text-start">
            Frontend Developer
          </p>
          <h1 className="text-4xl  text-white">Hello I'm</h1>
          <h1 className="xl:text-6xl lg:text-5xl text-green-400 ">
            Sawan Kumar Yadav
          </h1>
          <p className="text-neutral-600 text-sm tracking-wide mt-3">
            A passionate Frontend Developer with 1 year of experience focused on
            crafting elegant digital experiences. I specialize in building
            modern, responsive, and intuitive interfaces using React.js,
            JavaScript, and HTML/CSS. I bring design ideas to life through
            clean, efficient code, always striving to exceed client
            expectations.
          </p>

          <div className="flex mt-5 items-center flex-col md:flex-row">
            <div>
              <CvBtn />
            </div>
            <div className="lg:ms-5 md:ms-4 btns_secn_social flex gap-3">
              {socialIcon.map((value) => (
                <Link to={value.to}>
                  <SocialIcon icons={value} />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="img_sec_per2 col-span-10 md:col-span-4 h-auto">
          <div className="img_sec m-auto overflow-hidden rounded-full  position-relative">
            {imgSec.map((value) => (
              <img
                src={value.imgUrl}
                alt={value.altImg}
                className="position-absolute top-0 left-0 w-full h-full"
              />
            ))}
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 pt-8 ">
        {profBio.map((value) => (
          <div className="col-span-4 md:col-span-1  sm:col-span-2">
            <ProfBio prof={value} />
          </div>
        ))}
      </div>
    </>
  );
}

export default MainFront;

import React from "react";
import SkillCard from "./SkillCard";
import "boxicons";
function SkillBox() {
  const skillBox = [
    {
      iconUrl: "fa-brands fa-html5"
    },
    {
      iconUrl: "fa-brands fa-css3-alt"
    },
    {
      iconUrl: "fa-brands fa-js"
    },
    {
      iconUrl: "fa-brands fa-react"
    },
    {
      iconUrl: "bx bxl-tailwind-css"
    },
    {
      iconUrl: "fa-brands fa-bootstrap"
    },
    {
      iconUrl: "fa-brands fa-figma"
    },
    {
      iconUrl: "bi bi-images"
    }
  ];
  return (
    <>
      <div className="mt-4 mx-auto mb-5 animate__animated animate__fadeInUp">
        <div className="grid sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-y-6">
          {skillBox.map((value) => (
            <div className=" sm:col-span-2  h-32 sm:w-52 md:col-span-1 lg:col-span-1 sm:h-52 md:h-36 md:w-36 flex justify-center items-center  rounded-md   bg-zinc-800 ">
              <SkillCard iconClass={value} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SkillBox;

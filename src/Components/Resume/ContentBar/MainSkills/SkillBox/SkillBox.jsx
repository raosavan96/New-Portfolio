import React from "react";
import SkillCard from "./SkillCard";

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
      iconUrl: "fa-brands fa-bootstrap"
    },
    {
      iconUrl: "fa-brands fa-figma"
    }
  ];
  return (
    <>
      <div className="mt-4">
        <div className="grid grid-cols-4 gap-y-6">
          {skillBox.map((value) => (
            <div className="col-span-2 md:col-span-2 lg:col-span-1 h-32 w-32 flex justify-center items-center  rounded-md   bg-zinc-800 ">
              <SkillCard iconClass={value} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SkillBox;

import React from "react";
import ResumeBtnMain from "../../ResumeBtns/ResumeBtnMain";
import LeftSideHed from "../../LeftSideHed/LeftSideHed";
import Skills from "./Skills";

function MainSkills() {
  return (
    <div className="container overflow-hidden">
      <div className="grid grid-cols-10 gap-3 mt-5">
        <div className="col-span-10 md:col-span-3">
          <LeftSideHed />
          <div className="mt-3">
            <ResumeBtnMain />
          </div>
        </div>

        <div className="col-span-10 md:col-span-7 px-4">
          <div className="animate__animated animate__fadeIn">
            <h1 className="text-white lg:text-3xl">My Skills</h1>
            <p className="text-neutral-600 text-sm mt-3">
            I am a frontend developer with over one year of experience and expertise in HTML5, CSS3, Bootstrap 5, and Tailwind CSS for responsive web design. Proficient in JavaScript and React.js, I create dynamic and interactive user interfaces. Additionally, I have experience with jQuery to enhance website functionality and utilize Figma and Photoshop for UI/UX design and graphic editing. I am currently learning the MERN Stack to expand my development skills.
            </p>
          </div>

          <div>
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSkills;

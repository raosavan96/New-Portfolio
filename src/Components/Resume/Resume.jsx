import React from "react";
import ResumeBtnMain from "./ResumeBtns/ResumeBtnMain";
import LeftSideHed from "./LeftSideHed/LeftSideHed";
import Experience from "./ContentBar/MainExperience/Experience";

function Resume() {
  return (
    <div className="container">
      <div className="grid grid-cols-10 gap-3 mt-5">
        <div className="col-span-10 md:col-span-3">
          <LeftSideHed />
          <div className="mt-3">
            <ResumeBtnMain />
          </div>
        </div>

        <div className="col-span-10 md:col-span-7 px-4">
          <div>
            <h1 className="text-white lg:text-3xl">My Experience</h1>
            <p className="text-neutral-300 text-sm mt-3">
              Lorem ipsum dolor sit amet, consectretur adipiscing elit.
              Scelerisque consequat, faucibus et, et.
            </p>
          </div>

          <div>
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;

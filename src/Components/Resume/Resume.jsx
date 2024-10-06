import React from "react";
import ResumeBtns from "./ResumeBtns/ResumeBtns";
import { Link, Outlet } from "react-router-dom";
import ExperienceSec from "./SideSec/ExperienceSec/ExperienceSec";
import SideHed from "./SideSec/SideHed/SideHed"

function Resume() {
  const resumeBtn = [
    {
      btnName: "Experience"
    },
    {
      btnName: "Education"
    },
    {
      btnName: "Skills"
    },
    {
      btnName: "About me"
    }
  ];

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-10 gap-3 mt-5">
          <div className="col-span-3 ">
            <h1 className="text-white lg:text-4xl">Why hire me?</h1>
            <p className="text-neutral-300 text-sm mt-4 pe-6">
              Lorem ipsum dolor sit amet, consectretur adipiscing elit.
            </p>

            <div className="mt-3">
              {resumeBtn.map((value) => (
                <Link to={value.url}>
                  <ResumeBtns resBtn={value} />
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-6 px-4">
            <div>
              <div>
                <SideHed />
              </div>
              <div>
                <ExperienceSec />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;

import React from "react";

function AboutLine({ aboutMe }) {
  const { meName, meData } = aboutMe;
  return (
    <>
      <div className=" grid grid-cols-4 items-center mt-4">
        <p className=" text-neutral-600 me-4 m-0 text-base">{meName}</p>
        <h6 className="text-white m-0">{meData}</h6>
      </div>
    </>
  );
}

export default AboutLine;

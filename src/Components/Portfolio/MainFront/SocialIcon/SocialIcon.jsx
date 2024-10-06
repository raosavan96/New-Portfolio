import React from "react";

function SocialIcon({ icons }) {
  console.log(icons)
  return (
    <>
      <button className="border-1 border-green-400 w-10 h-10 rounded-full flex items-center justify-center">
      <i className={icons.iconUrl}></i>
      </button>
    </>
  );
}

export default SocialIcon;

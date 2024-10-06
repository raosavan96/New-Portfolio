import React from "react";

function CvBtn() {
  return (
    <>
      <button className="border-1 border-green-400 md:text-xs md:px-2 lg:px-3 lg:text-lg px-4 py-3 rounded-3xl text-green-400">
        DOWNLOAD CV
        <span>
          <i class="fa-solid fa-download ms-2"></i>
        </span>
      </button>
    </>
  );
}

export default CvBtn;

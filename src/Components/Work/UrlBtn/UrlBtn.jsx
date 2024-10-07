import React from "react";

function UrlBtn() {
  const urlLink = [
    {
      url: "",
      class: "fa-solid fa-arrow-right-long transform ",
      classs: "-rotate-45 hover:rotate-0"
    },
    {
      url: "",
      class: "fa-brands fa-github"
    }
  ];

  return (
    <>
      {urlLink.map((value) => (
        <button
          className={`h-12 w-12 ${value.classs}  rounded-full bg-neutral-600 text-white text-lx flex justify-center items-center`}
        >
          <i class={value.class}></i>
        </button>
      ))}
    </>
  );
}

export default UrlBtn;

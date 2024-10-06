import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

function Services() {
  const servicesSec = [
    {
      id: "01",
      title: "Frontend Development",
      desc:
        "Loream ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat," +
        " faucibus et, et.",
      btnUrl: "hi",
      btnBg: "green-400",
      idBorder: "1px green"
    },
    {
      id: "02",
      title: "UI/UX Design",
      desc:
        "Loream ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat," +
        " faucibus et, et.",
      btnUrl: "hi",
      btnBg: "white",
      idBorder: "1px white"
    }
  ];

  return (
    <>
      <div className="container">
        <div className="grid gap-5 grid-cols-2 mt-5">
          {servicesSec.map((value) => (
            <div className="col-span-2 mt-2 md:col-span-1">
              <ServiceCard cardValue={value} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;

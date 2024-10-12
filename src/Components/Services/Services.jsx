import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

function Services() {
  const servicesSec = [
    {
      id: "01",
      title: "UI/UX Design",
      desc:
        "I create engaging and user-centered designs that enhance user satisfaction and interaction. By focusing on usability and aesthetics, I ensure that every digital experience is both functional and visually appealing." +
        " faucibus et, et.",
      btnUrl: "hi",
      btnBg: "white",
      idBorder: "1px white"
    },
    {
      id: "02",
      title: "Web Design",
      desc:
        "I build visually appealing and fully responsive websites that cater to diverse audiences. By blending creativity with functionality, I aim to create websites that leave a lasting impression and drive engagement." +
        " faucibus et, et.",
      btnUrl: "hi",
      btnBg: "white",
      idBorder: "1px white"
    },
    {
      id: "03",
      title: "Frontend Development",
      desc:
        "With expertise in React.js, JavaScript, HTML, and CSS, I develop dynamic web applications that deliver exceptional performance. I focus on clean code and best practices to ensure maintainability and scalability." +
        " faucibus et, et.",
      btnUrl: "hi",
      btnBg: "green-400",
      idBorder: "1px green"
    }
  ];

  return (
    <>
      <div className="container">
        <div className="grid gap-5 grid-cols-2 mt-5 mb-5">
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

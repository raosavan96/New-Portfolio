import React from "react";
import ContactCard from "./ContactCard";

function ContactDatails() {
  const contactCard = [
    {
      iconClass: "fa-solid fa-phone",
      conName: "Phone",
      manName: "9636447793",
      url: "tel:${9636447793}"
    },
    {
      iconClass: "fa-solid fa-envelope",
      conName: "Email",
      manName: "savanyadav377@gmail.com",
      url: "mailto:${savanyadav377@gmail.com}"
    },
    {
      iconClass: "fa-solid fa-location-arrow",
      conName: "Address",
      manName: "Vill. bhojyara th. chaksu jaipur (raj) 303903"
    }
  ];
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center contact-card">
        {contactCard.map((value) => (
          <ContactCard data={value} />
        ))}
      </div>
    </>
  );
}

export default ContactDatails;

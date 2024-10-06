import React from "react";

function SkillCard({ iconClass }) {
  const { iconUrl } = iconClass;
  return (
    <>
      <div>
        <i  className={`${iconUrl} text-6xl text-white`}></i>
      </div>
    </>
  );
}

export default SkillCard;

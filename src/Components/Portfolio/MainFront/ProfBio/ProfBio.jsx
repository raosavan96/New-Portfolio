import React from "react";

function ProfBio({ prof }) {
  const { count, nameProf } = prof;
  return (
    <>
      <div className="flex items-center justify-center gap-3 mt-4 text-neutral-600 text-center md:text-start">
        <div>
          <h1 className="font-extrabold">{count}</h1>
        </div>
        <div className="text-start max-w-20">
          <h6>{nameProf}</h6>
        </div>
      </div>
    </>
  );
}

export default ProfBio;

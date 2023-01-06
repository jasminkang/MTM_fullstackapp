import React from "react";

const HomeHero = () => {
  return (
    <div className="flex items-center h-screen mb-12 bg-fixed bg-center bg-cover centre-entry-img">
      <div className="absolute w-full h-screen bg-ocean/70 z-[2] object-cover" />

      <div className="p-5 mt-[2rem] mb-0 text-white z-[2]">
        <h2 className="text-6xl">Muscle Therapy Massage</h2>
        <h6 className="text-xl font-light">
          {" "}
          Massages to suit everyone at the wellbeing Centre.
        </h6>
      </div>
    </div>
  );
};

export default HomeHero;

import React from "react";

const PageTitle = ({
  heading,
  message,
}) => {
  return (
    <div className="flex w-full h-auto p-5 z-[2] mt-[2rem] mb-0">
      <h2 className="text-5xl">{heading}</h2>
      <h6 className="text-2xl"> {message} </h6>
    </div>
  );
};

export default PageTitle;
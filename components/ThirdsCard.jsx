import React from "react";

const ThirdsCard = ({
  headOne,
  textOne,
  headTwo,
  textTwo,
  headThree,
  textThree,
}) => {
  return (
    <div className="flex w-full h-auto p-5 z-[2] mt-[2rem] mb-0">
      <p className="flex w-1/3 text-xl">
        {headOne} <br></br>
        {textOne}{" "}
      </p>
      <p className="flex w-1/3 text-xl">
        {headTwo} <br></br>
        {textTwo}{" "}
      </p>
      <p className="flex w-1/3 text-xl">
        {headThree} <br></br>
        {textThree}{" "}
      </p>
    </div>
  );
};

export default ThirdsCard;

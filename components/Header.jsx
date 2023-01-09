import React, { useEffect, useState } from "react";
import Modal from "./Modal";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <div className="sticky top-0 w-full left-0 bg-inherit flex items-center justify-between p-4 border-b border-solid border-white">
        <h1 className="text-3xl select-none sm:text-6xl">
          Muscle Therapy Massage
        </h1>
        <i
          onClick={() => setOpenModal(true)}
          className="fa-solid fa-user text-xl duration-300 hover:opacity-40 cursor-pointer sm:text-3xl"
        ></i>
      </div>
      <div className=" z-0 text-align-center p-2 w-full block bg-ocean h-8">
        <p className="overflow:hidden text-xs flex-auto text-white">
          Port Macquarie NSW 2444 &emsp; 0403 587 487 &emsp;
          muscletherapymassage@gmail.com
        </p>
      </div>
      ); 
    </>
  );
};

export default Header;


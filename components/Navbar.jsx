import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="sticky  top-0 left-0 w-full z-10 ease-in- duration-300">
      <div className="m-auto flex justify-between items-center p-2 bg-white ">
        <Link href="/">
          {" "}
          <Image
            src="/images/logo.jpg"
            alt="client wrist being massaged"
            width="150"
            height="100"
            className="header-logo flex top-0"
          />
        </Link>
        <ul className="hidden sm:flex ">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4">
            <Link href="/services">Services</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="p-4">
            <Link href="https://muscle-therapy-massage-106759.square.site/">
              Bookings
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Menu */}

        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full min-h-screen ease-in duration-300 text-transparent bg-ocean"
              : "sm:hidden absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-full min-h-screen text-center ease-in duration-300 bg-ocean"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500 text-white"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500  text-white"
            >
              <Link href="/about">About</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500  text-white"
            >
              <Link href="/services">Services</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500  text-white"
            >
              <Link href="/contact">Contact</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500  text-white"
            >
              <Link href="https://muscle-therapy-massage-106759.square.site/">
                Bookings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

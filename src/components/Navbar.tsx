"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5"; // Import Menu and Close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle menu toggle

  return (
    <div className="fixed top-0 left-0 z-30 w-full bg-[#044E83] lg:flex justify-between">
      {/* Navbar Container */}
      <div className="flex items-center justify-between h-[80px] px-4 py-6 sm:px-2 sticky top-0 z-30">
        {/* Logo */}
        <Link href="/">
          <Image
            className="lg:h-[113px] w-auto sm:h-[90px] sm:ml-2 lg:ml-4 mt-12"
            src="/images/logo-governor.png"
            alt="logo-governor"
            height={113}
            width={90}
          />
        </Link>

        {/* Lg Screen Title */}
        <h1 className="hidden lg:block text-shadow text-[20px] text-[#B9D8F3] font-extrabold px-20">
          Tuition Free Program on Latest Technologies
        </h1>

        {/* Mobile Title */}
        <h1 className="lg:hidden text-shadow text-[1rem] text-[#B9D8F3] font-extrabold">
          Tuition Free Program
        </h1>

        {/* Mobile Menu Icon */}
        {isOpen ? (
          <IoClose
            size={28}
            color="white"
            className="lg:hidden cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <IoMenu
            size={28}
            color="white"
            className="lg:hidden cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>

      {/* Navigation Links */}
      <ul
        className={`lg:flex lg:items-center lg:gap-10 lg:static lg:bg-transparent lg:p-0 lg:h-auto lg:w-auto 
          ${
            isOpen ? "block" : "hidden"
          } absolute top-[80px] right-0 z-[-30] w-full bg-[#044E83] p-5 leading-[40px] text-[18px]`}
      >
        <li className="text-[#faf9f6] hover:text-white mb-4 lg:mb-0">
          <Link href="/">Home</Link>
        </li>
        <li className="text-[#faf9f6] hover:text-white mb-4 lg:mb-0">
          <Link href="/apply">Apply</Link>
        </li>
        <li className="text-[#faf9f6] hover:text-white mb-4 lg:mb-0">
          <Link href="/jobs">Jobs</Link>
        </li>
        <li className="text-[#faf9f6] hover:text-white mb-4 lg:mb-0">
          <Link href="/results">Results</Link>
        </li>

        {/* Dropdown Links */}
        <li>
          <select className="bg-[#044E83] border-none text-white w-full lg:w-24">
            <option className="bg-white hidden hover:bg-white text-black">
              Courses
            </option>
            <optgroup className="bg-white text-black" label="Core Courses">
              <option className="bg-white text-black">
                Programming Fundamentals
              </option>
              <option className="bg-white text-black">Web2 Using NextJS</option>
              <option className="bg-white text-black">Earn as You Learn</option>
            </optgroup>
            <optgroup className="bg-white text-black" label="Advanced Courses">
              <option className="bg-white text-black">
                Web 3 and Metaverse
              </option>
              <option className="bg-white text-black">
                Cloud-Native Computing
              </option>
              <option className="bg-white text-black">
                Artificial Intelligence (AI) and Deep Learning
              </option>
              <option className="bg-white text-black">
                Ambient Computing and IoT
              </option>
              <option className="bg-white text-black">
                Genomics and Bioinformatics
              </option>
              <option className="bg-white text-black">
                Network Programmability and Automation
              </option>
            </optgroup>
          </select>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

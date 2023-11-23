"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./dojo-logo.png";
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="p-4 bg-green-500 flex flex-col items-start sm:items-center md:flex-row sm:justify-between">
      <ul className="flex items-center justify-between w-full md:w-auto">
        <Link href="/" className=" text-white flex items-center">
          <Image
            src={Logo}
            alt="Dojo helpdesk logo"
            width={70}
            quality={100}
            placeholder="blur"
          />
          <h1 className="lg:me-auto ml-2">Dojo</h1>
        </Link>
        <button
          className="text-white bg-blue-700 rounded-lg hover:bg-blue-800 md:hidden"
          onClick={handleClick}
        >
          {toggle ? "Hide" : "Show"}
        </button>
      </ul>

      <ul
        className={`w-full sm:w-60  lg:w-auto flex align-center justify-center flex-col md:flex-row md:flex ${
          toggle ? "block" : "hidden"
        }`}
      >
        <li className="text-center md:ml-4 mb-3 md:mb-0">
          <Link href="/" className=" text-white">
            Dashboard
          </Link>
        </li>
        <li className="text-center md:ml-4 mb-3 md:mb-0">
          <Link href="/tickets" className=" text-white">
            Tickets
          </Link>
        </li>
        <li className="text-center md:ml-4">
          <Link href="/store" className="text-white">
            Store
          </Link>
        </li>
      </ul>
    </nav>
  );
}

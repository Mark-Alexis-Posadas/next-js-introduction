import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./dojo-logo.png";
export default function Navbar() {
  return (
    <nav className="p-4 bg-green-500 flex-col items-start sm:items-center sm:flex-row md:justify-between">
      <h1>Root Layout</h1>
      <Image
        src={Logo}
        alt="Dojo helpdesk logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1 className="lg:me-auto">Dojo</h1>
      <ul className="w-full sm:w-60 lg:w-auto flex align-center justify-center flex-col sm:flex-row">
        <li className="text-center ml-4 mb-3 sm:mb-0">
          <Link href="/" className=" text-white">
            Dashboard
          </Link>
        </li>
        <li className="text-center ml-4 mb-3 sm:mb-0">
          <Link href="/tickets" className=" text-white">
            Tickets
          </Link>
        </li>
        <li className="text-center ml-4">
          <Link href="/store" className="text-white">
            Store
          </Link>
        </li>

        <li className="text-center ml-4">
          <Link href="/test" className="text-white">
            Test Components
          </Link>
        </li>
      </ul>
    </nav>
  );
}

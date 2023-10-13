import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./dojo-logo.png";
export default function Navbar() {
  return (
    <nav className="p-4 bg-green-500">
      <Image
        src={Logo}
        alt="Dojo helpdesk logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1>Dojo</h1>
      <ul className="flex align-center justify-center">
        <li>
          <Link href="/" className=" text-white">
            Dashboard
          </Link>
        </li>
        <li className="mx-5">
          <Link href="/tickets" className=" text-white">
            Tickets
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-white">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

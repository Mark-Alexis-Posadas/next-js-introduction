import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="p-4 bg-green-500">
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

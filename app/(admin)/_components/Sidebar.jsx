import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <aside className="bg-green-500 p-5 fixed h-screen w-[300px]">
      <ul>
        <li>
          <Link href="/dashboard" className="text-white">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/projects" className="text-white">
            Projects
          </Link>
        </li>
      </ul>
    </aside>
  );
}

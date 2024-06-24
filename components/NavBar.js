// components/NavBar.js
'use client';

import React, { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white">Miguel's Portfolio</div>
        <button className="text-white md:hidden" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <ul
        className={`flex-col md:flex md:flex-row gap-4 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <li>
          <Link href="/" className="text-white">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white">
            About
          </Link>
        </li>
        <li>
          <Link href="/skills" className="text-white">
            Skills
          </Link>
        </li>
        <li>
          <Link href="/projects" className="text-white">
            Projects
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

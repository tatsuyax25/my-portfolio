// components/NavBar.js
import React, { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <ul className={`flex ${isOpen ? "flex-col" : "flex-row"} gap-4`}>
        <li>
          <Link href="/" passHref>
            <a className="text-white">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <a className="text-white">About</a>
          </Link>
        </li>
        <li>
          <Link href="/skills" passHref>
            <a className="text-white">Skills</a>
          </Link>
        </li>
        <li>
          <Link href="/projects" passHref>
            <a className="text-white">Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref>
            <a className="text-white">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

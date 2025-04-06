"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItem = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Rooms",
    path: "/rooms",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Account",
    path: "/account",
  },
];

<Link href="/" className="font-bold text-teal-700">
  Home
</Link>;

export default function Navigation() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        {navItem.map(({ name, path }) => (
          <li key={name}>
            <Link
              href={path}
              className={
                pathname === path
                  ? "text-teal-400"
                  : "hover:text-teal-400 transition-colors text-white"
              }
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

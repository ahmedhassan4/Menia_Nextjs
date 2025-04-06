import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/logo-white.png";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src={logo} alt="logo" width={150} height={150} />
    </Link>
  );
}

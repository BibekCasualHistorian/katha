import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="text-white flex justify-evenly p-5 items-center">
      <div className="flex flex-col w-8 gap-1">
        <span className="w-full h-1 bg-white rounded-md"></span>
        <span className="w-full h-1 bg-white rounded-md"></span>
        <span className="w-full h-1 bg-white rounded-md"></span>
      </div>
      <Link href={""}>Shorts</Link>
      <Link href={""}>Series</Link>
      <Link href={""}>Stories</Link>
      <Link href={""}>WishList</Link>
      <Link href={""}>Reading</Link>
      <Link href={""} className="w-10 bg-white rounded-full h-10 block"></Link>
    </header>
  );
};

export default Header;

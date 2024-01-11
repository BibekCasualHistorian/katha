"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathNameRoute = usePathname();

  const normalLinks = [
    { pathName: "/shorts", title: "Shorts" },
    { pathName: "/series", title: "Series" },
    { pathName: "/stories", title: "कथा" },
    { pathName: "/wishlist", title: "WishList" },
    { pathName: "/reading", title: "Reading" },
  ];
  return (
    <header className="text-white flex justify-evenly p-5 items-center">
      <div className="flex flex-col w-8 gap-1">
        <span className="w-full h-1 bg-white rounded-md"></span>
        <span className="w-full h-1 bg-white rounded-md"></span>
        <span className="w-full h-1 bg-white rounded-md"></span>
      </div>
      {normalLinks.map((each) => {
        return (
          <Link
            href={each.pathName}
            className={`${
              each.pathName == pathNameRoute
                ? "font-bold text-white"
                : "text-gray-300"
            }`}
          >
            {each.title}
          </Link>
        );
      })}
      <Link href={""} className="w-10 bg-white rounded-full h-10 block"></Link>
    </header>
  );
};

export default Header;

import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between">
      <h1>Katha</h1>
      <nav>
        <Link href={"/"}>Tags</Link>
        <Link href={"/"}></Link>
        <Link href={"/"}>Create-Post</Link>
        <Link href={"/"}>Login</Link>
      </nav>
    </header>
  );
};

export default Header;

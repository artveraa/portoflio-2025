"use client";

import { useEffect, useRef } from "react";
import Logo from "@/app/components/Logo";
import Navbar from "@/app/components/Navbar";

const Header = () => {
  return (
    <div className="header fixed flex justify-between items-center w-full p-5 translate-y-[-100%] opacity-0">
      <Logo />
      <Navbar />
    </div>
  );
};
export default Header;

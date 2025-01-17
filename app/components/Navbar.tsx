"use client";
import { useMenu } from "@/app/hooks/useMenu";

const Navbar = () => {
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
    <div
      className={`w-3 aspect-square rounded-full shrink-0 hover:cursor-pointer transition-all duration-300 ${
        isMenuOpen ? "bg-none border border-main scale-125" : "bg-main"
      }`}
      onClick={toggleMenu}
    ></div>
  );
};

export default Navbar;

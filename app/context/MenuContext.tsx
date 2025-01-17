"use client";

import { createContext, useState, ReactNode } from "react";

interface MenuContextType {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuContext = createContext<MenuContextType | undefined>(
  undefined
);

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

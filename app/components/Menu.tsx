"use client";
import { useMenu } from "@/app/hooks/useMenu";
import { openMenuAnimation } from "@/app/lib/animations";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const Menu = () => {
  const { isMenuOpen, toggleMenu } = useMenu();
  const overlayRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const menuWrapperRef = useRef<HTMLDivElement>(null);
  const menuOpenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const intro = introRef.current;
    const menuWrapper = menuWrapperRef.current;
    const buttons = gsap.utils.toArray<HTMLButtonElement>("button");
    const menuOpen = menuOpenRef.current;

    if (isMenuOpen && overlay && intro && menuWrapper && buttons && menuOpen) {
      if (tlRef.current) {
        tlRef.current.kill();
      }
      menuOpen.style.pointerEvents = "all";
      tlRef.current = openMenuAnimation(overlay, intro, menuWrapper, buttons);
    } else if (!isMenuOpen && tlRef.current && menuOpen) {
      menuOpen.style.pointerEvents = "none";
      tlRef.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <>
      <div
        className={`fixed pointer-events-none top-0 left-0 w-[100vw] h-[100vh] z-40 flex justify-end items-center px-10`}
        ref={menuOpenRef}
      >
        <div
          className="overlay backdrop-blur-lg bg-dark/30 opacity-0 absolute w-full h-full"
          ref={overlayRef}
          onClick={toggleMenu}
        ></div>
        <div
          className="flex flex-col justify-between bg-main w-full md:w-[50vw] h-[75vh] p-7 z-10 translate-x-[150%]"
          ref={menuWrapperRef}
        >
          <p
            className="intro text-dark font-instrument text-3xl md:text-5xl opacity-0"
            ref={introRef}
          >
            Merci pour l&apos;intérêt porté à mon profil. Je suis actuellement
            en recherche d&apos;emploi en tant que développeur web front-end.
            N&apos;hésitez pas à me contacter pour toute information
            complémentaire.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <button className="text-dark border border-dark p-2 transition-all duration-75 hover:bg-dark hover:text-main">
              <Link href="/Arthur_VERA_FR.pdf" target="_blank" download>
                Télécharger mon CV
              </Link>
            </button>
            <button className="text-dark border border-dark p-2 transition-all duration-75 hover:bg-dark hover:text-main">
              <Link href={"mailto:contact@arthurvera.fr"}>Me contacter</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;

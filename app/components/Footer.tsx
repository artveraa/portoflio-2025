"use client";
import Link from "next/link";
import { footerAnimation } from "@/app/lib/animations";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const footer = document.querySelector<HTMLDivElement>(".footer");
    const listItems = Array.from(
      document.querySelectorAll<HTMLUListElement>(".footer ul li")
    );
    const name = document.querySelector<HTMLDivElement>(".footer .name");
    const button = document.querySelector<HTMLDivElement>(".footer .button");
    if (footer && listItems && name && button) {
      footerAnimation(footer, listItems, name, button);
    }
  }, []);

  return (
    <div className="footer flex flex-col justify-between  w-full h-[70vh] -z-20  overflow-hidden">
      <ul className="flex justify-between items-center w-full p-5">
        <li>
          <Link
            href={"https://www.linkedin.com/in/arthur-vera/"}
            target="_blank"
          >
            linkedin
          </Link>
        </li>
        <li>
          <Link
            href={"https://bsky.app/profile/artvera.bsky.social"}
            target="_blank"
          >
            bluesky
          </Link>
        </li>
        <li>
          <Link href={"https://github.com/artveraa"} target="_blank">
            github
          </Link>
        </li>
        <li>
          <Link href={"mailto:contact@arthurvera.fr"}>
            contact@arthurvera.fr
          </Link>
        </li>
      </ul>
      <div>
        <div className="name flex flex-col justify-center items-center relative text-[30vw] md:text-[15vw]">
          <span className="leading-none font-anton uppercase ">vera</span>
          <span className="leading-none font-anton uppercase ">arthur</span>
          <div className="button group flex flex-col justify-center items-center w-[30vw] md:w-[15vw] aspect-square bg-main rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-8 border-dark hover:scale-110 hover:cursor-pointer transition-transform">
            <span className="text-3xl md:text-5xl group-hover:animate-handShake">
              👋
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

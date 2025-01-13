"use client";
import { useEffect, useRef } from "react";
import { heroAnimations } from "@/app/lib/animations";

const MainTitle = () => {
  const title1 = useRef<HTMLSpanElement>(null);
  const dash = useRef<HTMLSpanElement>(null);
  const title2 = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (title1.current && dash.current && title2.current) {
      heroAnimations(title1.current, dash.current, title2.current);
    }
  }, []);

  return (
    <h1 className="font-anton uppercase flex flex-col justify-center items-center">
      <span className="text-[17vw] leading-none overflow-hidden" ref={title1}>
        arthur
      </span>
      <span className="flex items-center justify-between w-[46.7vw]">
        <span
          className="w-[13vw] h-9 bg-main block origin-left"
          ref={dash}
        ></span>
        <span
          className="title2 text-[17vw] leading-none overflow-hidden"
          ref={title2}
        >
          vera
        </span>
      </span>
    </h1>
  );
};
export default MainTitle;

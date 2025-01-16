import { useRef, useEffect, useState } from "react";
import { heroTitleAnimations } from "@/app/lib/animations";

const MainTitle = () => {
  const title = useRef<HTMLHeadingElement | null>(null);
  const dash = useRef<HTMLSpanElement>(null);
  const [header, setHeader] = useState<HTMLDivElement | null>(null);
  const [images, setImages] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHeader(document.querySelector<HTMLDivElement>(".header"));
      setImages(document.querySelector<HTMLDivElement>(".images-wrapper"));
    }
  }, []);

  useEffect(() => {
    if (title.current && dash.current && header && images) {
      heroTitleAnimations(title.current, dash.current, header, images);
    }
  }, [images, header]);

  return (
    <h1
      className="text-[25vw] md:text-[17vw] font-anton uppercase flex flex-col justify-center items-center will-change-transform"
      ref={title}
    >
      <span className="  leading-none overflow-hidden will-change-transform">
        arthur
      </span>
      <span className="flex items-center justify-between w-[70vw] md:w-[46.7vw]">
        <span
          className="w-[20vw] md:w-[13vw] h-3 md:h-9 bg-main block origin-left will-change-transform"
          ref={dash}
        ></span>
        <span className="title2 leading-none overflow-hidden will-change-transform">
          vera
        </span>
      </span>
    </h1>
  );
};

export default MainTitle;

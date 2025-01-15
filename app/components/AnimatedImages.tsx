"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { imagesAnimations } from "@/app/lib/animations";

const AnimatedImages = () => {
  const [images, setImages] = useState<HTMLDivElement | null>(null);
  const [image2, setImage2] = useState<HTMLImageElement | null>(null);
  const [image3, setImage3] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    setImages(document.querySelector<HTMLDivElement>(".images-wrapper"));
    setImage2(
      document.querySelectorAll<HTMLImageElement>(".images-wrapper img")[1]
    );
    setImage3(
      document.querySelectorAll<HTMLImageElement>(".images-wrapper img")[2]
    );
  }, []);

  useEffect(() => {
    if (images && image2 && image3) {
      imagesAnimations(images, image2, image3);
    }
  }, [images, image2, image3]);

  return (
    <div className="images-wrapper relative w-full h-[30vh] flex justify-center items-center ">
      <Image
        src="/arthurvera.jpg"
        alt="Arthur Vera"
        width={918}
        height={928}
        className="z-10  border-[7px] border-b-[55px] border-light w-[30%] translate-y-[-35%] opacity-0"
      />

      <Image
        src="/arthurvera.jpg"
        alt="Arthur Vera"
        width={918}
        height={928}
        className="-z-1 absolute opacity-0 border-[7px] border-b-[55px] border-light w-[30%] translate-y-[-60%]"
      />

      <Image
        src="/arthurvera.jpg"
        alt="Arthur Vera"
        width={918}
        height={928}
        className="-z-1 absolute opacity-0 border-[7px] border-b-[55px] border-light w-[30%] translate-y-[-40%]"
      />
    </div>
  );
};
export default AnimatedImages;

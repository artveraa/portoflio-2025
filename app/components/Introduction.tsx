"use client";
import { useEffect, useRef } from "react";
import { introductionAnimations } from "@/app/lib/animations";

const Introduction = () => {
  const intro = useRef<HTMLDivElement>(null);
  const paragraph = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (intro.current && paragraph.current) {
      introductionAnimations(intro.current, paragraph.current);
    }
  }, []);

  return (
    <div className="h-[80vh] w-full  flex justify-center items-center flex-col">
      <h2
        className="font-anton text-[10vw] uppercase flex flex-col leading-none text-center"
        ref={intro}
      >
        <span className="block">front-end</span>
        <span>developer</span>
      </h2>
      <p
        className="font-instrument text-4xl w-[50%] text-center mt-5"
        ref={paragraph}
      >
        &quot;Durant son passage chez Océbo, Arthur nous a régulièrement prouvé
        la solidité de ses acquis, mettant en avant rigueur, qualités
        techniques, organisationnelles et sens du travail en équipe.&quot;
        <span className="block text-2xl mt-4">Y. Girot, Directeur Général</span>
      </p>
    </div>
  );
};
export default Introduction;

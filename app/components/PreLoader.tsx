import { useEffect, useRef } from "react";
import { preloaderAnimations } from "@/app/lib/animations";

interface PreLoaderProps {
  timeline: gsap.core.Timeline | null;
}

const PreLoader = ({ timeline }: PreLoaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const dashRef = useRef<HTMLDivElement>(null);
  const letterARef = useRef<HTMLDivElement>(null);
  const letterBRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    timeline &&
      dashRef.current &&
      letterARef.current &&
      letterBRef.current &&
      preloaderRef.current &&
      timeline.add(
        preloaderAnimations(
          letterARef.current,
          dashRef.current,
          letterBRef.current,
          preloaderRef.current
        )
      );
  }, [timeline]);
  return (
    <div
      className="preloader w-full h-[100vh] bg-main flex justify-center items-center"
      ref={preloaderRef}
    >
      <div className="flex items-center gap-1">
        <span
          className="letter-a text-3xl text-dark font-anton uppercase opacity-0"
          ref={letterARef}
        >
          A
        </span>
        <span className="dash w-2 h-1 bg-dark opacity-0" ref={dashRef}></span>
        <span
          className="letter-b text-3xl text-dark font-anton uppercase opacity-0"
          ref={letterBRef}
        >
          V
        </span>
      </div>
    </div>
  );
};
export default PreLoader;

import { useEffect, useRef } from "react";
import { presentationAnimation } from "@/app/lib/animations";

const Presentation = () => {
  const presentationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (presentationRef.current) {
      presentationAnimation(presentationRef.current);
    }
  }, []);

  return (
    <div
      ref={presentationRef}
      className="presentation-section md:h-[100vh] w-full flex justify-center items-center flex-col p-5"
    >
      <p className="text-6xl md:text-[120px] text-left font-instrument uppercase leading-[1.2]">
        Je combine stratégie, créativité et technologie pour créer des
        expériences uniques qui font la différence.
      </p>
    </div>
  );
};

export default Presentation;

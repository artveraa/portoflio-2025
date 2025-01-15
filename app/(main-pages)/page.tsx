"use client";
import { useLayoutEffect, useState } from "react";
import gsap from "gsap";

import PreLoader from "@/app/components/PreLoader";
import LandingComponents from "../components/LandingComponents";

export default function Home() {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true),
      });

      setTimeline(tl);
    });

    return () => {
      context.revert();
    };
  }, []);

  return (
    <>
      {loaderFinished ? (
        <LandingComponents />
      ) : (
        <PreLoader timeline={timeline} />
      )}
    </>
  );
}

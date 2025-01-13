import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

// Hero animations

export const heroAnimations = (
  title1: HTMLSpanElement,
  dash: HTMLSpanElement,
  title2: HTMLSpanElement
) => {
  const title1Split = new SplitText(title1, { type: "chars" });
  const title2Split = new SplitText(title2, { type: "chars" });
  const tl = gsap.timeline();

  tl.from(title1Split.chars, {
    duration: 1.5,
    y: 100,
    // rotationZ: 10,
    opacity: 0,
    stagger: 0.02,
    ease: "power4.out",
  })
    .from(
      dash,
      {
        scaleX: 0,
        duration: 1,
        ease: "power4.out",
      },
      "<"
    )
    .from(
      title2Split.chars,
      {
        duration: 1.5,
        y: 100,
        // rotationZ: 10,
        opacity: 0,
        stagger: 0.02,
        ease: "power4.out",
      },
      "<"
    );
};

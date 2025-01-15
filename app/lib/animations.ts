import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

// Preloader animations

export const preloaderAnimations = (
  letterA: HTMLDivElement,
  dash: HTMLDivElement,
  letterB: HTMLDivElement,
  preloaderContainer: HTMLDivElement
): gsap.core.Timeline => {
  const tl = gsap.timeline();

  tl.to(letterA, {
    autoAlpha: 1,
    duration: 1.5,
    ease: "power4.out",
  })
    .to(
      letterB,
      {
        autoAlpha: 1,
        duration: 1.5,
        ease: "power4.out",
      },
      "<"
    )
    .to(
      dash,
      {
        scaleX: 2,
        duration: 1.5,
        autoAlpha: 1,
        ease: "power4.out",
      },
      "-=.5"
    )
    .to(
      letterA,
      {
        x: "-80%",
        duration: 1.5,
        ease: "power4.out",
      },
      "<"
    )
    .to(
      letterB,
      {
        x: "80%",
        duration: 1.5,
        ease: "power4.out",
      },
      "<"
    )
    .to(preloaderContainer, {
      y: "-100%",
      duration: 1.5,
      ease: "power4.out",
    });

  return tl;
};

// Hero animations

export const heroTitleAnimations = (
  title1: HTMLSpanElement,
  dash: HTMLSpanElement,
  title2: HTMLSpanElement,
  header: HTMLDivElement,
  images: HTMLDivElement
) => {
  const title1Split = new SplitText(title1, { type: "chars" });
  const title2Split = new SplitText(title2, { type: "chars" });
  const mainImage = images.querySelectorAll("img")[0];

  const tl = gsap.timeline();

  tl.from(
    title1Split.chars,
    {
      duration: 1.5,
      y: 100,
      // rotationZ: 10,
      opacity: 0,
      stagger: {
        each: 0.02,
        from: "random",
      },
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
        stagger: {
          each: 0.02,
          from: "random",
        },
        ease: "power4.out",
      },
      "<"
    )
    .fromTo(
      dash,
      { scaleX: 0 },
      { duration: 1.5, scaleX: 1, ease: "power4.out" },
      "-=.5"
    )
    .to(
      header,
      {
        y: 0,
        autoAlpha: 1,
        duration: 1.5,
        ease: "power4.out",
      },
      "<"
    )
    .to(
      mainImage,
      {
        autoAlpha: 1,
        duration: 1.5,
        ease: "power4.out",
      },
      "-=1.5"
    );
};

// Images animations

export const imagesAnimations = (
  imagesWrapper: HTMLDivElement,
  image2: HTMLImageElement,
  image3: HTMLImageElement
) => {
  const mainImage = imagesWrapper.querySelectorAll("img")[0];

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: imagesWrapper,
      start: "top bottom",
      end: "bottom bottom",
      scrub: false,
      // markers: true,
      toggleActions: "play none reverse none",
    },
  });

  tl.to(mainImage, {
    scale: 0.9,
    duration: 1,
    ease: "power4.out",
  })
    .to(
      image2,
      {
        x: "50%",
        rotate: 10,
        duration: 0.5,
        scale: 0.7,
        autoAlpha: 1,
        ease: "power4.out",
      },
      "<"
    )
    .to(
      image3,
      {
        x: "-50%",
        rotate: -10,
        duration: 0.5,
        scale: 0.7,
        autoAlpha: 1,
        ease: "power4.out",
      },
      "-=.2"
    );

  return tl;
};

// Introduction animations

export const introductionAnimations = (
  title: HTMLHeadingElement,
  paragraph: HTMLParagraphElement
) => {
  const titleSplit = new SplitText(title, { type: "chars" }); // Split title into characters
  const paragraphSplit = new SplitText(paragraph, { type: "lines" });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: title,
      start: "top center",
      end: "bottom center",
      scrub: false,
      // markers: true,
      toggleActions: "play none reverse none",
    },
  });

  tl.from(
    titleSplit.chars,
    {
      duration: 1.5,
      y: 100,
      opacity: 0,
      filter: "blur(10px)",
      stagger: {
        each: 0.02,
        from: "random",
      },
      ease: "power4.out",
      clearProps: "filter",
    },
    "<"
  ).from(
    paragraphSplit.lines,
    {
      duration: 1.5,
      y: 100,
      opacity: 0,
      filter: "blur(10px)",
      stagger: 0.02,
      ease: "power4.out",
      clearProps: "filter",
    },
    "-=1"
  );
};

// Présentation animations

export const presentationAnimation = (element: HTMLDivElement) => {
  const split = new SplitText(element, { type: "words, chars" });
  const chars = split.chars;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: "top center",
      end: "bottom center",
      scrub: false,
    },
  });

  tl.fromTo(
    chars,
    {
      opacity: 0,
      rotationY: 90,
    },
    {
      opacity: 1,
      rotationY: 0,
      duration: 0.5,
      stagger: {
        each: 0.05,
        from: "random",
      },

      ease: "power4.out",
    }
  );
};

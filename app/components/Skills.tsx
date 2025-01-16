const Skills = () => {

  return (
    <div className="px-5 py-20 rounded-t-3xl grid grid-cols-1 bg-dark text-main md:grid-cols-2 gap-5  sticky top-[25%]">
      <p className="text-lg md:text-2xl">Stacks</p>
      <div className="flex flex-col items-start gap-7">
        <div className="flex justify-between items-center w-full border-b border-main pb-5 text-lg">
          <span>
            React / React Native / Next / TypeScript / TailwindCSS / SCSS
          </span>
        </div>
        <div className="flex justify-between items-center w-full border-b border-main pb-5 text-lg">
          <span>WordPress / ACF / Timber / PHP</span>
        </div>
        <div className="flex justify-between items-center w-full border-b border-main pb-5 text-lg">
          <span>Node / Express / MongoDB</span>
        </div>
        <div className="flex justify-between items-center w-full border-b border-main pb-5 text-lg">
          <span>GSAP / Lottie / Rive / Three.js</span>
        </div>
        <div className="flex justify-between items-center w-full border-b border-main pb-5 text-lg">
          <span>Sanity / Prismic / Strapi</span>
        </div>
      </div>
    </div>
  );
};
export default Skills;

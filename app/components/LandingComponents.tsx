import Hero from "@/app/components/Hero";
import Introduction from "@/app/components/Introduction";
import AnimatedImages from "@/app/components/AnimatedImages";
import Presentation from "@/app/components/Presentation";
import Footer from "@/app/components/Footer";
import StickySection from "@/app/components/StickySection";
import Menu from "@/app/components/Menu";

const LandingComponents = () => {
  return (
    <>
      <Menu />
      <Hero />
      <AnimatedImages />
      <Introduction />
      <Presentation />
      <StickySection />
      <Footer />
    </>
  );
};
export default LandingComponents;

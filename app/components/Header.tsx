import Logo from "@/app/components/Logo";

const Header = () => {
  return (
    <div className="fixed flex justify-between items-center w-full p-5">
      <Logo />
      <div className="w-3 aspect-square rounded-full bg-main shrink-0"></div>
    </div>
  );
};
export default Header;

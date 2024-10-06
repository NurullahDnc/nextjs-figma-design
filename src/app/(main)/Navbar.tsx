import Logo from "@/components/navbar/Logo";
import MenuItem from "@/components/navbar/MenuItem";
import SocialIcon from "@/components/navbar/SocialIcon";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-40 left-0 bg-card shadow-md right-0 max-h-[80px] flex items-center justify-between px-4 md:px-[80px] py-[20px]">
      <div className="flex-1 hidden md:flex ">
        <SocialIcon />
      </div>
      <div className="flex-1 flex justify-center ">
        <Logo />
      </div>

      <div className=" flex-1 flex justify-end">
        <MenuItem />
      </div>
    </div>
  );
};

export default Navbar;

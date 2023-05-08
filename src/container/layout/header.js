import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import NavList from "@/components/navList/navList";
const Header = () => {
  return (
    <header className="sticky top-0 w-full transition-all ease-in-out duration-100 z-40 backdrop-blur-lg blur-0 opacity-100">
      <div className="container xl:max-w-screen-xl top-0 py-2  mx-auto px-2 lg:px-0">
        <nav className="flex items-center justify-between">
          <div className="w-full md:hidden flex items-center justify-between">
            <Link href={"/"}>
              <img
                src={"/images/mobilelogo.png"}
                width={35}
                className="block md:hidden"
              />
            </Link>
            <button className="text-lg text-blue-950">
              <HiBars3BottomRight />
            </button>
          </div>
          <Link href={"/"}>
            <img src={"/images/logo.png"} className="hidden md:block w-28 " />
          </Link>
          <div className="hidden md:flex items-center gap-x-20">
            <NavList/>
            <button className="py-4 px-8  rounded-full  text-white bg-blue-950 text-xs tracking-wider">
              مرکز تماس
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

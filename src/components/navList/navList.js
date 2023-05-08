import Link from "next/link";
import { navigation } from "@/utils/navigation";
const NavList = ({dark = false}) => {
  return (
    <ul className="flex items-center gap-x-4 lg:gap-x-10">
      {navigation.map((nav, i) => {
        return (
          <Link
            key={i}
            href={nav.path}
            className= {`font-light ${dark ? "text-slate-100" : "text-slate-800"}  text-xs`}
          >
            {nav.name}
          </Link>
        );
      })}
    </ul>
  );
};

export default NavList;

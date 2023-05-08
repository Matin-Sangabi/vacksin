import Link from "next/link";
import {
  BsTwitter,
  BsFacebook,
  BsYoutube,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
const social = [
  { name: "twitter", path: "/", icon: () => BsTwitter() },
  { name: "faceBook", path: "/", icon: () => BsFacebook () },
  { name: "youtube", path: "/", icon: () => BsYoutube() },
  { name: "BsInstagram", path: "/", icon: () => BsInstagram() },
  { name: "BsLinkedin", path: "/", icon: () => BsLinkedin() },
];

const SocialMediaIcons = () => {
  return (
    <ul className="flex items-center gap-x-4">
      {social.map((item, i) => {
        return (
          <Link key={i} href={item.path} className="text-slate-300 text-base lg:text-2xl hover:text-blue-500">
            {item.icon()}
          </Link>
        );
      })}
    </ul>
  );
};

export default SocialMediaIcons;

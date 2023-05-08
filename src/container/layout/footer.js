import NavList from "@/components/navList/navList";
import SocialMediaIcons from "@/components/navList/socialMedia";

const Footer = () => {
  return (
    <footer className="bg-gray-900 flex flex-col justify-between items-center py-10  relative">
      <div className="px-10 shadow-2xl shadow-blue-900 w-[90%] md:w-[70%] lg:w-[60%] max-w-screen-xl flex flex-col items-center gap-y-2 relative bottom-28 mx-auto py-10 bg-gradient-to-r from-blue-500 via-blue-500 justify-around to-blue-700 rounded-3xl">
        <form className="flex flex-col gap-y-6  items-center">
          <h1 className="text-xl lg:text-3xl text-slate-50 font-bold ">
            دریافت دعوت نامه واکسن
          </h1>
          <h2 className="text-xs text-slate-200">
            ایمیل خود را وارد کنید تا دعوت نامه را برای شما ارسال کنیم
          </h2>
          <div className="flex justify-center">
            <button className="py-2 px-4 rounded-r-3xl text-slate-50 bg-blue-950" type="submit">ارسال</button>
            <input
              className="py-2 px-4 placeholder:text-sm bg-slate-100 focus:shadow-xl focus:shadow-blue-700 transition-all ease-in-out duration-300 outline-none border-none text-blue-950 rounded-l-3xl"
              dir="ltr"
              placeholder="youremail@email.com"
            />
          </div>
        </form>
      </div>
      <div className="mt-8 mx-auto flex  flex-col items-center lg:flex-row  gap-y-8 container max-w-screen-xl justify-between">
        <div className="flex items-center gap-x-8">
          <div className="w-24 lg:w-32">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-full h-full object-cover object-scale-down"
            />
          </div>
          <NavList dark={true} />
        </div>
        <SocialMediaIcons />
      </div>
    </footer>
  );
};

export default Footer;

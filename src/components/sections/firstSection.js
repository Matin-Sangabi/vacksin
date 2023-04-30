import { TbVaccine, TbStarFilled } from "react-icons/tb";
import HeaderLine from "../headerLine/headerLine";

const FirstSection = () => {
  return (
    <section className="container md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto mt-12 md:mt-16 ">
      <HeaderLine />
      <div className="grid grid-cols-12 px-4">
        <div className="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-6 flex flex-col gap-y-2 mt-0 md:mt-8 order-2 md:order-1 px-4">
          <div className="flex max-w-max items-center gap-x-2 rounded-full py-1 px-4 bg-blue-200 shadow-md opacity-70">
            <span className="text-orange-500 lg:text-2xl text-xl">
              <TbVaccine />
            </span>
            <span className="text-xs lg:text-sm text-blue-600 font-semibold ">
              ناراحت نباش ، بیا واکسن بزنیم
            </span>
          </div>
          <div className="text-center md:text-right px-2 pt-2">
            <h1 className="text-blue-950 font-black text-4xl md:text-3xl  lg:text-[50px] xl:text-[50px] leading-snug md:leading-none lg:leading-snug">
              با واکسیناسیون می توانیم به این بیماری همه گیر پایان دهیم
            </h1>
          </div>
          <div className="max-w-xl border-b-2 md:border-b-0 py-4 border-slate-300">
            <h2 className="text-gray-500 font-normal text-sm lg:text-base xl:text-xl">
              با واکسیناسیون، تعداد موارد انتقال کووید-19 کاهش می یابد و می
              تواند ایمنی همگانی ایجاد شود.
            </h2>
          </div>
          <div className="mt-3 flex items-center justify-center md:justify-start">
            <button className="py-2 px-10 bg-blue-950 text-white rounded-full tracking-wide shadow-2xl  shadow-blue-900 transition-all ease-in-out duration-100">
              گرفتن نوبت
            </button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-6 relative z-30 order-1 md:order-2">
          <div className="aspect-none md:aspect-w-4 md:aspect-h-4">
            <img
              src="/images/vaccine.png"
              alt="واکسن واکسناسیون"
              className="object-contain object-center h-full w-full "
            />
          </div>
          <div className="hidden md:block absolute left-0 bottom-[102px] lg:bottom-36 xl:bottom-44">
            <div className="flex flex-col gap-y-4 py-2 px-4 w-28 lg:w-44 lg:max-h-full max-h-24 overflow-auto backdrop-brightness-[1.3] backdrop-blur-3xl opacity-90 rounded-3xl shadow">
              <div className="flex justify-center mt-2 items-center gap-x-2">
                {[1, 2, 3, 4, 5].map((_, i) => {
                  return (
                    <span key={i} className="text-yellow-400 text-sm">
                      <TbStarFilled />
                    </span>
                  );
                })}
              </div>
              <div className="flex flex-col ">
                <p className="text-gray-600 text-[11px] lg:text-xs font-semibold italic">
                  &#8221; پس از واکسینه شدن بدنم احساس سلامتی و تندرستی می کند،
                  اشتهایم افزایش یافته است .&#8221;
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <span className="hidden lg:block lg:w-6 lg:h-6 xl:w-8 xl:h-8 rounded-full ring-2 ring-slate-100 bg-red-300"></span>
                <span className="text-blue-950 text-[10px] lg:text-xs font-bold ">
                  متین اسدسنگابی
                </span>
              </div>
            </div>
          </div>
          <div className="hidden md:block absolute -right-0 bottom-24 lg:right-16 xl:right-20 lg:bottom-40 xl:bottom-52">
            <div className="flex items-center gap-x-4 py-1 lg:py-3 px-4 bg-slate-100 bg-opacity-[0.85] rounded-2xl xl:rounded-3xl shadow">
              <div className="flex">
                <span className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8  -ml-3 z-20 rounded-full ring-2 ring-slate-100 bg-red-300"></span>
                <span className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8  -ml-3 z-10 rounded-full ring-2 ring-slate-100 bg-red-300"></span>
                <span className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 ml-0 rounded-full ring-2 ring-slate-100 bg-red-600"></span>
              </div>
              <div className="flex flex-col ">
                <span className="text-base lg:text-xl text-blue-950 font-black font-sans">
                  +125k
                </span>
                <span className=" text-blue-950 font-semibold text-[10px] lg:text-xs">
                  بهبودی بیماران
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;


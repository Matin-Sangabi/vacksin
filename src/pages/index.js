import HeaderLine from "@/components/headerLine/headerLine";
import Layout from "@/container/layout";
import { TbVaccine, TbStarFilled } from "react-icons/tb";
const Home = () => {
  return (
    <Layout>
      <section className="container md:max-w-screen-xl mx-auto mt-12 md:mt-16 ">
        <HeaderLine />
        <div className="flex  md:flex-row md:gap-x-5 md:justify-between ">
          <div className="flex flex-col gap-y-2 mt-8">
            <div className="flex max-w-max items-center gap-x-2 rounded-full py-1 px-4 bg-blue-200 shadow-md opacity-70">
              <span className="text-orange-500 text-2xl">
                <TbVaccine />
              </span>
              <span className="text-sm text-blue-600 font-semibold ">
                ناراحت نباش ، بیا واکسن بزنیم
              </span>
            </div>
            <div className="text-center md:text-right ">
              <h1 className="text-blue-950 font-black text-[50px] leading-snug">
                با واکسیناسیون می توانیم به این بیماری همه گیر پایان دهیم
              </h1>
            </div>
            <div className="max-w-lg">
              <h2 className="text-gray-500 font-normal text-lg">
                با واکسیناسیون، تعداد موارد انتقال کووید-19 کاهش می یابد و می
                تواند ایمنی همگانی ایجاد شود.
              </h2>
            </div>
            <div className="mt-3">
              <button className="py-2 px-10 bg-blue-950 text-white rounded-full tracking-wide shadow-2xl  shadow-blue-900 transition-all ease-in-out duration-100">
                گرفتن نوبت
              </button>
            </div>
          </div>
          <div className="w-full relative z-50">
            <div className="">
              <img
                src="/images/vaccine.png"
                alt="واکسن واکسناسیون"
                className=""
              />
            </div>
            <div className="absolute left-14 bottom-40">
              <div className="flex flex-col gap-y-4 py-2 px-4 w-44 bg-[#f5f7fa] bg-opacity-[0.85] rounded-3xl shadow">
                <div className="flex justify-center mt-2 items-center gap-x-2">
                  {[1, 2, 3, 4, 5].map((_, i) => {
                    return (
                      <span key={i} className="text-yellow-400">
                        <TbStarFilled />
                      </span>
                    );
                  })}
                </div>
                <div className="flex flex-col ">
                  <p className="text-gray-600 text-sm font-semibold italic">
                  &#8221;  پس از واکسینه شدن بدنم احساس سلامتی و تندرستی  می کند، اشتهایم افزایش یافته است .&#8221;
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <span className="w-8 h-8   rounded-full ring-2 ring-slate-100 bg-red-300"></span>
                  <span className="text-blue-950 text-sm font-bold">متین اسدسنگابی</span>
                </div>
              </div>
            </div>
            <div className="absolute right-20 bottom-52">
              <div className="flex items-center gap-x-4 py-2 px-4 bg-[#f5f7fa] bg-opacity-[0.85] rounded-3xl shadow">
                <div className="flex">
                  <span className="w-8 h-8  -ml-3 z-20 rounded-full ring-2 ring-slate-100 bg-red-300"></span>
                  <span className="w-8 h-8  -ml-3 z-10 rounded-full ring-2 ring-slate-100 bg-red-300"></span>
                  <span className="w-8 h-8 ml-0 rounded-full ring-2 ring-slate-100 bg-red-600"></span>
                </div>
                <div className="flex flex-col ">
                  <span className="text-xl text-blue-950 font-black font-sans">
                    +125k
                  </span>
                  <span className=" text-blue-950 font-semibold text-xs">
                    بهبودی بیماران
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

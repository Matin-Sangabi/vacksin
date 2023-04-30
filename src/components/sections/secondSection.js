import { BsCapsule } from "react-icons/bs";
import { TbVaccine } from "react-icons/tb";
const SecondSection = () => {
  return (
    <section className="container md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto my-12 md:my-20  ">
      <div className="grid grid-cols-12 px-4 items-center md:gap-10 gap-3">
        <div className="col-span-12 md:col-span-5 lg:col-span-6  flex flex-col gap-y-8 order-2 md:order-1">
          <h1 className="text-4xl text-blue-950 font-black leading-snug whitespace-pre-wrap  md:max-w-lg lg:max-w-2xl  tracking-wider">
            ما واکسن هایی ارائه می کنیم که از نظر بالینی آزمایش شده اند
          </h1>
          <h2 className="text-gray-400 text-sm md:text-lg font-normal leading-relaxed whitespace-pre-wrap ">
            از واکسن زدن نترسید، زیرا ما واکسن را به صورت مرحله ای و با جزئیات
            آزمایش کرده ایم.
          </h2>
          <div className="w-full flex justify-between md:gap-x-16 pt-3">
            <DetailSection icon={() => TbVaccine()} detail={"        واکسن هایی که توسط چندین حیوان آزمایشی آزمایش شده است"} />
            <DetailSection icon={() => BsCapsule()} detail={"واکسنی که گام به گام و با جزئیات در آزمایشگاه آزمایش شده است"} isSmall={true} />
          </div>
        </div>
        <div className="col-span-12 md:col-span-2 lg:col-span-1"></div>
        <div className="col-span-12 md:col-span-5 lg:col-span-5 relative order-1 md:order-2">
          <div className="aspect-w-4 aspect-h-4">
            <img
              src={"/images/alert.png"}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;

const DetailSection = ({ detail, icon, isSmall = false }) => {
  return (
    <div className="flex flex-col gap-y-4 ">
      <span
        className={`cursor-pointer hover:bg-blue-500 hover:text-slate-50  rounded-2xl flex items-center justify-center bg-blue-300 bg-opacity-30 ${
          isSmall ? "text-2xl rotate-180" : "text-3xl"
        } w-12 h-12  text-blue-900 transition-all ease-out duration-200`}
      >
        {icon()}
      </span>
      <p className=" text-gray-400 leading-snug tracking-wide  ">{detail}</p>
    </div>
  );
};

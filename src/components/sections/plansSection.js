import Link from "next/link";
import { BiShieldQuarter } from "react-icons/bi";
import { FaUsers, FaViruses } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi2";

const PlansSection = () => {
  return (
    <section className="container max-w-screen-xl px-2 mx-auto my-28 flex flex-col justify-between">
      <div className="grid grid-cols-12 gap-x-6  gap-y-8 relative mb-20 px-2">
        <div className="col-span-12 md:col-span-3">
          <h1 className="text-[30px] text-blue-950 font-black leading-snug">
            چرا باید حتما واکسن بزینم ؟{" "}
          </h1>
        </div>
        <div className="col-span-12 md:col-span-1"></div>
        <div className="col-span-12  md:col-span-7 pt-2">
          <p className="text-gray-500 font-normal leading-loose text-base">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده،.
          </p>
        </div>
      </div>
      <div className="flex flex-col  lg:flex-row items-end gap-x-6  gap-y-10  px-2 justify-center">
        <SelectPlan
          icon={() => BiShieldQuarter()}
          name={"  ایجاد ایمنی در برابر ویروس ها"}
          href={"/"}
        />
        <SelectPlan
          icon={() => FaUsers()}
          name={"  ایجاد ایمنی همگانی"}
          href={"/"}
        />
        <SelectPlan
          icon={() => FaViruses()}
          name={" سطوح کمتر قرار گرفتن در معرض ویروس"}
          href={"/"}
        />
      </div>
    </section>
  );
};

export default PlansSection;

const SelectPlan = ({ icon, name, desc, href }) => {
  return (
    <div className=" relative  overflow-hidden hover:shadow-2xl hover:shadow-blue-900 hover:border-blue-500  group/item hover:bg-gradient-to-bl hover:from-blue-400   hover:to-blue-700 hover:rounded-tl-[150px] transition-all ease-in-out duration-300 cursor-pointer flex flex-col  gap-y-4 rounded-[50px] border border-gray-300 py-4 px-10 delay-300 ">
      <div className=" w-[70px] h-[70px] rounded-3xl flex items-center justify-center text-4xl bg-sky-50 text-blue-600 ">
        {icon()}
      </div>
      <div className="flex flex-col gap-y-4">
        <h1 className="font-bold text-2xl text-blue-950 group-hover/item:text-slate-50 h-10">
          {name}
        </h1>
        <p className="text-sm relative  invisible h-0  w-full group-hover/item:h-fit group-hover/item:text-slate-50 group-hover/item:visible group-hover/item:mt-8 opacity-0 group-hover/item:opacity-100  transition-all ease-in-out duration-300 ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، 
        </p>
        <Link href={href} className="flex items-center gap-x-2 py-8">
          <span className="text-sm font-semibold text-blue-950 group-hover/item:text-slate-50">
            مشاهده بیشتر
          </span>
          <span className="group-hover/item:text-slate-50">
            <HiArrowLeft />
          </span>
        </Link>
      </div>
    </div>
  );
};

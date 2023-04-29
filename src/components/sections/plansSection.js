import { BiArrowToRight, BiShieldQuarter } from "react-icons/bi";
import { HiArrowLeft } from "react-icons/hi2";
const PlansSection = () => {
  return (
    <section className="container max-w-screen-xl px-2 mx-auto my-28">
      <div className="grid grid-cols-12 gap-x-6  gap-y-8 relative mb-20">
        <div className="col-span-3">
          <h1 className="text-[30px] text-blue-950 font-black leading-snug">
            چرا باید حتما واکسن بزینم ؟{" "}
          </h1>
        </div>
        <div className="col-span-2"></div>
        <div className="col-span-7 pt-2">
          <p className="text-gray-500 font-normal leading-loose text-base">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده،.
          </p>
        </div>
      </div>
      <div className="flex items-end gap-x-6 justify-between">
        {[1, 2, 3].map((_, i) => {
          return (
            <div key={i} className=" relative overflow-hidden   group/item hover:bg-gradient-to-bl hover:from-blue-500 hover:to-blue-700 hover:rounded-tl-[100px] transition-all ease-in-out duration-300 cursor-pointer flex flex-col gap-y-4 rounded-[50px] border border-gray-300 py-4 px-10 ">
              <div className=" w-[70px] h-[70px] rounded-3xl flex items-center justify-center text-4xl bg-blue-50 text-blue-600 ">
                <BiShieldQuarter />
              </div>
              <div className="flex flex-col gap-y-4">
                <h1 className="font-bold text-2xl text-blue-950 group-hover/item:text-slate-50">
                  ایجاد ایمنی در برابر ویروس ها
                </h1>
                <p className="text-sm relative  invisible h-0  w-full group-hover/item:h-fit group-hover/item:text-slate-50 group-hover/item:visible group-hover/item:mt-8 opacity-0 group-hover/item:opacity-100  transition-all ease-in-out duration-300 ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده،.
                </p>
                <div className="flex items-center gap-x-2 py-8">
                  <span className="text-sm font-semibold text-blue-950 group-hover/item:text-slate-50">
                    مشاهده بیشتر
                  </span>
                  <span className="group-hover/item:text-slate-50">
                    <HiArrowLeft />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PlansSection;
/**
 *  <div className="col-span-4  hover:row-span-6 relative overflow-hidden  group/item hover:bg-gradient-to-bl hover:from-blue-500 hover:to-blue-700 hover:rounded-tl-[100px] transition-all ease-in-out duration-300 cursor-pointer flex flex-col gap-y-4 rounded-[50px] border border-gray-300 py-4 px-10 ">
          <div className=" w-[70px] h-[70px] rounded-3xl flex items-center justify-center text-4xl bg-blue-50 text-blue-600 ">
            <BiShieldQuarter />
          </div>
          <div className="flex flex-col gap-y-4">
            <h1 className="font-bold text-2xl text-blue-950">
              ایجاد ایمنی در برابر ویروس ها
            </h1>
            <p className="text-sm relative  invisible h-0  w-full group-hover/item:h-fit group-hover/item:text-slate-50 group-hover/item:visible group-hover/item:mt-8 opacity-0 group-hover/item:opacity-100  transition-all ease-in-out duration-300 ">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،.
            </p>
            <div className="flex items-center gap-x-2 py-8">
              <span className="text-sm font-semibold text-blue-950">
                مشاهده بیشتر
              </span>
              <span>
                <HiArrowLeft />
              </span>
            </div>
          </div>
        </div>
 */

import ModernaBrnd from "@/components/brands/Moderna";
import AstrazenecaBrand from "@/components/brands/astrazeneca";
import PfizerBrand from "@/components/brands/pfizer";
import SinoVacBrand from "@/components/brands/sinovac";
const BrandSections = () => {
  return (
    <section className="max-w-screen-xl mx-auto container mt-20 ">
      <div className="flex flex-wrap items-center justify-around gap-10">
        <div className="w-28 md:w-32 lg:w-36 xl:w-40 cursor-pointer order-2 md:order-4">
          <SinoVacBrand />
        </div>
        <div className="w-28 md:w-32 lg:w-36 xl:w-40 cursor-pointer order-3 md:order-1 ">
          <ModernaBrnd />
        </div>
        <div className="w-28 md:w-32 lg:w-36 xl:w-40 cursor-pointer order-4 md:order-2">
          <PfizerBrand />
        </div>
        <div className="w-28 md:w-32 lg:w-36 xl:w-40 cursor-pointer order-1 md:order-3">
          <AstrazenecaBrand />
        </div>
      </div>
    </section>
  );
};

export default BrandSections;

import ModernaBrnd from "@/components/brands/Moderna";

import AstrazenecaBrand from "@/components/brands/astrazeneca";
import PfizerBrand from "@/components/brands/pfizer";
import SinoVacBrand from "@/components/brands/sinovac";

import FirstSection from "@/components/sections/firstSection";
import Layout from "@/container/layout";

const Home = () => {
  return (
    <Layout>
      <FirstSection />
      <section className="max-w-screen-xl mx-auto container mt-20 ">
        <div className="flex flex-wrap items-center justify-around gap-10">
          <div className="w-44 cursor-pointer ">
            <SinoVacBrand />
          </div>
          <div className="w-44 cursor-pointer ">
            <ModernaBrnd />
          </div>
          <div className="w-44 cursor-pointer ">
            <PfizerBrand />
          </div>
          <div className="w-44 cursor-pointer ">
            <AstrazenecaBrand />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

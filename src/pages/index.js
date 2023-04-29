

import BrandSections from "@/components/sections/brandSections";
import FirstSection from "@/components/sections/firstSection";
import PlansSection from "@/components/sections/plansSection";
import Layout from "@/container/layout";

const Home = () => {
  return (
    <Layout>
      <FirstSection />
      <BrandSections/>
      <PlansSection />
    </Layout>
  );
};

export default Home;

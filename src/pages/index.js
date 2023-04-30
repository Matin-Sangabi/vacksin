

import BrandSections from "@/components/sections/brandSections";
import FirstSection from "@/components/sections/firstSection";
import PlansSection from "@/components/sections/plansSection";
import SecondSection from "@/components/sections/secondSection";
import StatistiquesSection from "@/components/sections/statistiquesSection";
import Layout from "@/container/layout";

const Home = () => {
  return (
    <Layout>
      <FirstSection />
      <BrandSections/>
      <PlansSection />
      <SecondSection />
      <StatistiquesSection />
    </Layout>
  );
};

export default Home;



import BrandSections from "@/components/sections/brandSections";
import FirstSection from "@/components/sections/firstSection";
import Layout from "@/container/layout";

const Home = () => {
  return (
    <Layout>
      <FirstSection />
      <BrandSections/>
    </Layout>
  );
};

export default Home;

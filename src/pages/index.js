import BrandSections from "@/components/sections/brandSections";
import FirstSection from "@/components/sections/firstSection";
import PlansSection from "@/components/sections/plansSection";
import SecondSection from "@/components/sections/secondSection";
import StatistiquesSection from "@/components/sections/statistiquesSection";
import BasicTooltip from "@/components/toll-tip/toolTip";
import WorldMap from "@/components/worldMap/worldMap";
import Layout from "@/container/layout";
import { useState } from "react";

const Home = () => {
  const [count ,  setCount] = useState("");
  console.log(count);
  return (
    <Layout>
      <FirstSection />
      <BrandSections/>
      <PlansSection />
      <SecondSection />
      {/* <StatistiquesSection /> */}
      <WorldMap content={count} setTooltipContent={setCount} />
      {/* <BasicTooltip /> */}
    </Layout>
  );
};

export default Home;

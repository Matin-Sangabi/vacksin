import BrandSections from "@/components/sections/brandSections";
import FirstSection from "@/components/sections/firstSection";
import PlansSection from "@/components/sections/plansSection";
import SecondSection from "@/components/sections/secondSection";
import StatistiquesSection from "@/components/sections/statistiquesSection";
import WorldMap from "@/components/worldMap/worldMap";
import Layout from "@/container/layout";
import { fetcher } from "@/utils/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import toast from "react-hot-toast";
const Home = () => {
  const router = useRouter();
  const {
    data: covidData,
    isLoading,
    error,
  } = useSWR(
    router.query.country
      ? `https://corona.lmao.ninja/v2/countries/${router.query.country}`
      : null,
    fetcher
  );
  if (error) toast.error(error.message);
  return (
    <Layout>
      <FirstSection />
      <BrandSections />
      <PlansSection />
      <SecondSection />
      <StatistiquesSection />
      <WorldMap covidData={covidData} isLoading={isLoading} />
    </Layout>
  );
};

export default Home;

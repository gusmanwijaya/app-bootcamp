import HeadTitle from "../components/HeadTitle";
import Header from "../components/Header";
import Partner from "../components/Partner";
import GrowToday from "../components/GrowToday";
import Story from "../components/Story";
import Statistic from "../components/Statistic";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <HeadTitle title="Landing Page" />
      <Header />
      <Partner />
      <GrowToday text="Grow Today" title="Featured Events" />
      <Story />
      <Statistic />
      <Footer />
    </>
  );
}

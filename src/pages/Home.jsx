import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import FeaturedMovie from "../components/FeaturedMovie";
import RecentlyAdded from "../components/RecentlyAdded";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - M-flix</title>
      </Helmet>
      <Banner />
      <FeaturedMovie />
      <RecentlyAdded />
      <Faq />
    </>
  );
};

export default Home;

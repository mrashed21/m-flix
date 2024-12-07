import Banner from "../components/Banner";
import Faq from "../components/Faq";
import FeaturedMovie from "../components/FeaturedMovie";
import RecentlyAdded from "../components/RecentlyAdded";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedMovie />
      <RecentlyAdded />
      <Faq />
    </div>
  );
};

export default Home;

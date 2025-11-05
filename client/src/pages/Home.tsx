import Achievements from "../components/Achievements";
import Categories from "../components/Categories";
import FeaturedBooks from "../components/FeaturedBooks";
import Hero from "../components/Hero";
import NewArrival from "../components/NewArrival";
import NewsLetter from "../components/NewsLetter";
import PopularBooks from "../components/PopularBooks";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <NewArrival />
      <FeaturedBooks />
      <PopularBooks />
      <Achievements />
      <NewsLetter />
    </>
  );
};

export default Home;

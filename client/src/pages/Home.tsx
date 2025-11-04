import Categories from "../components/Categories";
import FeaturedBooks from "../components/FeaturedBooks";
import Hero from "../components/Hero";
import NewArrival from "../components/NewArrival";
import PopularBooks from "../components/PopularBooks";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <NewArrival />
      <FeaturedBooks />
      <PopularBooks />
    </>
  );
};

export default Home;

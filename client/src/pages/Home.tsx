import Categories from "../components/Categories";
import FeaturedBooks from "../components/FeaturedBooks";
import Hero from "../components/Hero";
import NewArrival from "../components/NewArrival";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <NewArrival />
      <FeaturedBooks />
    </>
  );
};

export default Home;

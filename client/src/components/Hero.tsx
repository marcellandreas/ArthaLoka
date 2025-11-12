import { useEffect, useState } from "react";
import bg from "../assets/bg.png";
import bg_hero from "../assets/bg-hero.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";

import type { Book } from "../types/data";
import Item from "./Item";
import { useShopContext } from "../contexts/ShopContext";

const Hero = () => {
  const { books } = useShopContext();
  const [popularBooks, setPopularBooks] = useState<Book[]>([]);

  // getting popular books data
  useEffect(() => {
    const data = books.filter((item) => item.popular);
    setPopularBooks(data.slice(0, 6));
  }, [books]);

  useEffect(() => {
    console.log(popularBooks);
  }, [popularBooks]);
  return (
    <section className=" max-padd-container flex gap-6 h-[634px] mt-16">
      <div
        className="flex-5  bg-cover bg-center bg-no-repeat rounded-2xl "
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* left side */}
        <div className=" max-padd-container flex flex-col h-full justify-center pt-8">
          <h3 className=" bold-24 text-secondary font-thin">
            Explore Bools You'll Love
          </h3>
          <h1 className=" h1 max-w-[699px] font-extrabold leading-none">
            Find Your Next Book
          </h1>
          <h2 className=" capitalize h2  tracking-wider">
            Up to 40% This Week
          </h2>
          <p className=" max-w-xl pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            nesciunt exercitationem eius fugiat at quidem laborum? Eum quidem
            laudantium rerum nisi amet facere mollitia cum!ss
          </p>
          {/* button */}
          <div className="flex mt-4">
            <Link
              to={"/shop"}
              className=" bg-white text-xs font-medium pl-6 rounded-full flexCenter gap-x-6 group"
            >
              {" "}
              Check Our Latest stock
              <FaArrowRight className=" bg-secondary text-white  rounded-full h-11 w-11 p-3 m-[3px] border border-white group-hover:bg-primary group-hover:text-black transition-all duration-500" />
            </Link>
          </div>
        </div>
      </div>
      {/* right side */}
      <div
        className="flex-2 bg-primary hidden lg:block rounded-2xl bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bg_hero})` }}
      >
        <div className="max-w-sm py-28">
          {/* container */}
          <div>
            {
              <Swiper
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                breakpoints={{ 355: { slidesPerView: 1, spaceBetween: 10 } }}
                modules={[Autoplay]}
                className=" min-h-[399px] max-w-64"
              >
                {popularBooks.map((book) => (
                  <SwiperSlide key={book._id}>
                    <Item book={book} fromHero={true} />
                  </SwiperSlide>
                ))}
              </Swiper>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

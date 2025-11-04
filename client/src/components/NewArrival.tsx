import { useEffect, useState } from "react";
import { useShopContext } from "../contexts/ShopContext";
import type { Book } from "../interface/data";
import Title from "./common/Title";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";
import Item from "./Item";

const NewArrival = () => {
  const [newArrivals, setNewArrivals] = useState<Book[]>([]);
  const { books } = useShopContext();

  useEffect(() => {
    setNewArrivals(books.slice(0, 6));
  }, [books]);

  return (
    <section className="max-padd-container py-16">
      <Title
        title1="New"
        title2="Arrivals"
        titleStyles="pb-6"
        title1Styles="pt-6"
        para="Check our our newest booking arriving weekly with fresh ideas, exciting plots, and vibrant voices"
      />
      {/* container */}
      <div>
        {
          <Swiper
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              355: { slidesPerView: 2, spaceBetween: 20 },
              600: { slidesPerView: 3, spaceBetween: 30 },
              900: { slidesPerView: 4, spaceBetween: 30 },
              1200: { slidesPerView: 5, spaceBetween: 30 },
            }}
            modules={[Autoplay]}
            className=" min-h-[333px]"
          >
            {newArrivals.map((book) => (
              <SwiperSlide key={book._id}>
                <Item book={book} />
              </SwiperSlide>
            ))}
          </Swiper>
        }
      </div>
    </section>
  );
};

export default NewArrival;

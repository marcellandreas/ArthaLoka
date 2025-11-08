import { useEffect, useState } from "react";
import { useShopContext } from "../../contexts/ShopContext";
import type { Book } from "../../interface/data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";
import Title from "../common/Title";
import Item from "../Item";

interface RelatedBookProps {
  book: Book;
  id?: string;
}

const RelatedBook = ({ book, id }: RelatedBookProps) => {
  const [relatedBoks, setRelatedBooks] = useState<Book[]>([]);
  const { books } = useShopContext();

  useEffect(() => {
    if (books.length > 0) {
      let booksCopy = books.slice();
      booksCopy = booksCopy.filter(
        (item) => item.category === book.category && id !== item._id
      );
      setRelatedBooks(booksCopy.slice(0, 6));
    }
  }, [book]);

  return (
    <section className="max-padd-container py-16">
      <Title
        title1="Related"
        title2="Books"
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
            {relatedBoks.map((book) => (
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

export default RelatedBook;

import { useEffect, useState } from "react";
import Title from "../components/common/Title";
import { useShopContext } from "../contexts/ShopContext";
import Item from "../components/Item";
import type { Book } from "../interface/data";
import { useParams } from "react-router-dom";

const CategoryShop = () => {
  const { books, searchQuery } = useShopContext();
  const [filteresBooks, setFilteresBooks] = useState<Book[]>([]);
  const [currPage, setCurrPage] = useState(1);
  const itemsPerPage = 10;
  const { category } = useParams();

  useEffect(() => {
    let result = books;

    // filter by category from url
    if (category) {
      result = result.filter(
        (book) => book.category.toLowerCase() === category.toLocaleLowerCase()
      );
    }

    if (searchQuery.length > 0) {
      setFilteresBooks(
        (result = result.filter((book) =>
          book.name.toLowerCase().includes(searchQuery.toLowerCase())
        ))
      );
    }
    setFilteresBooks(result);

    setCurrPage(1);
  }, [category, searchQuery]);

  const totalPages = Math.ceil(
    filteresBooks.filter((b) => b.inStock).length / itemsPerPage
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currPage]);

  return (
    <section className=" max-padd-container py-16 pt-28">
      <Title title1={category} title2="Books" titleStyles="pb-10" />
      {/* container */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-8">
        {filteresBooks.length > 0 ? (
          filteresBooks
            .filter((book) => book.inStock)
            .slice((currPage - 1) * itemsPerPage, currPage * itemsPerPage)
            .map((book) => <Item book={book} key={book._id} />)
        ) : (
          <h4 className="h4">Oops! Nothing matched your search</h4>
        )}
      </div>
      {/* pagination */}
      <div className="flexCenter flex-wrap gap-2 sm:gap-4 mt-14  mb-10">
        <button
          disabled={currPage === 1}
          onClick={() => setCurrPage((prev) => prev - 1)}
          className={`${
            currPage === 1 && "opacity-50  cursor-not-allowed"
          } btn-dark py-1 px-3`}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrPage(index + 1)}
            className={`${
              currPage === index + 1 && " bg-secondary text-white"
            } btn-dark py-1 px-3`}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={currPage === totalPages}
          onClick={() => setCurrPage((prev) => prev + 1)}
          className={`${
            currPage === totalPages && "opacity-50  cursor-not-allowed"
          } btn-white bg-tertiary py-1 px-3`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default CategoryShop;

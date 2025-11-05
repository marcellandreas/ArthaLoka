import React, { useEffect, useState } from "react";
import Title from "../components/common/Title";
import { useShopContext } from "../contexts/ShopContext";
import Item from "../components/Item";
import type { Book } from "../interface/data";

const Shop = () => {
  const { books, searchQuery, setSearchQuery } = useShopContext();
  const [filteresBooks, setFilteresBooks] = useState<Book[]>([]);
  const [currPage, setCurrPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilteresBooks(
        books.filter((book) =>
          book.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteresBooks(books);
    }

    setCurrPage(1);
  }, [books, searchQuery]);

  const totalPages = Math.ceil(
    filteresBooks.filter((b) => b.inStock).length / itemsPerPage
  );
  return (
    <section className=" max-padd-container py-16 pt-28">
      <Title title1="All" title2="Books" titleStyles="pb-10" />
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
    </section>
  );
};

export default Shop;

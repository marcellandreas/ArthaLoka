import React from "react";
import Title from "../components/common/Title";
import { useShopContext } from "../contexts/ShopContext";
import Item from "../components/Item";

const Shop = () => {
  const { books } = useShopContext();
  return (
    <section className=" max-padd-container py-16 pt-28">
      <Title title1="All" title2="Books" titleStyles="pb-10" />
      {/* container */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-8">
        {books.length > 0 ? (
          books.map((book) => <Item book={book} key={book._id} />)
        ) : (
          <h4 className="h4">Oops! Nothing matched your search</h4>
        )}
      </div>
    </section>
  );
};

export default Shop;

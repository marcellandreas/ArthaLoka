import { useEffect, useState } from "react";
import { FaTruckFast } from "react-icons/fa6";
import {
  TbHeart,
  TbShoppingBag,
  TbStarFilled,
  TbStarHalfFilled,
} from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import { useShopContext } from "../contexts/ShopContext";
import ProductDescription from "../components/products/ProductDescription";
import ProductFeatures from "../components/products/ProductFeatures";
import RelatedBook from "../components/products/RelatedBook";

const ProductDetails = () => {
  const { books, currency, addToCart, cartItems } = useShopContext();
  const { id } = useParams<{ id?: string }>();

  const book = books.find((book) => book._id === id);
  const [image, setImage] = useState<string>("null");

  useEffect(() => {
    if (book) {
      setImage(book.image[0]);
    }
  }, [book]);

  useEffect(() => {
    console.log(cartItems);
  }, [addToCart]);

  return (
    book && (
      <div className="max-padd-container py-16 pt-28">
        <p>
          <Link to={"/"}>Home</Link> /<Link to={"/shop"}>Shop</Link> /
          <Link to={`/shop/${book.category}`}>{book.category}</Link> /
          <span className=" cursor-pointer">{book.name}</span>
        </p>
        {/* book data */}
        <div className="flex gap-10 flex-col xl:flex-row my-6">
          {/* image */}
          <div className="flex gap-x-2 max-w-[433px] rounded-xl">
            <div className="flex-1 flexCenter flex-col gap-[7px] flex-wrap">
              {book.image.map((item, index) => (
                <div key={index}>
                  <img
                    onClick={() => setImage(item)}
                    src={item}
                    alt={`${index}.png`}
                    className=" rounded-lg overflow-hidden"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-4">
              <img
                src={image}
                alt="book image"
                className="rounded-lg overflow-hidden"
              />
            </div>
          </div>
          {/* info */}
          <div className="px-5 py-3 w-full bg-primary rounded-xl pt-8">
            <h3 className="">{book.name}</h3>
            <div className="flex items-center gap-x-2 pt-2">
              <div className="flex gap-x-2 text-yellow-400">
                <TbStarFilled />
                <TbStarFilled />
                <TbStarFilled />
                <TbStarFilled />
                <TbStarHalfFilled />
              </div>
              <p className=" medium-22">(22)</p>
            </div>
            <div className="h4 flex items-baseline gap-4 my-2">
              <h3 className="h3 line-through text-secondary">
                {currency}
                {book.price}.00
              </h3>
              <h4 className="h4">
                {currency}
                {book.offerPrice}
              </h4>
            </div>
            <p className="max-w-[55p5x]">{book.description}</p>
            <div className="flex items-center gap-x-4 mt-6">
              <button
                onClick={() => addToCart(book._id)}
                className="btn-dark sm:w-1/2 flexCenter gap-x-2 capitalize rounded-md"
              >
                Add to Cart
                <TbShoppingBag className=" text-xl" />
              </button>
              <button className=" btn-sencondary rounded-md">
                <TbHeart className=" text-xl" />
              </button>
            </div>
            <div className="flex items-center gap-x-2 mt3">
              <FaTruckFast className=" text-lg" />
              <span className=" medium-14">
                Free Delivery on orders over $500
              </span>
            </div>
            <hr className=" my-3 w-2" />
            <div className=" mt-2 flex flex-col gap-1 text-gray-300  text-[14px]">
              <p>Authenticy You Can Trust</p>
              <p>Enjoy Cash on Delivery for your Convenience</p>
              <p className="">Easy Returns and Exchanges Within 7 Days</p>
            </div>
          </div>
        </div>
        <ProductDescription />
        <ProductFeatures />
        <RelatedBook book={book} id={id} />
      </div>
    )
  );
};

export default ProductDetails;

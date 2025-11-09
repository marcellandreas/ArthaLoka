import { FaMinus, FaPlus } from "react-icons/fa";
import CartTotal from "../components/cart/CartTotal";
import Title from "../components/common/Title";
import { useShopContext } from "../contexts/ShopContext";

const Cart = () => {
  const { navigate, books, cartItems, currency, updateQuantity } =
    useShopContext();
  return books && cartItems ? (
    <div className=" max-padd-container py-16 pt-28">
      <div className="flex flex-col xl:flex-row gap-20 xl:gap-28">
        {/* left side */}
        <div className="flex flex-2 flex-col gap-3">
          <Title
            title1="Cart"
            title2="Overview"
            titleStyles="pb-10"
            para="View your selected books here. Make sure the titles and quantities are correct before proceeding to checkout."
          />
          <div className="grid grid-cols-[6fr_1fr_2fr] text-base font-medium bg-primary p-2 rounded-lg">
            <h5 className="h5 text-left">Product Details</h5>
            <h5 className="h5 text-center ">Subtotal</h5>
            <h5 className="h5 text-center">Action</h5>
          </div>
          {books.map((book) => {
            const quantity = cartItems[book._id];
            if (quantity > 0) {
              return (
                <div
                  key={book._id}
                  className="grid grid-cols-[6fr_1fr_2fr] text-base font-medium bg-primary p-2 rounded-lg"
                >
                  <div className=" flex items-center md:gap-6 gap-3">
                    <div className="flex bg-primary">
                      <img
                        src={book.image[0]}
                        alt={book._id}
                        className="w-12 rounded-lg"
                      />
                    </div>
                    <div>
                      <h5 className="hidden sm:block line-clamp-1">
                        {book.name}
                      </h5>
                      <div className="flexBetween mt-2">
                        <div className="flex  items-center ring-1 ring-slate-900/5 p-0.5 rounded-full overflow-hidden bg-white">
                          <button
                            onClick={() =>
                              updateQuantity(book._id, quantity - 1)
                            }
                            className="p-1.5 bg-primary rounded-full cursor-pointer"
                          >
                            <FaMinus className=" text-xs" />
                          </button>
                          <p className="px-2">{quantity}</p>
                          <button
                            onClick={() =>
                              updateQuantity(book._id, quantity + 1)
                            }
                            className="p-1.5 bg-primary rounded-full cursor-pointer"
                          >
                            <FaPlus className=" text-xs" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className=" text-center flexCenter">
                    {currency}
                    {book.offerPrice * quantity}
                  </p>
                  <button
                    onClick={() => updateQuantity(book._id, 0)}
                    className=" cursor-pointer mx-auto bold-14 text-secondary"
                  >
                    Delete
                  </button>
                </div>
              );
            }
            return null;
          })}
        </div>
        {/* Right Side */}
        <div className="flex flex-1 flex-col">
          <div className="max-w-[379px] w-full bg-primary p-5 py-10 max-md:mt-16 rounded-xl">
            <CartTotal />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Cart;

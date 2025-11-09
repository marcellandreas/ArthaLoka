import { useState } from "react";
import Title from "../components/common/Title";
import { dummyOrders } from "../assets/data";
import { useShopContext } from "../contexts/ShopContext";

const MyOders = () => {
  const { currency, user } = useShopContext();
  const [orders, setOrders] = useState(dummyOrders);
  return (
    <div className="max-padd-container py-16 pt-28 ">
      <Title title1={"My"} title2={"Orders List"} titleStyles="pb-10" />
      {orders.map((order) => (
        <div
          key={order._id}
          className="bg-primary/90 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300 p-4 mt-4 rounded-2xl border border-gray-200"
        >
          {/* Book List */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-4">
            {order.items.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white/10 p-3 rounded-xl"
              >
                {/* Book Image */}
                <div className="shrink-0 w-20 h-24 overflow-hidden rounded-lg border border-gray-300 bg-white">
                  <img
                    src={item.book.image[0]}
                    alt={item.book.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Book Info */}
                <div className="flex flex-col flex-1">
                  <h5 className="font-semibold text-base line-clamp-1 text-gray-900 ">
                    {item.book.name}
                  </h5>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-700  mt-1">
                    <span>
                      <span className="font-medium">Price:</span> {currency}
                      {item.book.offerPrice}
                    </span>
                    <span>
                      <span className="font-medium">Qty:</span> {item.quantity}
                    </span>
                    <span>
                      <span className="font-medium">Size:</span> {item.size}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-t border-gray-300 pt-4">
            <div className="space-y-2 text-sm text-gray-700 ">
              <p>
                <span className="font-medium">Order ID:</span>{" "}
                <span className="text-gray-400 break-all">{order._id}</span>
              </p>
              <p>
                <span className="font-medium">Payment:</span>{" "}
                {order.isPaid ? (
                  <span className="text-green-500 font-semibold">Done</span>
                ) : (
                  <span className="text-yellow-500 font-semibold">Pending</span>
                )}{" "}
                • {order.paymentMethod}
              </p>
              <p>
                <span className="font-medium">Date:</span>{" "}
                {new Date(order.createdAt).toLocaleDateString("id-ID", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: "Asia/Jakarta",
                })}
              </p>
              <p>
                <span className="font-medium">Amount:</span> {currency}
                {order.amount}
              </p>
            </div>

            {/* Status + Button */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="flex items-center gap-2">
                <h5 className="font-medium text-sm">Status:</h5>
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      order.status === "Delivered"
                        ? "bg-green-500"
                        : order.status === "Shipped"
                        ? "bg-blue-500"
                        : "bg-gray-400"
                    }`}
                  />
                  <p className="capitalize">{order.status}</p>
                </div>
              </div>
              <button className="btn-secondary text-xs px-3 py-1 rounded-md hover:opacity-90 transition-all">
                Track Order
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOders;

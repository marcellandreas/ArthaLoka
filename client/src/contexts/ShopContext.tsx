import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyBooks } from "../assets/data";
import type {
  Book,
  ShopContextProviderProps,
  ShopContextType,
} from "../types/data";

export const ShopContext = createContext<ShopContextType | undefined>(
  undefined
);

export const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  const navigate = useNavigate();
  const [books, setBooks] = useState<Book[]>([]);
  const [user, setUser] = useState<any>("null");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const currency = import.meta.env.VITE_CURRENCY as string;
  const [cartItems, setCartItems] = useState<{ [key: string]: number }>({});
  const [method, setMethod] = useState<string>("COD");
  const delivery_charges: number = 10;
  const [showUserLogin, setShowUserLogin] = useState<any>(true);
  const [isAdmin, setIsAdmin] = useState(false);

  // fetch all books
  const fetchBooks = () => {
    setBooks(dummyBooks);
  };

  // adding items to cart
  const addToCart = (itemId: string) => {
    const cartData = { ...cartItems };

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }

    setCartItems(cartData);
  };

  // getting totoal cart items
  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      try {
        if (cartItems[itemId] > 0) {
          totalCount += cartItems[itemId];
        }
      } catch (error) {
        console.log(error);
      }
    }
    return totalCount;
  };

  // update  the quantity of item
  const updateQuantity = (itemId: string, quantity: number): void => {
    const cartData = { ...cartItems };
    cartData[itemId] = quantity;
    setCartItems(cartData);
  };

  // getting getCartAmount
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        let itemInfo = books.find((book) => book._id === itemId);
        if (itemInfo) {
          totalAmount += itemInfo.offerPrice * cartItems[itemId];
        }
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const value: ShopContextType = {
    books,
    setBooks,
    navigate,
    user,
    setUser,
    currency,
    searchQuery,
    setSearchQuery,
    cartItems,
    setCartItems,
    addToCart,
    getCartAmount,
    getCartCount,
    updateQuantity,
    method,
    setMethod,
    delivery_charges,
    showUserLogin,
    setShowUserLogin,
    isAdmin,
    setIsAdmin,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

// export const useShopContext = () => useContext(ShopContext);
export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShopContext must be used within a ShopContextProvider");
  }
  return context;
};

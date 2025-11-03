import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyBooks } from "../assets/data";
import type {
  Book,
  ShopContextProviderProps,
  ShopContextType,
} from "../interface/data";

export const ShopContext = createContext<ShopContextType | undefined>(
  undefined
);

export const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  const navigate = useNavigate();
  const [books, setBooks] = useState<Book[]>([]);
  const [user, setUser] = useState<any>(null);
  const currency = import.meta.env.VITE_CURRENCY as string;

  // fetch all books
  const fetchBooks = () => {
    setBooks(dummyBooks);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const value: ShopContextType = { books, navigate, user, setUser, currency };
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

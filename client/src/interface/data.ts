import type { ReactNode } from "react";
import type { NavigateFunction } from "react-router-dom";

export interface Category {
  name: string;
  image: string;
}

export interface Book {
  _id: string;
  name: string;
  image: string[];
  price: number;
  offerPrice: number;
  description: string;
  category: string;
  date: number;
  popular: boolean;
  inStock: boolean;
}

export interface Address {
  _id: string;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zipcode: number;
  country: string;
  phone: string;
}

export interface Blog {
  title: string;
  category: string;
  image: string;
}

export interface OrderItem {
  book: Book;
  quantity: number;
  size: string;
}

export interface Order {
  _id: string;
  userId: string;
  items: OrderItem[];
  address: Omit<Address, "_id" | "userId" | "email">;
  amount: number;
  paymentMethod: string;
  isPaid: boolean;
  status: string;
  createdAt: string;
}

export interface ShopContextType {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  navigate: NavigateFunction;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  currency: string;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<any>>;
  addToCart: (itemId: string) => void;
  getCartAmount: () => number;
  updateQuantity: (itemId: string, quantity: number) => void;
  getCartCount: () => number;
  setCartItems: React.Dispatch<React.SetStateAction<any>>;
  cartItems: { [key: string]: number };
  method: string;
  setMethod: React.Dispatch<React.SetStateAction<string>>;
  delivery_charges: number;
  showUserLogin: string;
  setShowUserLogin: React.Dispatch<React.SetStateAction<string>>;
}

export interface ShopContextProviderProps {
  children: ReactNode;
}

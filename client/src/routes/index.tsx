import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import CategoryShop from "../pages/CategoryShop";
import ProductDetails from "../pages/ProductDetails";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:category" element={<CategoryShop />} />
      <Route path="/shop/:category/:id" element={<ProductDetails />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/index.css";
import App from "./App.tsx";
import { ShopContextProvider } from "./contexts/ShopContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </Router>
  </StrictMode>
);

import React from "react";
import Footer from "../components/navigation/Footer";
import Headers from "../components/navigation/Headers";
import { useLocation } from "react-router-dom";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const isAdminPath = useLocation().pathname.includes("admin");
  return (
    <main>
      {!isAdminPath && <Headers />}
      {children}
      {!isAdminPath && <Footer />}
    </main>
  );
};

export default MainLayout;

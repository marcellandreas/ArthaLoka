import React from "react";
import Footer from "../components/navigation/Footer";
import Headers from "../components/navigation/Headers";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main>
      <Headers />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;

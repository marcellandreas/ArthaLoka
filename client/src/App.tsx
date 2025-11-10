import { Toaster } from "react-hot-toast";
import AppRouter from "./routes";
import MainLayout from "./layouts/MainLayout";
import { useShopContext } from "./contexts/ShopContext";
import { useLocation } from "react-router-dom";
import Login from "./components/auth/Login";

function App() {
  const { showUserLogin } = useShopContext();

  // const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <main>
      {showUserLogin && <Login />}
      <Toaster position="bottom-right" />
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </main>
  );
}

export default App;

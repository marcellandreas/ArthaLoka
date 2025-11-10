import { Toaster } from "react-hot-toast";
import Login from "./components/auth/Login";
import { useShopContext } from "./contexts/ShopContext";
import MainLayout from "./layouts/MainLayout";
import AppRouter from "./routes";

function App() {
  const { showUserLogin } = useShopContext();

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

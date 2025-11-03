import { Toaster } from "react-hot-toast";
import AppRouter from "./routes";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <main>
      <Toaster position="bottom-right" />
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </main>
  );
}

export default App;

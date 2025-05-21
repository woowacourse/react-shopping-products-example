import ProductListPage from "./ProductListPage/ProductListPage";
import { APIProvider } from "./ProductListPage/APIContex";

function App() {
  return (
    <APIProvider>
      <ProductListPage />
    </APIProvider>
  );
}

export default App;

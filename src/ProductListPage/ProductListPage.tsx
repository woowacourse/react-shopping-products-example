import ProductList from "./ProductList";
import Header from "./Header";
import { CartProvider } from "./CartContext";

export default function ProductListPage() {
  return (
    <CartProvider>
      <Header />
      <ProductList />
    </CartProvider>
  );
}

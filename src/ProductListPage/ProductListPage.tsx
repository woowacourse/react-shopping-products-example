import ProductList from "./ProductList";
import Header from "./Header";
import { CartProvider } from "./CartContext";
import { ProductListProvider } from "./ProductListContext";

export default function ProductListPage() {
  return (
    <CartProvider>
      <Header />
      <ProductListProvider>
        <ProductList />
      </ProductListProvider>
    </CartProvider>
  );
}

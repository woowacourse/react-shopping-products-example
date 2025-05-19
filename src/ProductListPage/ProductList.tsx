import { type ProductType } from "./remote";
import { useCartContext } from "./CartContext";
import { useProductListContext } from "./ProductListContext";

export default function ProductList() {
  const { products } = useProductListContext();

  return (
    <>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </>
  );
}

function ProductItem({ product }: { product: ProductType }) {
  const { cartItems, toggleCartItem } = useCartContext();

  const isInCart = cartItems.some((item) => item.product.id === product.id);
  const onToggleCart = () => toggleCartItem(product.id);

  return (
    <div>
      <h3>{product.name}</h3>
      <button onClick={onToggleCart}>
        {isInCart ? "장바구니에서 삭제" : "장바구니에 담기"}
      </button>
    </div>
  );
}

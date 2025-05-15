import type { ProductType } from "./remote";

export default function ProductItem({
  product,
  isInCart,
  onToggleCart,
}: {
  product: ProductType;
  isInCart: boolean;
  onToggleCart: () => void;
}) {
  return (
    <div>
      <h3>{product.name}</h3>
      <button onClick={onToggleCart}>
        {isInCart ? "장바구니에서 삭제" : "장바구니에 담기"}
      </button>
    </div>
  );
}

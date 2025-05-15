import { useState } from "react";
import { type ProductType } from "./remote";
import { mockProducts } from "../mocks/products";
import { useCartContext } from "./CartContext";

export default function ProductList() {
  const [products] = useState<ProductType[]>(mockProducts);

  return (
    <>
      {products.map((product) => (
        <CartAwareProductItem key={product.id} product={product} />
      ))}
    </>
  );
}

function CartAwareProductItem({ product }: { product: ProductType }) {
  const { cartItems, toggleCartItem } = useCartContext();

  const isInCart = cartItems.some((item) => item.product.id === product.id);
  const onToggleCart = () => toggleCartItem(product.id);

  return (
    <ProductItem
      product={product}
      isInCart={isInCart}
      onToggleCart={onToggleCart}
    />
  );
}

// 순수 컴포넌트
function ProductItem({
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

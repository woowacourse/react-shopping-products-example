// ProductList.tsx
import { useEffect, useState } from "react";
import {
  addCartItem,
  deleteCartItem,
  getCartItems,
  type ProductType,
  type CartItemType,
} from "./remote";
import { mockProducts } from "../mocks/products";

export default function ProductList() {
  const [products] = useState<ProductType[]>(mockProducts);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  useEffect(() => {
    getCartItems().then(setCartItems);
  }, []);

  const handleToggleCartItem = async (productId: number) => {
    const existingCartItem = cartItems.find(
      (item) => item.product.id === productId
    );

    if (existingCartItem) {
      await deleteCartItem(existingCartItem.id);
    } else {
      await addCartItem(productId);
    }

    const updatedCartItems = await getCartItems();
    setCartItems(updatedCartItems);
  };

  return (
    <>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          isInCart={cartItems.some((item) => item.product.id === product.id)}
          onToggleCart={() => handleToggleCartItem(product.id)}
        />
      ))}
    </>
  );
}

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

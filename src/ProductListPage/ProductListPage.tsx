import ProductList from "./ProductList";
import Header from "./Header";
import { useEffect, useState } from "react";
import {
  addCartItem,
  deleteCartItem,
  getCartItems,
  type CartItemType,
} from "./remote";
import ProductItem from "./ProductItem";

export default function ProductListPage() {
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
      <Header cartItemCount={cartItems.length} />
      <ProductList
        renderProduct={({ product }) => (
          <ProductItem
            product={product}
            isInCart={cartItems.some((item) => item.product.id === product.id)}
            onToggleCart={() => handleToggleCartItem(product.id)}
          />
        )}
      />
    </>
  );
}

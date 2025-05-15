import { useEffect, useState } from "react";
import { type CartItemType, getCartItems } from "./remote";

export default function Header() {
  return (
    <>
      <CartIcon />
      <CartItemCount />
    </>
  );
}

function CartIcon() {
  return <div>🛒</div>;
}

function CartItemCount() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  useEffect(() => {
    getCartItems().then((data) => setCartItems(data));
  }, []);

  return <div>{cartItems.length} items</div>;
}

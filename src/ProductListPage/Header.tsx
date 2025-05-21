import { useAPI } from "./APIContex";
import { getCartItems } from "./remote";

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
  const cartItems = useAPI({
    fetcher: getCartItems,
    name: "cartItems",
  })?.data;

  return <div>{cartItems?.length} items</div>;
}

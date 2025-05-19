import { useCartContext } from "./CartContext";

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
  const { cartItems } = useCartContext();

  return <div>{cartItems.length} items</div>;
}

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
  const { cartItemCount } = useCartContext();

  return <div>{cartItemCount} items</div>;
}

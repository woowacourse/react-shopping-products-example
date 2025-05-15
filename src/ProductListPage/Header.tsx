export default function Header({ cartItemCount }: { cartItemCount: number }) {
  return (
    <>
      <CartIcon />
      <CartItemCount cartItemCount={cartItemCount} />
    </>
  );
}

function CartIcon() {
  return <div>🛒</div>;
}

function CartItemCount({ cartItemCount }: { cartItemCount: number }) {
  return <div>{cartItemCount} items</div>;
}

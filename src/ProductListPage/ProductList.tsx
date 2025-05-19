import { addCartItem, deleteCartItem, type ProductType } from "./remote";
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
  const { cartItems, refetchCartItems } = useCartContext();

  const isInCart = cartItems.some((item) => item.product.id === product.id);

  const toggleCartItem = async (productId: number) => {
    const existingCartItem = cartItems.find(
      (item) => item.product.id === productId
    );

    if (existingCartItem) {
      await deleteCartItem(existingCartItem.id);
    } else {
      await addCartItem(productId);
    }

    await refetchCartItems();
  };

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

import {
  addCartItem,
  deleteCartItem,
  getCartItems,
  getProducts,
  type ProductType,
} from "./remote";
import { useAPI } from "./APIContex";

export default function ProductList() {
  const { data: products } = useAPI({
    fetcher: getProducts,
    name: "products",
  });

  return (
    <>
      {products?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </>
  );
}

function ProductItem({ product }: { product: ProductType }) {
  const { data: cartItems, refetch: refetchCartItems } = useAPI({
    fetcher: getCartItems,
    name: "cartItems",
  });

  const isInCart = cartItems?.some((item) => item.product.id === product.id);

  const toggleCartItem = async (productId: number) => {
    const existingCartItem = cartItems?.find(
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

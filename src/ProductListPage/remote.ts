export const BASE_URL = "http://localhost:8080";

export type CartItemType = {
  id: number;
  quantity: number;
  product: ProductType;
};

export type ProductType = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
};

export const getCartItems = async () => {
  const res = await fetch(`${BASE_URL}/cart-items`);
  return res.json() as Promise<CartItemType[]>;
};

export const addCartItem = async (productId: number) => {
  await fetch(`${BASE_URL}/cart-items`, {
    method: "POST",
    body: JSON.stringify({ productId, quantity: 1 }),
  });
  return null;
};

export const deleteCartItem = async (cartItemId: number) => {
  await fetch(`${BASE_URL}/cart-items/${cartItemId}`, {
    method: "DELETE",
  });
  return null;
};

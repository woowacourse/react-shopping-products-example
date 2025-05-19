import { mockProducts } from "../mocks/products";

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

// mock data
let mockCartItems: CartItemType[] = [];
let nextCartItemId = 1;

// API mocking
export const getCartItems = async (): Promise<CartItemType[]> => {
  return Promise.resolve([...mockCartItems]);
};

export const addCartItem = async (productId: number) => {
  const product = mockProducts.find((p) => p.id === productId);

  if (product) {
    mockCartItems.push({
      id: nextCartItemId++,
      quantity: 1,
      product,
    });
  }

  return Promise.resolve(null);
};

export const deleteCartItem = async (cartItemId: number) => {
  mockCartItems = mockCartItems.filter((item) => item.id !== cartItemId);
  return Promise.resolve(null);
};

export const getProducts = async (): Promise<ProductType[]> => {
  return Promise.resolve(mockProducts);
};

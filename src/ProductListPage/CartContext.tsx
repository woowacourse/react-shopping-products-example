import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { getCartItems, type CartItemType } from "./remote";

type CartContextType = {
  cartItems: CartItemType[];
  refetchCartItems: () => Promise<void>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const fetchCartItems = useCallback(async () => {
    const cartItems = await getCartItems();
    setCartItems(cartItems);
  }, []);

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        refetchCartItems: fetchCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

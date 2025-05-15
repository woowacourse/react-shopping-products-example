import React, { createContext, useContext, useEffect, useState } from "react";
import {
  addCartItem,
  deleteCartItem,
  getCartItems,
  type CartItemType,
} from "./remote";

type CartContextType = {
  cartItems: CartItemType[];
  cartItemCount: number;
  toggleCartItem: (productId: number) => Promise<void>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  useEffect(() => {
    getCartItems().then(setCartItems);
  }, []);

  const toggleCartItem = async (productId: number) => {
    const existingCartItem = cartItems.find(
      (item) => item.product.id === productId
    );

    if (existingCartItem) {
      await deleteCartItem(existingCartItem.id);
    } else {
      await addCartItem(productId);
    }

    const updatedCartItems = await getCartItems();
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartItemCount: cartItems.length,
        toggleCartItem,
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

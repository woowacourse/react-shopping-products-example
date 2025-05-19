import React, { createContext, useContext, useEffect, useState } from "react";
import { getProducts, type ProductType } from "./remote";

interface ProductListContextType {
  products: ProductType[];
}

const ProductListContext = createContext<ProductListContextType | undefined>(
  undefined
);

export function ProductListProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <ProductListContext.Provider value={{ products }}>
      {children}
    </ProductListContext.Provider>
  );
}

export function useProductListContext() {
  const context = useContext(ProductListContext);
  if (context === undefined) {
    throw new Error(
      "useProductListContext must be used within a ProductListProvider"
    );
  }
  return context;
}

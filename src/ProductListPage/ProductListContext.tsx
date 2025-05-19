import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { getProducts, type ProductType } from "./remote";

interface ProductListContextType {
  products: ProductType[];
  refetchProducts: () => Promise<void>;
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

  const fetchProducts = useCallback(async () => {
    const products = await getProducts();
    setProducts(products);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <ProductListContext.Provider
      value={{ products, refetchProducts: fetchProducts }}
    >
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

import { useState } from "react";
import { type ProductType } from "./remote";
import { mockProducts } from "../mocks/products";

export default function ProductList({
  renderProduct,
}: {
  renderProduct: ({ product }: { product: ProductType }) => React.ReactNode;
}) {
  const [products] = useState<ProductType[]>(mockProducts);

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>{renderProduct({ product })}</div>
      ))}
    </>
  );
}

import type { ProductType } from "../ProductListPage/remote";

export const mockProducts: ProductType[] = [
  {
    id: 1,
    name: "프리미엄 커피 원두",
    price: 25000,
    imageUrl:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500",
    category: "커피",
  },
  {
    id: 2,
    name: "드립 커피 필터",
    price: 12000,
    imageUrl:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500",
    category: "커피용품",
  },
  {
    id: 3,
    name: "커피 그라인더",
    price: 89000,
    imageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500",
    category: "커피용품",
  },
  {
    id: 4,
    name: "커피 서버",
    price: 32000,
    imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500",
    category: "커피용품",
  },
  {
    id: 5,
    name: "디카페인 커피",
    price: 28000,
    imageUrl: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500",
    category: "커피",
  },
];

export type ProductImage = {
  url: string;
  alt?: string;
};

export type ProductPrice = {
  value: number;
  currencyCode: "USD" | "EUR" | string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  slug: string;
  path: string;
  images: Array<ProductImage>;
  price: ProductPrice;
};

export type ProductImage = {
  url: string;
  alt?: string;
};

export type ProductPrice = {
  value: number;
  currencyCode: "USD" | "EUR" | string;
};

export type ProductOptionValues = {
  label: string;
  hexColor?: string;
};

export type ProductOption = {
  id: string;
  displayName: string;
  values: ProductOptionValues[];
};

export type ProductVariant = {
  id: string;
  name: string;
  options: ProductOption[];
};

export type Product = {
  id: string;
  name: string;
  description: string;
  slug: string;
  path: string;
  images: Array<ProductImage>;
  price: ProductPrice;
  options: ProductOption[];
  variants: ProductVariant[];
};

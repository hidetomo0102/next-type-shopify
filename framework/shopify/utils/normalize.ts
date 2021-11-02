import { Product } from "../../common/types/products";
import { Product as ShopifyProduct, ImageEdge, MoneyV2 } from "../schema";

const normalizeProductImages = ({ edges }: { edges: Array<ImageEdge> }) =>
  edges.map(({ node: { originalSrc: url, ...rest } }) => ({
    url: `/images/${url}`,
    ...rest,
  }));

const normalizeProductPrice = ({ currencyCode, amount }: MoneyV2) => ({
  value: +amount,
  currencyCode,
});

export const normalizeProduct = (productNode: ShopifyProduct): Product => {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: ImageConnection,
    priceRange,
    ...rest
  } = productNode;

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    images: normalizeProductImages(ImageConnection),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    ...rest,
  };

  return product;
};

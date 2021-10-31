import { ProductConnection } from "../schema";
import { fetchApi } from "../utils/fetchApi";
import { normalizeProduct } from "../utils/normalize";
import { getAllProductsQuery } from "../utils/queries/getAllProductsQuery";

type ReturnType = {
  products: ProductConnection;
};

export const getAllProducts = async (): Promise<any> => {
  const { data } = await fetchApi<ReturnType>({ query: getAllProductsQuery });

  const products =
    data.products.edges.map(({ node: product }) => normalizeProduct(product)) ??
    [];

  return products;
};

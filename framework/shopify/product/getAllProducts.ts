import { ApiConfig } from "../../common/types/api";
import { Product } from "../../common/types/products";
import { ProductConnection } from "../schema";
import { fetchApi } from "../utils/fetchApi";
import { normalizeProduct } from "../utils/normalize";
import { getAllProductsQuery } from "../utils/queries/getAllProductsQuery";

type ReturnType = {
  products: ProductConnection;
};

export const getAllProducts = async (
  config: ApiConfig
): Promise<Array<Product>> => {
  const { data } = await fetchApi<ReturnType>({
    url: config.apiUrl,
    query: getAllProductsQuery,
  });

  const products =
    data.products.edges.map(({ node: product }) => normalizeProduct(product)) ??
    [];

  return products;
};

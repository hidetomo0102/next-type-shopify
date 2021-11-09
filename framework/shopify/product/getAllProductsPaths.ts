import { ApiConfig } from "../../common/types/api";
import { Product } from "../../common/types/products";
import { ProductConnection } from "../schema";
import { getAllProductsPathsQuery } from "../utils/queries/getAllProductsPaths";

type ReturnType = {
  products: Pick<Product, "slug">[];
};

export const getAllProductsPaths = async (
  config: ApiConfig
): Promise<ReturnType> => {
  const { data } = await config.fetch<{ products: ProductConnection }>({
    query: getAllProductsPathsQuery,
    url: config.apiUrl,
  });

  const products = data.products.edges.map(({ node: { handle } }) => {
    return {
      slug: handle,
    };
  });

  return { products };
};

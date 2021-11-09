import { Product } from "../../common/types/products";
import { Product as ShopifyProduct } from "../schema";
import { ApiConfig, Variables } from "../../common/types/api";
import { normalizeProduct } from "../utils/normalize";
import { getProductQuery } from "../utils/queries/getProduct";

type FetchType = {
  productByHandle: ShopifyProduct;
};

type ReturnType = {
  product: Product | null;
};

export const getProduct = async (options: {
  config: ApiConfig;
  variables: Variables;
}): Promise<ReturnType> => {
  const { config, variables } = options;

  const { data } = await config.fetch<FetchType>({
    query: getProductQuery,
    url: config.apiUrl,
    variables,
  });

  const { productByHandle } = data;
  return {
    product: productByHandle ? normalizeProduct(productByHandle) : null,
  };
};

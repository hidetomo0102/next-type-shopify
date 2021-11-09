import { ApiConfig } from "../../common/types/api";
import { getProductQuery } from "../utils/queries/getProduct";

export const getProduct = async (config: ApiConfig): Promise<any> => {
  const { data } = await config.fetch<any>({
    query: getProductQuery,
    url: config.apiUrl,
  });
  return {
    product: {
      name: "My super product",
      slug: "my-super-product",
    },
  };
};

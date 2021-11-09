import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";

import { Layout } from "../../components/common/Layout";
import { getConfig } from "../../framework/shopify/api/config";
import { getAllProductsPaths } from "../../framework/shopify/product/getAllProductsPaths";
import { getProduct } from "../../framework/shopify/product/getProduct";

export const getStaticPaths: GetStaticPaths = async () => {
  const config = getConfig();
  const { products } = await getAllProductsPaths(config);

  return {
    paths: products.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

// provide product specific data to the page
export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  const config = getConfig();
  const { product } = await getProduct(config);
  return {
    props: {
      product,
    },
  };
};

export default function ProductSlug({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      {product.name}
      {product.slug}
    </div>
  );
}

ProductSlug.Layout = Layout;
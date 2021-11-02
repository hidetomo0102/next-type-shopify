import type { InferGetStaticPropsType, NextPage } from "next";

import { ProductCard } from "../components/product/ProductCard";
import { Grid } from "../components/ui/Grid";
import { getConfig } from "../framework/shopify/api/config";
import { getAllProducts } from "../framework/shopify/product/getAllProducts";

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Grid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
}

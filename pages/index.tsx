import type { InferGetStaticPropsType, NextPage } from "next";
import { getAllProducts } from "../framework/shopify/product/getAllProducts";

export async function getStaticProps() {
  const products = await getAllProducts();

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
  getAllProducts();

  return <div>{JSON.stringify(products)}</div>;
}

import type { InferGetStaticPropsType, NextPage } from "next";

import { ProductCard } from "../components/product/ProductCard";
import { Grid } from "../components/ui/Grid";
import { Hero } from "../components/ui/Hero";
import { Marquee } from "../components/ui/Marquee";
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
    <>
      <Grid>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Hero
        headline="Cookie, ice cream and muffin"
        description="Marshmallow tart jelly icing cotton candy tootsie roll cotton candy candy canes. Cake liquorice sesame snaps. Cupcake cake cheesecake pie marshmallow lollipop soufflé marshmallow dessert. Cheesecake jujubes halvah chupa chups lollipop tootsie roll. Jelly-o tiramisu jelly toffee cake croissant lemon drops pudding. Donut sesame snaps gummi bears toffee. Sesame snaps jelly-o oat cake chocolate marzipan cake lollipop. Gingerbread cheesecake jujubes fruitcake cake. Tiramisu cotton candy marzipan candy canes oat cake pudding bonbon"
      />
      <Marquee>
        {products.slice(0, 3).map((product) => (
          <div className="flex-1 px-16 py-4 relative">
            <ProductCard key={product.id} variant="slim" product={product} />
          </div>
        ))}
      </Marquee>
    </>
  );
}

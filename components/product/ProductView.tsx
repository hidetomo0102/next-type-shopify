import { FC } from "react";
import Image from "next/dist/client/image";

import { Product } from "../../framework/common/types/products";
import { Container } from "../ui/Container";
import { ProductSlider } from "./ProductSlider/ProductSlider";

type Props = {
  product: Product;
};

export const ProductView: FC<Props> = ({ product }) => {
  return (
    <Container>
      <div className="relative grid items-start gap-8 grid-cols-1 overflow-x-hidden lg:grid-cols-12">
        <div
          className="relative flex px-0 pb-0 box-border col-span-1 bg-violet lg:mx-0 lg:col-span-6"
          style={{ minHeight: 600 }}
        >
          <div className="absolute inset-0 bg-violet z-0 h-full lg:left-6 lg:pr-16">
            <h1 className="px-6 py-2 bg-primary text-primary font-bold">
              {product.name}
            </h1>
            <div className="px-6 py-2 pb-4 bg-primary text-primary font-bold inline-block tracking-wide">
              {product.price.value}
              50
              {product.price.currencyCode}
            </div>
          </div>
          <ProductSlider>
            {product.images.map((image) => (
              <div className="h-full" key={image.url}>
                <Image
                  className="w-full h-auto max-h-full object-cover"
                  src={image.url}
                  alt={image.alt}
                  width={1050}
                  height={1050}
                  quality="85"
                />
              </div>
            ))}
          </ProductSlider>
        </div>
        <div className="flex flex-col col-span-1 mx-auto max-w-8xl px-6 w-full h-full">
          <section>
            <div className="pb-4">
              <h2 className="uppercase font-medium">Color</h2>
              <div className="flex flex-row py-4">Variant Options Here!</div>
            </div>
            <div className="pb-14 break-words w-full max-w-xl text-lg">
              {product.description}
            </div>
          </section>
          <div>
            <button
              onClick={() => {}}
              aria-label="Add to Cart"
              style={{ textAlign: "center", width: "100%", maxWidth: 300 }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

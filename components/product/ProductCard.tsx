import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { Product } from "../../framework/common/types/products";

type Props = {
  product: Product;
};

export const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a className="relative max-h-full">
        <div className="absolute inset-0 z-0 before:block w-full h-full bg-repeat-space bg-product-pattern transition-transform duration-500 hover:before:scale-95"></div>
        <div className="absolute top-0 left-0 z-20">
          <h3 className="font-bold leading-9">
            <span className="py-4 px-6 decoration-clone bg-primary">
              {product.name}
            </span>
          </h3>
          <span className="pb-4 pt-2 px-6 font-semibold text-sm tracking-wide bg-primary">
            {product.price.value} {product.price.currencyCode}
          </span>
        </div>
        {product.images && (
          <Image
            className="hover:scale-105 transition-transform duration-500 block"
            alt={product.name ?? "Product image"}
            src={product.images[3].url}
            height={540}
            width={540}
            quality="85"
            layout="responsive"
          />
        )}
      </a>
    </Link>
  );
};

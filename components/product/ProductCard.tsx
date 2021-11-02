import { FC } from "react";
import { Product } from "../../framework/common/types/products";

import Link from "next/link";
import Image from "next/image";

type Props = {
  product: Product;
};

export const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a>
        <div>
          <h3>
            <span>{product.name}</span>
          </h3>
          <span>14 $</span>
        </div>
        {product.images && (
          <Image
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

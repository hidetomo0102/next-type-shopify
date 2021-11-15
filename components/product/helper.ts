import { Product } from "../../framework/common/types/products";

type AvailableChoices = "color" | "size" | string;

export type Choices = {
  [P in AvailableChoices]: string;
};

export const getVariant = (product: Product, choices: Choices) =>
  product.variants.find((variant) =>
    variant.options.every((variantOption) => {
      const optionName = variantOption.displayName.toLocaleLowerCase();
      return (
        optionName in choices &&
        choices[optionName] === variantOption.values[0].label
      );
    })
  );

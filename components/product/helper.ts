import { Product } from "../../framework/common/types/products";

type AvailableChoices = "color" | "size" | string;

export type Choices = {
  [P in AvailableChoices]: string;
};

export const getVariant = (product: Product, choices: Choices) => {
  const variant = product.variants.find((variant) => {
    return true;
  });

  const isMatchingChoice = variant?.options.every((variantOption) => {
    const optionName = variantOption.displayName.toLocaleLowerCase();
    if (optionName in choices) {
      if (choices[optionName] === variantOption.values[0].label) {
        return true;
      }
    }

    return false;
  });

  return isMatchingChoice;
};

import { useHook, useMutationHook } from "../utils/useHook";

export const useAddItem = () => {
  const hook = useHook((hooks) => {
    return hooks.cart.useAddItem;
  });

  return useMutationHook({ ...hook });
};

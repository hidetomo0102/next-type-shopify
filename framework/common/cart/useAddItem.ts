import { useHook } from "../utils/useHook";

export const useAddItem = () => {
  const hook = useHook((hooks) => {
    return hooks.cart.useAddItem;
  });

  return hook.useHook({
    fetch: hook.fetcher,
  });
};

export const useAddItem = () => {
  return handler.useHook();
};

const handler = {
  fetcher: () => {
    console.log("Fetching Data");
  },
  useHook: () => {
    return (input: any) => {
      return {
        output: JSON.stringify(input) + "_MODIFIED",
      };
    };
  },
};

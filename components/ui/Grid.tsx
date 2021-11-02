import { FC, ReactNode } from "react";

export const Grid: FC<ReactNode> = ({ children }) => {
  return (
    <div className="grid gap-0 grid-cols-1 lg:grid-cols-3 grid-rows-2">
      {children}
    </div>
  );
};

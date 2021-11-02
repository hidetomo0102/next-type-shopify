import { FC, ReactNode } from "react";
import s from "./Grid.module.css";

export const Grid: FC<ReactNode> = ({ children }) => {
  return (
    <div className="grid gap-0 grid-cols-1 lg:grid-cols-3 grid-rows-2">
      {children}
    </div>
  );
};

import { FC, ReactNode } from "react";
import cn from "classnames";

type Props = {
  children: ReactNode[];
  variant?: "primary" | "secondary";
};

export const Marquee: FC<Props> = ({ children, variant = "primary" }) => {
  const rootClassName = cn("bg-black flex flex-row items-center", {
    ["bg-white flex flex-row items-center"]: variant == "secondary",
  });
  return (
    <div className={rootClassName} style={{ height: 320 }}>
      {children}
    </div>
  );
};

import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode[];
};

export const Marquee: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-row items-center" style={{ height: 320 }}>
      {children}
    </div>
  );
};
